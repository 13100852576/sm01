const path=require('path');
const webpack=require('webpack');
const HtmlPlugin=require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const glob = require('glob');
const PurifyCSSPlugin = require('purifycss-webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports={
    mode:'development',
    entry:{
        "xx":'./src/index.js'
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:"[name].js"
    },
    module:{
        rules:[
            {test:/\.css$/,
                // use:['style-loader','css-loader']
                use:ExtractTextPlugin.extract({
                    fallback:"style-loader",
                    use:[{
                        loader:"css-loader",
                        options:{
                            importLoaders:1
                        }
                    },'postcss-loader']
                })
            },{
                test:/\.(jpg|png|gif)$/,
                use:[{loader:'url-loader',options:{limit:500,ouputPath:'img/'}}]
            },{
                test:/\.html$/i,
                loader:'html-withimg-loader'
            },{
                test:/\.js$/,
                use:[ 
                {
                loader:"babel-loader",
                options:{
                presets:["@babel/preset-env"]
                }
                }
                ],
                exclude:/node_modules/
                },
            {
                test:/\.scss$/,
                // use:['style-loader','css-loader','sass-loader']
                use:ExtractTextPlugin.extract({
                    fallback:"style-loader",
                    use:["css-loader","sass-loader"]
                })
            }
        ]
    },



    plugins:[ new webpack.HotModuleReplacementPlugin() ,
    new HtmlPlugin({
        // minify:{
        //             removeAttributeQuotes:true
        // },
        hash:true,
        template:"./src/aaa.html",
        filename:"aaa.html",
        

    }),
    new ExtractTextPlugin("./index.css"),
    new PurifyCSSPlugin({
        // Give paths to parse for rules. These should be absolute!
            paths: glob.sync(path.join(__dirname, 'src/*.html')),
        }),
        new webpack.BannerPlugin('唯创'),
        new CopyWebpackPlugin([{
            from:__dirname+"/src/public",
            to:'./public'
        }]),
        new webpack.ProvidePlugin({
            $:'jquery'
        }),
    ],
    devServer:{
        contentBase:path.resolve(__dirname,'dist'),
        host:'localhost',
        compress:true,
        port:8081,
        hot:true,
        open:true
    }
}