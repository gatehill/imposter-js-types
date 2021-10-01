const path = require('path');

module.exports = {
    entry: './src/index.js',
    target: "es5",
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    externals: {
        '@imposter-js/types': '__imposter_types',
    },
    optimization: {
        minimize: true,
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        chunkFormat: 'module',
    },
};
