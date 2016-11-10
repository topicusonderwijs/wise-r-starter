var express = require('express');
var cookieParser = require('cookie-parser');
var jsonwebtoken = require('jsonwebtoken');
var fetch = require('node-fetch');
var ClientOAuth2 = require('client-oauth2');
var path = require('path');

var config = require('../backend.config');

var app = express();
app.use(cookieParser());

// Serve frontend application
app.use('/', express.static('./build'));

// Frontend sends user here to start the Authorization Code flow.
// This will redirect to the IDP.
app.get('/authcode', createNonceAndStartAuthCodeFlow);

// Serve frontend at this URL when the Authorization Code flow has finished.
app.get('/showdata', serveFrontend);

// This endpoint can handle two kinds of OAuth2 responses.
// (1) Authorization Code: OAuth2 response is in the query string, and is handled by the server.
// (2) Implicit: OAuth2 response is in the URL hash, which the server doesn't even get to see;
//     we just serve out the single-page frontend so it can handle the response.
// In a real application, you only need to implement one flow (Authorization Code is recommended for higher security).
app.get('/callback', function (req, res) {
    if (isAuthCodeCallback(req))
        exchangeTokenAndRedirectToFrontend(req,res);
    else
        serveFrontend(req, res);
});

// app.get('/callback-authcode', exchangeTokenAndRedirectToFrontend);
// app.get('/callback-implicit', serveFrontend);


// JSON endpoint for XHR communication between frontend and backend
app.get('/userdata', getUserData);

// If the URL in backend.config.js (field 'backend') includes a port number, use this.
var port = (/:(\d+)/.exec(config.backend) || [80]).pop();
app.listen(port);



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

function createNonceAndStartAuthCodeFlow(req,res) {
    var oauthState = generateUUID();
    // [idp]/auth?
    //   client_id=...
    //   &redirect_uri=[backend]/callback
    //   &scope=openid
    //   &response_type=code
    //   &state=[uuid]
    //   &provider=...
    //   &nonce=[uuid]
    var uri = authService.code.getUri({state:oauthState})+'&provider=' + config.provider + '&nonce=' + oauthState;
    res.cookie('oauthState',oauthState);
    res.redirect(uri);
}

function exchangeTokenAndRedirectToFrontend(req, res) {
    var cookieState = req.cookies.oauthState;
    res.cookie('oauthState',null);
    console.log(req.originalUrl);
    authService.code.getToken(req.originalUrl, {state:cookieState})
        .then(function (token) {
            console.log(token);
            var id_token = token.data.id_token;
            var jwt_options = {algorithms: ['RS256'], audience: config.oauthClientId, issuer: config.idp};
            var claims = jsonwebtoken.verify(id_token, config.sso_pub_key, jwt_options);
            if (cookieState != claims.nonce) {
                console.log('incorrect nonce');
                res.end();
                return;
            }

            var sessionId = generateUUID();
            sessions[sessionId] = claims;
            res.cookie('sessionId',sessionId);
            res.redirect(config.backend + '/showdata');
        }).catch(function (error) {

            res.send(error);
        });
}

// Use client credentials to obtain an access token with full access to REST resources.
function getClientAccessToken() {
    return authService.credentials.getToken()
        .then(function (response) {
            console.log(response.accessToken)
            return response.accessToken;
        });
}

function getUserData(req,res) {
    var claims = sessions[req.cookies.sessionId];
    if (!claims) {
        console.log('invalid/no sessionId');
        res.end();
    }

    return getClientAccessToken()
        .then(function (clientAccessToken) {
            return fetch(config.apiBaseUrl + '/users/' + claims.sub, {headers: {'Authorization': 'Bearer ' + clientAccessToken}});
        }).then(function (resp) {
            return resp.json();
        }).then(function (obj) {
            res.json(obj);
        });
}

// http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript#2117523
function generateUUID() {
    var d = new Date().getTime();
    const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c=='x' ? r : (r&0x3|0x8)).toString(16);
    });
    return uuid;
}

function isAuthCodeCallback(req) {
    return req.query.state != undefined;
}

function serveFrontend(req, res) {
    res.sendFile(path.join(__dirname,'..','build','index.html'));
}
