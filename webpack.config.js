const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'client', 'src', 'index.jsx'),
    module: {
      rules: [
        { 
          test: [/\.jsx$/],
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react', '@babel/preset-env'],
            }
          }
        },
        {
          test: /\.css$/,
          use: [{ loader: 'style-loader' },
          {
            loader: 'css-loader',
          options: {
            modules: true,
            importLoaders: 1,
            localIdentName: '[sha1:hash:hex:6]',
          },
          }],
        }
      ]
    },
     output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'client', 'dist'),
    }
  };
