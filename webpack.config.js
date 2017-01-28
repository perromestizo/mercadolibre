'use strict';

const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js(x)?$/,
                include: [
                    path.resolve(__dirname, 'src')
                ],
                loader: 'babel'
            },
            {
                test: /\.css$/,
                include: [
                    path.resolve(__dirname, 'src')
                ],
                loader: 'style!css?modules&camelCase&localIdentName=[name]__[hash:base64:10]'
            }
        ]
    },
    resolve: {
        alias: {
            'buttons': path.resolve(__dirname, 'src', 'components', 'buttons')
        },
        extensions: ['', '.js', '.jsx']
    }
};
