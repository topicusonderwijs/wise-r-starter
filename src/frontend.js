var ClientOAuth2 = require('client-oauth2');
var config = require('../frontend.config');
var jsrsasign = require('jsrsasign');

var authService = new ClientOAuth2({
    clientId: config.oauthClientId,
    authorizationUri: config.idp + '/auth',
    accessTokenUri: config.idp + '/token',
    redirectUri: config.backend + '/callback',
    scopes: ['openid']
});

function router() {
    // check if we're at the callback endpoint
    if (startsWith(window.location.pathname,'/callback')) {
        extractIdTokenFromOAuthResponse().then(renderObject).catch(renderErrorView);
    } else if (startsWith(window.location.pathname,'/showdata')) {
        fetchUserData().then(renderObject).catch(renderErrorView);
    } else if (startsWith(window.location.pathname,'/admin')) {
        fetchSecretData().then(renderObject).catch(renderErrorView);
    } else {
        renderFlowChoiceView();
    }
}

window.onload = router;

function renderFlowChoiceView() {
    var oauthState = generateUUID();
    // [idp]/auth?
    //   client_id=...
    //   &redirect_uri=[backend]/callback
    //   &scope=openid
    //   &response_type=id_token
    //   &state=[uuid]
    //   &provider=parnassys
    sessionStorage.setItem('oauth_state',oauthState);
    var tokenUri = authService.token.getUri({state:oauthState}) + '&provider=' + config.provider + '&nonce='+oauthState;
    // hack the response_type parameter because client-oauth2 has no OIDC support (yet?)
    var uri = tokenUri.replace("response_type=token","response_type=id_token");

    document.getElementById('flowChoiceView').style.visibility = 'visible';
    document.getElementById('implicit').href = uri;
}

function fetchUserData() {
    return fetch(config.backend + '/userdata', {credentials: 'same-origin'})
        .then(function (resp) {
            return resp.json();
        });
}

function fetchSecretData() {
    return fetch(config.backend + '/secretdata', {credentials: 'same-origin'})
        .then(function (resp) {
            return resp.json();
        });
}

function renderObject(obj) {
    console.log('Received data:');
    console.log(obj);

    document.getElementById('dataView').style.visibility = 'visible';
    var table = document.getElementById('results').appendChild(document.createElement("table"));
    for (key in obj) {
        var tr = table.appendChild(document.createElement("tr"));
        var td_key = tr.appendChild(document.createElement("td"));
        td_key.innerHTML = key;
        var val = obj[key];
        var td_val = tr.appendChild(document.createElement("td"));
        if (Array.isArray(val)) {
            td_val.innerHTML = stringifyObject(val[0] || []);
            for (var i=1; i<val.length; i++) {
                tr = table.appendChild(document.createElement("tr"));
                td_key = tr.appendChild(document.createElement("td"));
                td_val = tr.appendChild(document.createElement("td"));
                td_val.innerHTML = stringifyObject(val[i]);
            }
        } else {
            td_val.innerHTML = stringifyObject(val);
        }
    }
}

function stringifyObject(obj) {
    return typeof(obj)=="object" ? JSON.stringify(obj) : obj;
}

function renderErrorView(err) {
    document.getElementById('dataView').style.visibility = 'visible';
    document.getElementById('results').innerHTML= err.toString();
}

function extractIdTokenFromOAuthResponse() {
    var storedState = sessionStorage.getItem('oauth_state');
    sessionStorage.setItem('oauth_state',null);
    if (storedState)
        return authService.token.getToken(window.location.href, {state: storedState})
            .then(function (token) {
                var id_token = token.data.id_token;
                var accept = {alg: ['RS256'], aud: config.oauthClientId, iss: config.idp};
                var valid = jsrsasign.jws.JWS.verifyJWT(id_token, config.sso_pub_key, accept);
                if (!valid)
                    throw new Error('invalid token');
                var claims = jsrsasign.jws.JWS.parse(id_token).payloadObj;
                if (storedState != claims.nonce) {
                    throw new Error('incorrect nonce');
                }
                return claims;
            });
}


// String.startsWith is ES6, this is plain JS
function startsWith(candidate,prefix) {
    return (candidate.lastIndexOf(prefix,0)==0);
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
