module: {
     loaders: [
       {
         test: /\.js$/,
         exclude: /node_modules/,
         loader: 'babel-loader?presets[]=es2015'
       }
     ]
   }
