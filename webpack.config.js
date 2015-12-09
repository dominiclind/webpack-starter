module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "dist/bundle.js"
    },
    module: {
        loaders: [
					{
		        test: /\.scss$/,
		        loader:"style-loader!css-loader!autoprefixer-loader?browsers=last 2 versions!sass-loader"
		      },
					{
						test: /\.js?$/,
						exclude: /(node_modules|bower_components)/,
						loader: 'babel?presets[]=es2015'
					},
          {
             test: /\.(jpe?g|png|gif|svg)$/i,
             loaders: [
               'file?hash=sha512&digest=hex&name=dist/images/[hash].[ext]',
               'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
             ]
           }
        ]
    }
};
