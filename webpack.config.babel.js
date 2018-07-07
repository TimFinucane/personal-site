import * as path from 'path';
import * as  webpack from 'webpack';

import HtmlWebpackPlugin from 'html-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';

const base_environment =
{
    resolve:
    {
        extensions: ['.ts', '.tsx', '.js', '.scss']
    },
    entry: "./src/",
    output:
    {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
    module:
    {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader"
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: 'typings-for-css-modules-loader',
                        options:
                        {
                            modules: true,
                            camelCase: true,
                            namedExport: true
                        }
                    },
                    {
                        loader: "sass-loader"
                    }
                ]
            }
        ]
    },
    plugins:
    [
        new CleanWebpackPlugin(['./dist']),
        new HtmlWebpackPlugin({ template: './src/index.template.html', inject: 'body' }),
        new webpack.WatchIgnorePlugin([/css\.d\.ts$/]),
    ]
};

module.exports = env =>
{
    console.log('TRY')
    if( env.production )
    {
        return base_environment;
    }
    else if( env.development )
    {
        var development_environment = base_environment;
        development_environment.devtool = 'inline-source-map';
        development_environment.devServer = { contentBase: './dist', hot: true, historyApiFallback: true, publicPath: '/'};
        development_environment.plugins.push(
            new webpack.HotModuleReplacementPlugin()
        );

        return development_environment;
    }
    else
    {
        throw Error( "Please specify environment as either production or development" );
    }
};
