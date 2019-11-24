const path = require('path')
const resolve =  (dir) => path.resolve(__dirname, dir)
const baseConfig = {
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        alias: {
            '@script': resolve('../script'),
            '@component': resolve('../component')
        }
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: 'babel-loader'
                },
                exclude: /node_modules/
            },
            {
                test: /(\.tsx|\.ts)$/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true,
                        },
                    }
                ],
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                use: [
                  { loader: 'style-loader' },
                  {
                    loader: 'css-loader',
                    options: {
                      modules: true,
                      localIdentName: '[name]_[local]_[hash:base64:4]'
                    }
                  },
                  { loader: 'less-loader' }
                ]
            },
            {
                test: /(\.css)$/,
                loader: "style-loader!css-loader!postcss-loader"
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|eot|ttf)(\?.*$|$)/,
                use: ["url-loader"]
            }
        ]
    }
}


module.exports = baseConfig