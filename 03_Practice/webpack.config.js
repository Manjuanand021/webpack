 let webpack = require('webpack');
 module.exports = {
     entry: './src/app.js',
     output: {
         path: './dist/',
         filename: 'app.bundle.js'
     },
     module: {
         loaders: [{
                 test: /\.js$/,
                 exclude: /node_modules/,
                 loader: 'babel-loader',
                 query: {
                     presets: ['es2015']
                 }
             },
             { test: /\.css$/, loader: "style-loader!css-loader" }
         ]
     },
     plugins: [
         new webpack.optimize.UglifyJsPlugin({
             compress: {
                 warnings: false,
             },
             output: {
                 comments: false,
             },
         }),
     ]
 };
