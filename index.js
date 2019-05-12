require("@babel/register")({
    presets: [
        ["@babel/preset-env"],
    ]
});

console.log('test');

const test = require('./src/main').default;
test();
