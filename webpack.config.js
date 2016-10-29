module.exports = {
    entry: "./src/app/app.ts",
    output: {
        path: __dirname,
        filename: "src/app.js"
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            },
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            }
        ]
    }
};