const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const toml = require("toml");
const yaml = require("yamljs");
const json5 = require("json5");

module.exports = {
    mode: "development",
    entry: {
        index: "./src/index.js",
        print: "./src/print.js",
    },
    devtool: "eval-source-map", //for production, use none
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/i,
                type: "asset/resource",
            },
            {
                test: /\.(woff|woff2|ttf|eot|otf)$/i,
                type: "asset/resource",
            },
            {
                test: /\.(csv|tsv)$/i,
                use: ["csv-loader"],
            },
            {
                test: /\.xml$/i,
                use: ["xml-loader"],
            },
            {
                test: /\.json5$/i,
                type: "json",
                parser: {
                    parse: json5.parse,
                },
            },
            {
                test: /\.yaml$/i,
                type: "json",
                parser: {
                    parse: yaml.parse,
                },
            },
            {
                test: /\.toml$/i,
                type: "json",
                parser: {
                    parse: toml.parse,
                },
            },
        ],
    },
    devServer: {
        static: "./dist", //The static directory where the server gets the data
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Sample",
        }),
    ],
    devServer: {
        runtimeChunk: "single",
    },
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