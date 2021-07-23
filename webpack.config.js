// Generated using webpack-cli http://github.com/webpack-cli
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.tsx',//точка входа
    devtool: "source-map",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "index.js",
    },
    devServer: {
        open: true,
        host: 'localhost',
        historyApiFallback: true,
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', ".jsx", ".json"],
    },
    plugins: [
        //new HtmlWebpackPlugin({
        //    template: 'index.html',
        //}),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
          }),

        // Add your plugins here
        // Learn more obout plugins from https://webpack.js.org/configuration/plugins/
    ],
    module: {
        rules: [
            {
                test: /\.(js|ts)x?$/,
                loader: require.resolve("babel-loader"),//чувак, отвечающий за подключение babel и скармливать ему файлы jsx и tsx
                exclude: /node_modules/,
              },

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
};
