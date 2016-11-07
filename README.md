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

This application consists of a minimalist Node.js backend plus single-page Javascript frontend. Together, they are able
to authenticate a user on the [Wise-r](https://wise-r.nl) platform (using either the OAuth2 *authentication code flow*
or the *implicit flow*), and fetch some data about this user using the *client credentials* flow.

The code serves as an example for Educative Applications and is deliberately written in plain, framework-independent
Javascript.

If you would like to try it out, contact us at <wise-r@topicus.nl> for developer credentials.
