module.exports = {
    entry: "./src/scripts/main.js",
    output:{
        path: __dirname + '/build',
        publicPath: '/build/',
        filename: 'bundle.js'
    },

    module: {
        loaders:[
            {
                test: /\.(svg|jpg|png)$/,
                loader: 'url'
            },
            {
                test: /\.css$/,
                loader: [
                    'style',
                    'css'
                ]
            }
        ]
    }
};
