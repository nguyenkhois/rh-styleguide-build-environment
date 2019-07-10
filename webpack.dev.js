const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common');
const customConfigs = require('./webpack.custom');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, customConfigs.distDir), // the root for the server
        watchContentBase: true, // so we reload if other stuff like CSS changes
        port: customConfigs.port,
        watchOptions: {
            ignored: /node_modules/
        },
        hot: true,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
});