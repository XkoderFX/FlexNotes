const path = require("path");

module.exports = {
    entry: "./src/js/mainController.js",
    output: {
        path: path.resolve(__dirname, "dist/assets"),
        filename: "bundle.js",
    },

    devServer: {
        contentBase: path.resolve(__dirname, "dist"),
        publicPath: "/assets/",
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node-modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
            },

            {
                test: /\.(s*)css$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
        ],
    },
};
