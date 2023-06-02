const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const fs = require('fs');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const webpack = require('webpack');

function getAllHbsRootFiles() {
  const files = fs.readdirSync('./src/views/').filter((file) => file.match(/.hbs$/));

  return files.map((file) => {
    return new HtmlWebpackPlugin({
      template: `./src/views/${file}`,
      filename: `./${file.replace('.hbs', '.html')}`,
      // templateParameters: require('./src/data/index.json'),
      minify: false,
      inject: false,
    });
  });
}

module.exports = {
  entry: {
    /** точка входа **/
    app: './src/index.ts',
    grapes: './src/grapes/index.ts',
  },
  output: {
    /** вывод **/
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      /** обработка scss и css файлов **/
      {
        test: /\.s?css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          {
            loader: 'css-loader',
            options: {
              url: false,
            },
          },
          // Compiles Sass to CSS
          { loader: 'sass-loader' },
          {
            loader: 'sass-resources-loader',
            options: {
              resources: './src/scss/core/wanted.scss',
            },
          },
        ],
      },
      /** babel **/
      {
        test: /\.(tsx?|js)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              'babel-preset-typescript-vue3',
              '@babel/preset-typescript',
            ],
            plugins: [
              '@vue/babel-plugin-jsx',
              '@babel/plugin-proposal-object-rest-spread',
            ],
          },
        },
      },
      /** handlebars loader **/
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader',
        options: {
          partialDirs: [path.join(__dirname, 'src/views/partials')],
        },
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          esModule: true,
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.vue'],
    alias: {
      '@': path.resolve(__dirname, './src/'),
      '@components': path.resolve(__dirname, './src/app/components/'),
      '@use': path.resolve(__dirname, './src/use/'),
      '@ui': path.resolve(__dirname, './src/app/components/Ui/'),
      vue: 'vue/dist/vue.esm-bundler.js',
    },
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new ESLintPlugin({
      extensions: ['ts'],
    }),
    /** выносим все стили с js в css файл **/
    new MiniCssExtractPlugin(),
    /** собераем html files **/
    ...getAllHbsRootFiles(),
    new CopyPlugin({
      patterns: [{ from: 'src/images', to: 'images' }],
    }),
    new VueLoaderPlugin(),
    new webpack.DefinePlugin(({ __VUE_OPTIONS_API__: true, __VUE_PROD_DEVTOOLS__: false }))
  ],
};
