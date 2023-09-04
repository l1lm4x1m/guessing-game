const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.[contenthash].js",
    },
    resolve: {
        alias: {
            "@components": path.resolve("./src/components"),
            "@redux": path.resolve("./src/redux"),
            "@utils": path.resolve("./src/utils"),
        },
    },
    devServer: {
        open: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: "babel-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            favicon: "./src/images/favicon.ico",
        }),
        new MiniCssExtractPlugin({
            filename: "bundle.[contenthash].css",
        }),
    ],
};
