const webpack = require("webpack"), //to access built-in plugins
      path = require("path"),
      UglifyJSPlugin = require("uglifyjs-webpack-plugin"),
      vueLoaderConfig = require('./build/vue-loader.conf');

module.exports = {
    entry: "./html/src/scripts/main.js",
    output:{
        path: path.resolve(__dirname , "html/dist"),
        publicPath: "/dist/",
        filename: "bundle.js"
    },
    
    devtool: "source-map",
    module: {
        rules:[
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        babelrc: true
                    }
                }
            },

            {
                test: /\.(svg|jpg|png)$/,
                use: "url-loader"
            },

            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    {
                        loader: "css-loader",
                        options: {
                            modules: true
                        }
                    }
                ]
            }
            {
                test: /\.(js|vue)$/,
                loader: 'eslint-loader',
                enforce: 'pre',
                include: [resolve('src'), resolve('test')],
                options: {
                    formatter: require('eslint-friendly-formatter')
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: vueLoaderConfig
            },
            {
            test: /\.js$/,
            loader: 'babel-loader',
            include: [resolve('src'), resolve('test')]
            },
            {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'url-loader',
            options: {
            limit: 10000,
            name: utils.assetsPath('img/[name].[hash:7].[ext]')
            }
            },
            {
            test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
            loader: 'url-loader',
            options: {
            limit: 10000,
            name: utils.assetsPath('media/[name].[hash:7].[ext]')
            }
            },
            {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            loader: 'url-loader',
            options: {
            limit: 10000,
            name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
            }
            }
        ]
    },

    plugins: [
        new webpack.BannerPlugin({
            banner: "/* Author: Steve Cirelli */",
            raw: true,
            entryOnly: true
        }),

        new webpack.LoaderOptionsPlugin({
            debug: true,
            minimize: true
        }),

        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            Popper: ["popper.js", "default"],
            // In case you imported plugins individually, you must also require them here:
            Util: "exports-loader?Util!bootstrap/js/dist/util",
            Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown",
        })

        //,new UglifyJSPlugin({
        //     sourceMap: true
        // })
    ]
};
