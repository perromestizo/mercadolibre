'use strict';

let path = require('path');

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
                test: /\.scss$/,
                include: [
                    path.resolve(__dirname, 'src')
                ],
                loader: 'style!css?modules&camelCase&localIdentName=[local]__[hash:base64:5]!sass'
            },
            {
                test: /\.png$/,
                include: [
                    path.resolve(__dirname, 'src')
                ],
                loader: 'url?limit=10000'
            }
        ]
    },
    resolve: {
        alias: {
            'actions': path.resolve(__dirname, 'src', 'actions'),
            'components': path.resolve(__dirname, 'src', 'components'),
            'config': path.resolve(__dirname, 'src', 'config'),
            'constants': path.resolve(__dirname, 'src', 'constants'),
            'dispatcher': path.resolve(__dirname, 'src', 'dispatcher'),
            'images': path.resolve(__dirname, 'src', 'images'),
            'stores': path.resolve(__dirname, 'src', 'stores'),
            'utils': path.resolve(__dirname, 'src', 'utils')
        },
        extensions: ['', '.js', '.jsx']
    },
    devServer: {
        historyApiFallback: true
    }
};
