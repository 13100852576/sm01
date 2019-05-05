


const Webpack = require("webpack");
const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");
const glob = require("glob");
const PurifyCssPlugin = require("purifycss-webpack");
// 用于html文件打包
const ETP = require("extract-text-webpack-plugin");
// 打包css文件 与js分离用
const CopyWebpackPlugin = require("copy-webpack-plugin");




module.exports = {
    // mode:"development",
    mode: "development",
    // 开发环境与生产环境 webpack4.0以上写生产环境或者不写mode则dist中产的的就是压缩js文件
    entry: {
        // 入口文件的配置
        "entry": "./src/index.js"
        // 相对路径
    },
    output: {
        // 出口文件的配置
        path: path.resolve(__dirname, "dist"),
        filename: "output.js"
        // 绝对路径

    },
    plugins: [
        new Webpack.HotModuleReplacementPlugin(),
        // 热更新的插件
        new HtmlPlugin(
            {
                hash: true,
                template: "./src/1.html"
            }
        ),
        // 打包html文件使用的插件
        new ETP("./index.css"),
        // 分离打包css文件使用的插件
        new PurifyCssPlugin({
            // 要使用绝对路径
            paths: glob.sync(path.join(__dirname, "src/*.html")),
        }),
        // 清除未使用的css插件
        new CopyWebpackPlugin([{
            from: __dirname + "/src/public/",
            to: "./public"
        }]),
        // 资源的直接拷贝


    ],

    module: {
        rules: [
            {
                test: /\.css$/,
                // use: [ "style-loader","css-loader"]
                // js与css文件合并
                use: ETP.extract({
                    fallback: "style-loader",



                    // use: "css-loader",
                    // 不自动加css3前缀
                    use: [{
                        loader: "css-loader",
                        options: { importLoaders: 1 }
                    }, "postcss-loader"]
                    // 自动加css3前缀



                })
                // 分离打包css文件
            }
            // 用于css文件的打包
            // css-loader只是将css引入到页面，而style-loader则是处理css文件

            , {
                test: /\.(png|jpeg)$/,
                use: [{
                    loader: "url-loader",
                    options: {
                        limit: 1,
                        outputPath: "images/"
                    }
                }]
            },
            // css中图片打包
            {
                loader: "image-webpack-loader",
                options: {
                    bypassOnDebug: true,
                }

            },
            // 图片的压缩
            {
                test: /\.html$/,
                loader: "html-withimg-loader"

            },
            // html中图片打包
            {
                test: /\.scss$/,
                // loader: ["style-loader", "css-loader", "sass-loader"],
                // 合并打包scss
                use: ETP.extract({
                    use: ["css-loader", "sass-loader"],
                    fallback: "style-loader"
                })
                // 与js分离打包scss在dist中生成的是css文件(若dist中有其他css文件则合并)

                // loader是从后往前执行的所以
                // 1.先执行sass-loader把scss转成css
                // 2.再执行css-loader把css文件引入到页面中
                // 3。再执行style-loader处理css文件

            },
            {
                test: "/\.js$/",
                use: [{
                    loader: "babel-loader",
                    options: {
                        presets: ["env"]
                    }
                }],
                exclude: /node_modules/
                // 过滤nodemodules
            }
            // babel （将es6转换成为es5）
        ]
    },

    devServer: {
        // 开始服务
        contentBase: path.resolve(__dirname, "dist"),
        // 路径
        host: "localhost",
        // 域名
        compress: false,
        // 是否压缩
        port: "8091",
        // 端口号
        hot: true,
        // 开启热更新
        open: true

    }


}