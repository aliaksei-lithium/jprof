var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var webpackConfig = {
    entry: './index.js',
    output: {
        path: '.',
        filename: 'index_bundle.js'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
            },
            {
                test: /\.html$/,
                exclude: /index\.html$/, // you need to exclude your base template (unless you do not want this plugin own templating feature)
                loader: "html"
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("[name].css"),
        new HtmlWebpackPlugin({
            inject: true,
            filename: 'index.html',
            template: 'src/index.html',
            title: "Java Professionals Community"
        })]
};

module.exports = webpackConfig;