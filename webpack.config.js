var path = require("path");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

var config = {
    entry: SRC_DIR + "/index.js",
    output: {
        path: DIST_DIR + "/app",
        filename: "bundle.js",
        publicPath: "/app/"
    },
    module: {
        loaders: [
            {
                test: /\.js?/,
                include: SRC_DIR,
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015", "stage-2"]
                }
            },
            {
                test: /\.less$/,
                include: SRC_DIR,
                loader: ExtractTextPlugin.extract('style', 'css!less')
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Any.Do ReactJS',
            template: 'ejs!src/index.ejs',
            filename: DIST_DIR + '/index.html',
            mobile: true,
            appMountId: 'app',
            chunksSortMode: 'none'
        }),
        new ExtractTextPlugin('[name].css', {
            allChunks : true // 若要按需加载 CSS 则请注释掉该行
        })
    ]
};

module.exports = config;
