const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        app: "./src/index.js",
    },
    resolve :{
        alias: {
            Components: path.resolve(__dirname, "src/scripts/components/"),
            Functions: path.resolve(__dirname, "src/scripts/functions/"),
            Images: path.resolve(__dirname, "src/assets/imgs"),
            Styles: path.resolve(__dirname, "src/styles"),
            Database: path.resolve(__dirname, "src/db"),
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ["html-loader"],
            },
            {
                 test: /\.txt$/,
                 use: 'raw-loader'
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource",
            },
            {
                test: /\.(png|svg|bmp|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            }
        ],
    },
};