module.exports = {
    resolve: {
      extensions: [".ts", ".js"],
    },
    module: {
      rules: [
        {
          test: /\.s(c|a)ss$/,
          use: [
            'vue-style-loader',
            'css-loader',
            {
              loader: 'sass-loader',
              // Requires sass-loader@^7.0.0
              // options: {
              //   implementation: require('sass'),
              //   indentedSyntax: true // optional
              // },
              // Requires sass-loader@^8.0.0
              options: {
                implementation: require('sass'),
                sassOptions: {
                  indentedSyntax: true // optional
                },
              },
            },
          ],
        },
        {
          test: /\.worker\.ts$/,
          loader: "worker-loader",
        },
        {
          test: /\.ts$/,
          loader: "ts-loader",
        },
      ],
    }
  }