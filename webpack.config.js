const webpack = require("webpack"), //to access built-in plugins
      path = require("path"),
      UglifyJSPlugin = require("uglifyjs-webpack-plugin");

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
