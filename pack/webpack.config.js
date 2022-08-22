const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        path: path.join(__dirname, 'lib'),
        filename: 'index.js',
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }), new MiniCssExtractPlugin()
    ],

    devServer: {
        open: true,
        port: 30000
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.vue$/,
                use: ['vue-loader']
            },
            {
                test: /\.(gif|jpg|png|svg|ico)$/,
                type: 'asset/resource'
            }
        ]
    }

}