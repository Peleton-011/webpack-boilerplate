const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: {
        index: "./src/index.js",
        print: "./src/print.js",
    },
    devtool: "inline-source-map",
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
        ],
    },
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