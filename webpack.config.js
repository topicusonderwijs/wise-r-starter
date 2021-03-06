var path = require('path');

module.exports = {
    entry: "./src/frontend.js",
    output: {
        path: path.join(__dirname,'build'),
        filename: "app.js"
    },
    module: {
        rules: [{test: /\.pem$/, loader: "raw-loader"}]
    }
};
