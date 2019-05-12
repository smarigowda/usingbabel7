require("@babel/register")({
    ignore: [],
    presets: [
        [ "@babel/env" ],
    ]
});

console.log('test... !!!....');

module.exports = require('./src/main');