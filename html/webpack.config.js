const webpack = require('webpack'), //to access built-in plugins
      path = require('path');

module.exports = {
    entry: "./src/scripts/main.js",
    output:{
        path: path.resolve(__dirname , 'dist'),
        publicPath: '/dist/',
        filename: 'bundle.js'
    },

    module: {
        rules:[
            {
                test: /\.(svg|jpg|png)$/,
                use: 'url-loader'
            },
            {
                test: /\.css$/,
                use: [
                    {loader: 'style-loader'},
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }
                ]
            }
        ]
    },

    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            Popper: ['popper.js', 'default'],
            // In case you imported plugins individually, you must also require them here:
            Util: "exports-loader?Util!bootstrap/js/dist/util",
            Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown",
        })
    ]
};
