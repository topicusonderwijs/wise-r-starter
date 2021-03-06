/*jslint node: true, es6: true, bitwise: true*/
/*eslint no-bitwise: "warn", no-console: "warn"*/

// Load the modules
var express = require('express'),
    cookieParser = require('cookie-parser'),
    jsonwebtoken = require('jsonwebtoken'),
    ClientOAuth2 = require('client-oauth2'),
    path = require('path'),
    WiserClient = require('wise-r-openapi-client'),
    SyncClientConstructor = require('wise-r-sync-client'),
    config = require('../backend.config'),
    url = require('url');

// Initialize
var usersApi = new WiserClient.UsersApi(),
    schoolsApi = new WiserClient.SchoolsApi(),
    apiClientInstance = WiserClient.ApiClient.instance,
    syncClient = new SyncClientConstructor(apiClientInstance),
    port = url.parse(config.backend).port || 80,    // If the URL in backend.config.js (field 'backend') includes a port number, use this.
    app = express();

var authService = new ClientOAuth2({
    clientId: config.oauthClientId,
    clientSecret: config.oauthClientSecret,
    authorizationUri: config.idp + '/auth',
    accessTokenUri: config.idp + '/token',
    redirectUri: config.backend + '/callback',
    scopes: ['openid']
});

// collection of authenticated sessions
// (maps session id to id_token claims)
var sessions = {};

// base path for Wise-r OpenAPI client is [host]/api
WiserClient.ApiClient.instance.basePath = config.apiBaseUrl;

console.log('Wise-r identity provider = ' + config.idp);
console.log('Wise-r API base = ' + config.apiBaseUrl);
console.log('OAuth client id = ' + config.oauthClientId);


// http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript#2117523
const generateUUID = function () {
    'use strict';
    const time = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';

    uuid = uuid.replace(/[xy]/g, function (character) {
        const r = (time + Math.random() * 16) % 16 | 0;
        var ret;
        if (character === 'x') {
            ret = r;
        } else {
            ret = (r & 0x3 | 0x8);
        }
        return ret.toString(16);
    });

    return uuid;
};

const checkSessionAuthenticated = function (req, res) {
    'use strict';
    var claims = sessions[req.cookies.sessionId];
    if (claims) {
        return claims;
    }

    res.end();
    //throw new Error('invalid/no sessionId');
    //console.error('invalid/no sessionId');
    return false;
};

const createNonceAndStartAuthCodeFlow = function (ignore, res) {
    'use strict';
    var oauthState = generateUUID();
    // [idp]/auth?
    //   client_id=...
    //   &redirect_uri=[backend]/callback
    //   &scope=openid
    //   &response_type=code
    //   &state=[uuid]
    //   &provider=...
    //   &nonce=[uuid]
    var uri = authService.code.getUri({state: oauthState}) + '&provider=' + config.provider + '&nonce=' + oauthState;
    res.cookie('oauthState', oauthState);
    res.redirect(uri);
};

const exchangeTokenAndRedirectToFrontend = function (req, res) {
    'use strict';
    var cookieState = req.cookies.oauthState;
    res.cookie('oauthState', null);
    console.log(req.originalUrl);
    authService.code.getToken(req.originalUrl, {state: cookieState})
        .then(function (token) {
            var id_token = token.data.id_token,
                jwt_options = {algorithms: ['RS256'], audience: config.oauthClientId, issuer: config.idp},
                claims = jsonwebtoken.verify(id_token, config.sso_pub_key, jwt_options),
                sessionId = generateUUID();

            console.log(token);

            if (cookieState !== claims.nonce) {
                console.log('incorrect nonce');
                res.end();
                return;
            }

            sessions[sessionId] = claims;
            res.cookie('sessionId', sessionId);
            res.redirect(config.backend + '/showdata');
        })
        .catch(function (error) {
            res.send(error);
        });
};

// Use client credentials to obtain an access token with full access to REST resources.
const getClientAccessToken = function () {
    'use strict';
    return authService.credentials.getToken()
        .then(function (response) {
            console.log('Received OAuth2 access token.');
            return response.accessToken;
        });
};

const getUserData = function (req, res) {
    'use strict';
    var claims = checkSessionAuthenticated(req, res);
    getClientAccessToken()
        .then(function (clientAccessToken) {
            apiClientInstance.authentications.oauth_client_credentials.accessToken = clientAccessToken;
            // fetches [host]/api/v1/users/[subject-id] with access token in Autorization header
            return usersApi.getUser(claims.sub);
        })
        .then(function (obj) {
            res.json(obj);
        })
        .catch(function (err) {
            console.error('Error caught in getUserData->getClientAccessToken', err);
        });
};

const getChanges = function (ignore, res) {
    'use strict';
    var changes = {},
        schoollocations;
    getClientAccessToken()
        .then(function (clientAccessToken) {
            apiClientInstance.authentications.oauth_client_credentials.accessToken = clientAccessToken;
            return schoolsApi.getSchoolLocations();
        })
        .then(function (data) {
            schoollocations = data;
            console.log('Start processing changes for', schoollocations.length, 'locations.');
            schoollocations.forEach(function (schoolLocation) {
                changes[schoolLocation.id] = [];
            });

            return syncClient.changesRetrieval(schoollocations, function (batch) {
                console.log('Processing ' + batch.length + ' changes...');
                batch.forEach(function (change) {
                    changes[change.schoolLocationId].push(change);
                });
            });
        })
        .then(function (lastId) {
            var results = {};
            console.log('All changes received. Last change id = ' + lastId);
            schoollocations.forEach(function (school) {
                results[school.name] = changes[school.id];
            });
            res.json(results);
        })
        .catch(function (error) {
            console.error('Error caught in getChanges', error);
            res.send(error);
        });
};

const isAuthCodeCallback = function (req) {
    'use strict';
    return req.query.state !== undefined;
};

const serveFrontend = function (ignore, res) {
    'use strict';
    res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
};

// *** API Definition ***

app.listen(port, function () {
    'use strict';
    console.log('Wise-r-starter server listening at port ' + port + ' ...');
});
app.use(cookieParser());

// Serve frontend application
app.use('/', express.static('./build'));

// Serve frontend at this URL when the Authorization Code flow has finished.
app.get('/showdata', serveFrontend);

// A frontend page for admins, displaying the changes from the sync API.
app.get('/admin', serveFrontend);

// Frontend sends user here to start the Authorization Code flow.
// This will redirect to the IDP.
app.get('/authcode', createNonceAndStartAuthCodeFlow);

// This endpoint can handle two kinds of OAuth2 responses.
// (1) Authorization Code: OAuth2 response is in the query string, and is handled by the server.
// (2) Implicit: OAuth2 response is in the URL hash, which the server doesn't even get to see;
//     we just serve out the single-page frontend so it can handle the response.
// In a real application, you only need to implement one flow (Authorization Code is recommended for higher security).
app.get('/callback', function (req, res) {
    'use strict';
    if (isAuthCodeCallback(req)) {
        exchangeTokenAndRedirectToFrontend(req, res);
    } else {
        serveFrontend(req, res);
    }
});

// JSON endpoint for XHR communication between frontend and backend
app.get('/userdata', getUserData);

// Another JSON endpoint. Top secret but unsecured!
app.get('/secretdata', getChanges);
