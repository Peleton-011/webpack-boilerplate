const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: {
        index: "./src/index.js",
        print: "./src/print.js",
    },
    devtool: "inline-source-map",
    devServer: {
        static: "./dist", //The static directory where the server gets the data
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Output Management",
        }),
    ],
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    optimization: {
        runtimeChunk: "single", //Check docs about Code Splitting
    },
};

//https://webpack.js.org/guides/