const webpack = require("webpack");
const { merge } = require("webpack-merge");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const designerConfig = require("./webpack.designer.js");
const runtimeConfig = require("./webpack.runtime.js");


const developmentConfig = {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        hot: true,
        historyApiFallback: true
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                { from: `./src/config.design.json`, to: `./config.json` },
            ]
        })
    ],
    resolve: {
        fallback: {
            "fs": false,
            "tls": false,
            "net": false,
            "path": false,
            "zlib": false,
            "http": false,
            "https": false,
            "stream": false,
            "buffer": false
        }
    }
}

// module.exports = []
//     .concat(designerConfig)
//     .map(x => merge(x, developmentConfig));


module.exports = [merge(designerConfig, developmentConfig), runtimeConfig(true)]