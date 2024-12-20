// webpack.config.js
module.exports = {
    devtool: false, // Source map'leri devre dışı bırak
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
  };
  