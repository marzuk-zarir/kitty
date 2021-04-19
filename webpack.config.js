const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
let target = 'web';
let minimize = false;

if (process.env.NODE_ENV === 'production') {
    target = 'browerslist';
    minimize = true;
}

const config = {
    entry: {
        bundle: './src/scripts/main.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    target: target,
    devServer: {
        contentBase: path.join(__dirname, './dist'),
        port: 3000,
    },
    devtool: 'source-map',
    optimization: {
        minimize: minimize,
        minimizer: ['...', new CssMinimizerPlugin()],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_module/,
                use: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '',
                        },
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    'postcss-loader',
                ],
            },
            {
                test: /\.(png|ico|jpe?g)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: './assets',
                            name: '[name].[ext]',
                        },
                    },
                ],
            },
            {
                test: /\.(svg|eot|woff|woff2|ttf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: './webfonts',
                            name: '[name].[ext]',
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        new MiniCssExtractPlugin({
            filename: 'bundle.min.css',
        }),
    ],
};

module.exports = config;
