module.exports = {
    entry: `./src/index.ts`,

    output: {
        path: `${__dirname}/dist`,
        filename: "bundle.js"
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {loader: 'ts-loader'}
                ]
            },
            {
                test: /\.s?css$/,
                use: [
                    "style-loader",
                    {
                        loader: 'css-loader',
                        options: {
                            url: false
                        }
                    }
                ]
            }
        ]
    },

    resolve:{
        extensions: [".ts", ".js"]
    },
    mode: "production",
    devServer: {
        static: "dist",
        open: true
    }
};