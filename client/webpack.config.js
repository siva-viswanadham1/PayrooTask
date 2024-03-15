const path=require('path');
const HTMLWebpackPlugin=require('html-webpack-plugin');;
module.exports={
    mode: 'development',
    entry:'./src/index.js',

    output:{
        path:path.resolve(__dirname,'/dist'),
        filename:'bundle.js',
        publicPath: '/'
    },
    plugins: [
        new HTMLWebpackPlugin({
            template:'./src/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /.js$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env','@babel/preset-react']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    devServer: {

        proxy: [{
            context: ['/api'],
            target: 'http://localhost:9000',
        }]
        
    },
}