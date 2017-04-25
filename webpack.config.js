const path = require('path');
module.exports = {
    context: path.join(__dirname, './'),
    entry : {
        app: './app',
        // index: './index'
    },
    output : {
        path: path.join(__dirname, './built'),
        filename : '[name].js'
    },

    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader" }]
        }
    };
