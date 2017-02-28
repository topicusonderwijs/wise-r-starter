# Wise-r starter kit

A small example application that connects to the Wise-r platform as an OAuth2 client.

## Install it!
1. install [Node.js](https://nodejs.org/)
2. clone this Github repository to your machine
3. in the project root, run `npm install` to fetch the dependencies
4. in the project root, run `npm run-script build` to package the frontend application
(and copy the config examples)
5. edit `backend.config.js` and `frontend.config.js`: fill in your OAuth2 client credentials
at the designated places

## Run it!
:point_right: in the project root, run `npm run-script start`. This runs the web server, which can be
accessed by default at `http://localhost:8888`.

## What does it do?

This application consists of a minimalist [Node.js backend](src/backend.js) plus [single-page Javascript frontend](src/frontend.js).
It demonstrates 3 different ways in which an Educational Application can connect to the [Wise-r](https://wise-r.nl) platform:

1. In the OpenID Connect *authentication code flow*, the user is redirected to the Wise-r Identity Provider and
subsequently to the Wise-r-starter `/callback` endpoint, where the backend validates the identity claim and issues
 a session to the user. Then, the user is redirected to `/showdata`, which serves a frontend page that communicates with
 the `/userdata` JSON endpoint at the backend. At this endpoint, the backend recognizes the session and fetches some
 data about the user using its own *OAuth client credentials* (which must not be available at the frontend, because they
 give access to all schools and users).
2. In the OpenID Connect *implicit flow*, the backend plays no significant role other than a plain web server. Again,
the user is redirected to the Wise-r Identity Provider and back to `/callback`, but now the backend just serves out the
frontend application. The frontend validates the identity claim and shows some personal data present in the JWT. Note:
as of yet, this flow is not so useful because the data in the JWT is all the client can get. The client also receives
an OAuth token in the name of the user, but Wise-r has no user-level resources at the moment. This will probably change
in the future.
3. The third case demonstrates the application-wide *data synchronization*. The backend simply fetches all the changes
since the beginning of time (using the client credentials) at the request of the frontend. This happens without any
authentication whatsoever and is meant strictly for demonstration purposes. In a realistic application, synchronisation
should happen at night (it can take quite some time) and the resulting personal data is kept secure. 

The code serves as an example for Educational Applications and is deliberately written in plain, framework-independent
Javascript.

If you would like to try it out, contact us at <wise-r@topicus.nl> for developer credentials.

## Libraries

This repository also hosts two Javascript libraries that Educational Applications can use to connect:
[wise-r-openapi-client](openapi-client), which is generated from our API, and [wise-r-sync-client](sync-client),
which provides a synchronisation workflow. They are both being used at the Wise-r-starter backend.

## Development tip

Use `npm link` to develop on the dependency packages without releasing them:
```
wise-r-starter$ cd openapi-client
wise-r-starter/openapi-client$ npm link
wise-r-starter/openapi-client$ cd ../sync-client
wise-r-starter/sync-client$ npm link wise-r-openapi-client
wise-r-starter/sync-client$ npm link
wise-r-starter/sync-client$ cd ..
wise-r-starter$ npm link wise-r-openapi-client
wise-r-starter$ npm link wise-r-sync-client
```