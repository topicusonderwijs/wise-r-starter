var ClientOAuth2 = require('client-oauth2');
var config = require('../frontend.config');

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
        extractIdTokenFromOAuthResponse().then(renderDataView).catch(renderErrorView);
    } else if (startsWith(window.location.pathname,'/login')) {
        var idToken = extractIdToken(window.location.search);
        renderDataView(idToken);
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
    //   &response_type=token
    //   &state=[uuid]
    //   &provider=parnassys
    var uri = authService.token.getUri({state:oauthState}) + '&provider=' + config.provider;

    document.getElementById('flowChoiceView').style.visibility = 'visible';
    document.getElementById('implicit').href = uri;
    document.getElementById('authcode').href = config.backend + '/authcode';
}

function renderDataView(idToken) {
    var div = document.getElementById('dataView');
    div.style.visibility = 'visible';
    var table = div.appendChild(document.createElement("table"));
    fetch(config.backend + '/userdata?id_token=' + idToken)
        .then(function (resp) {
            return resp.json();
        }).then(function (userdata) {
            for (key in userdata) {
                var tr = table.appendChild(document.createElement("tr"));
                var td_key = tr.appendChild(document.createElement("td"));
                td_key.innerHTML = key;
                var val = userdata[key];
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
        });
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
    return authService.token.getToken(window.location.href, {state: storedState})
        .then(function (token) {
            return token.data.id_token;
        });
}

function extractIdToken(querystring) {
    return /id_token=(.*)$/.exec(querystring).pop();
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
