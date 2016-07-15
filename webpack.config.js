var path = require('path'),
    webpack = require('webpack'),
    packageData = require('./package.json');


module.exports = {
    entry: path.resolve(__dirname, packageData.main),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                 test: /\.(jpe?g|png|gif|svg|ico)$/i, // images are converted into blobs
                 loaders: [
                     'url?limit=8192',
                     'img'
                 ]
               }
        ]
    },

    resolve: {
        extensions: ['', '.js', '.jsx']
    },
};
