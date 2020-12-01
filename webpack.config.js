const path = require('path')
const HtmlWebPackPlugin= require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports={
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve:{
        extensions: ['.js', '.jsx']
    },
    module:{
        rules:[
            {
                test: /\.(png|gif|jpg)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: { name: 'assets/[hash].[ext]' },
                  }
                ],
            },
            {
                test: /\.(s*)css$/,
                use: [
                  { loader: MiniCssExtractPlugin.loader },
                  'css-loader',
                  'sass-loader',
                ],
              }, 
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use:{
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use:[
                    {
                        loader: "html-loader"
                    }
                ]
            }
        ]
    },
    devServer: {  
        historyApiFallback: true,  
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename: 'assets/[name].css',
          }),
        new HtmlWebPackPlugin({
            template: './public/index.html',
            filename: './index.html'

        }),
    ]
};