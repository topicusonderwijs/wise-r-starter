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
They authenticate a user through the [Wise-r](https://wise-r.nl) platform:
* either on the backend, using the OpenID Connect *authentication code flow*, after which it fetches some data
about this user using the OAuth2 *client credentials* flow;
* or on the frontend, using the OpenID Connect *implicit flow*, after which the contents of the ID token are shown.

The code serves as an example for Educational Applications and is deliberately written in plain, framework-independent
Javascript.

If you would like to try it out, contact us at <wise-r@topicus.nl> for developer credentials.
