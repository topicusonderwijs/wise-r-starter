/*jslint browser:true, es6:true, bitwise: true*/
/*eslint no-bitwise: "warn"*/
/*global window, fetch*/

var ClientOAuth2 = require('client-oauth2'),
    config = require('../frontend.config'),
    jsrsasign = require('jsrsasign');

var authService = new ClientOAuth2({
    clientId: config.oauthClientId,
    authorizationUri: config.idp + '/auth',
    accessTokenUri: config.idp + '/token',
    redirectUri: config.backend + '/callback',
    scopes: ['openid']
});

if (!String.prototype.startsWith || !fetch) {
    throw new Error('This browser does not support String.prototype.startsWith and/or fetch. Please upgrade the browser');
}

// http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript#2117523
function generateUUID() {
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
}

function stringifyObject(obj) {
    'use strict';
    if (typeof obj === 'object') {
        return JSON.stringify(obj);
    }
    return obj;
}

function extractIdTokenFromOAuthResponse() {
    'use strict';
    var storedState = sessionStorage.getItem('oauth_state');
    sessionStorage.setItem('oauth_state', null);
    if (storedState) {
        return authService.token.getToken(window.location.href, {state: storedState})
            .then(function (token) {
                var id_token = token.data.id_token;
                var accept = {alg: ['RS256'], aud: config.oauthClientId, iss: config.idp};
                var valid = jsrsasign.jws.JWS.verifyJWT(id_token, config.sso_pub_key, accept);
                var claims = jsrsasign.jws.JWS.parse(id_token).payloadObj;
                if (!valid) {
                    throw new Error('invalid token');
                }
                if (storedState !== claims.nonce) {
                    throw new Error('incorrect nonce');
                }
                return claims;
            });
    }
}

function renderFlowChoiceView() {
    'use strict';
    var oauthState = generateUUID();
    // [idp]/auth?
    //   client_id=...
    //   &redirect_uri=[backend]/callback
    //   &scope=openid
    //   &response_type=id_token
    //   &state=[uuid]
    //   &provider=parnassys
    sessionStorage.setItem('oauth_state', oauthState);
    var tokenUri = authService.token.getUri({state: oauthState}) + '&provider=' + config.provider + '&nonce=' + oauthState;
    // hack the response_type parameter because client-oauth2 has no OIDC support (yet?)
    var uri = tokenUri.replace("response_type=token", "response_type=id_token");

    document.getElementById('flowChoiceView').style.visibility = 'visible';
    document.getElementById('implicit').href = uri;
}

function fetchUserData() {
    'use strict';
    return fetch(config.backend + '/userdata', {credentials: 'same-origin'})
        .then(function (resp) {
            return resp.json();
        });
}

function fetchSecretData() {
    'use strict';
    return fetch(config.backend + '/secretdata', {credentials: 'same-origin'})
        .then(function (resp) {
            return resp.json();
        });
}

function renderObject(obj) {
    'use strict';
    console.log('Received data:');
    console.log(obj);

    document.getElementById('dataView').style.visibility = 'visible';
    var table = document.getElementById('results').appendChild(document.createElement("table"));
    Object.keys(obj).forEach(function (key) {
        var tr, td_key, val, td_val;
        tr = table.appendChild(document.createElement("tr"));
        td_key = tr.appendChild(document.createElement("td"));
        td_key.innerHTML = key;
        val = obj[key];
        td_val = tr.appendChild(document.createElement("td"));
        if (Array.isArray(val)) {
            val.forEach(function (item, index) {
                if (index !== 0) {
                    tr = table.appendChild(document.createElement("tr"));
                    td_key = tr.appendChild(document.createElement("td"));
                    td_val = tr.appendChild(document.createElement("td"));
                }
                td_val.innerHTML = stringifyObject(item || []);
            });
        } else {
            td_val.innerHTML = stringifyObject(val);
        }
    });
}

function renderErrorView(err) {
    'use strict';
    document.getElementById('dataView').style.visibility = 'visible';
    document.getElementById('results').innerHTML = err.toString();
}


function router() {
    'use strict';
    // check if we're at the callback endpoint
    if (window.location.pathname.startsWith('/callback')) {
        extractIdTokenFromOAuthResponse().then(renderObject).catch(renderErrorView);
    } else if (window.location.pathname.startsWith('/showdata')) {
        fetchUserData().then(renderObject).catch(renderErrorView);
    } else if (window.location.pathname.startsWith('/admin')) {
        fetchSecretData().then(renderObject).catch(renderErrorView);
    } else {
        renderFlowChoiceView();
    }
}

window.onload = router;