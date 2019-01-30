const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const base_environment =
{
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.scss']
    },
    entry: "./src/",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [{loader: "ts-loader", options: {onlyCompileBundledFiles: true}}]
                
            },
            {
                test: /\.scss$/,
                use: [
                    { loader: "style-loader" },
                    {
                        loader: 'typings-for-css-modules-loader',
                        options: {
                            modules: true,
                            camelCase: true,
                            namedExport: true
                        }
                    },
                    { loader: "sass-loader" }
                ]
            }
        ],
    noParse: /ansible/
    },
    plugins: [
        new CleanWebpackPlugin(['./dist']),
        new HtmlWebpackPlugin({ template: './src/index.template.html', inject: 'body' }),
        new webpack.WatchIgnorePlugin([/css\.d\.ts$/]),
    ]
};

module.exports = env =>
{
    if( env.production )
        return base_environment;
    else
        return {
            ...base_environment,
            devtool: 'inline-source-map',
            devServer: { contentBase: './dist', hot: true, historyApiFallback: true, publicPath: '/'},
            plugins: [
                ...base_environment.plugins,
                new webpack.HotModuleReplacementPlugin()
            ]
        };
};
