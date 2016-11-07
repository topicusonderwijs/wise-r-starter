var fs = require('fs');
var webpack = require('webpack');
var config = require('./webpack.config');

// copy example config, only if actual config does not exist
fs.createReadStream('frontend.config.js.example')
    .pipe(fs.createWriteStream('frontend.config.js',{flags:'wx'}).on("error", function() {}));
fs.createReadStream('backend.config.js.example')
    .pipe(fs.createWriteStream('backend.config.js',{flags:'wx'}).on("error", function() {}));

// build frontend at build/app.js
webpack(config,function() {});
