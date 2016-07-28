var path = require('path'),
    webpack = require('webpack'),
    packageData = require('./package.json'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin');


let plugins = [];

plugins.push(new ExtractTextPlugin('style.css'));
plugins.push(new HtmlWebpackPlugin({
    template: 'src/index.ejs'
}));
plugins.push(new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
}));
module.exports = {
    entry: path.resolve(__dirname, packageData.main),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    devtool: 'source-map',
    module: {
        loaders: [{
            test: /\.(jpe?g|png|gif|svg|ico)$/i, // images are converted into blobs
            loaders: [
                'url?limit=8192',
                'img'
            ]
        },
        {
            test: /\.scss$/, // sass compiled by webpack
            include: /(scss)/,
            loader: ExtractTextPlugin.extract('css!sass')
        },
        {
            test: /\.jsx?$/,
            exclude: /(node_modules)/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react']
            }
        }]
    },
    plugins: plugins,
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
};