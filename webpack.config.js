var webpack = require('webpack');

module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "dist/bundle.js"
    },
    plugins : [
      new webpack.ProvidePlugin({
        riot : 'riot'
      }),
    ],
    module: {
      preLoaders: [
    			{
            test: /\.tag$/, exclude: /node_modules/, loader: 'riotjs-loader', query: { type: 'none' }
          }
    		],
        loaders: [
					{
		        test: /\.scss$/,
		        loader:"style-loader!css-loader!autoprefixer-loader?browsers=last 2 versions!sass-loader"
		      },
					{
						test: /\.js|\.tag$/,
						exclude: /(node_modules|bower_components)/,
						loader: 'babel?presets[]=es2015'
					},
          {
             test: /\.(jpe?g|png|gif|svg)$/i,
             loaders: [
               'file?hash=sha512&digest=hex&name=dist/images/[hash].[ext]',
               'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
             ]
           },
           {
             test: /\.(ttf|eot|woff|woff2|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
             loader: "file-loader?name=/fonts/[hash].[ext]"
           }
        ]
    }
};
