const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'inline-source-map',
    entry: {
        main: './index.js'
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader?cacheDirectory',
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: { minimize: true }
                    }
                ]
            },
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            inject: true,
            hash: false,
            template: './index.html',
            filename: 'index.html'
        }),
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        historyApiFallback: true,
        port: 3000,
        disableHostCheck: true,
        stats: {
            assets: false,
            builtAt: false,
            cached: false,
            cachedAssets: false,
            children: false,
            chunks: false,
            chunkGroups: false,
            chunkModules: false,
            chunkOrigins: false,
            colors: true,
            errorDetails: false,
            modules: false,
            moduleTrace: false,
            publicPath: false,
            reasons: false,
            timings: false,
            warnings: false
        }
    }
};