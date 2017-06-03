var balm = require('balm');
var webpack = require('webpack');
var helpers = require('./config/helpers');
var config = require('./config/balmrc');

balm.config = {
  server: {
    open: true,
    proxyTable: config.proxyTable
  },
  roots: {
    source: 'app'
  },
  paths: {
    source: {
      css: 'styles',
      js: 'scripts',
      img: 'images'
    }
  },
  styles: {
    ext: 'css', // PostCSS
    autoprefixer: ['last 2 versions']
  },
  scripts: {
    entry: config.entry,
    loaders: [{
      test: /\.ts$/,
      use: [
        'ts-loader',
        'angular2-template-loader'
      ]
    }],
    extensions: ['.ts'],
    plugins: [
      // Workaround for angular/angular#11580
      new webpack.ContextReplacementPlugin(
        /@angular\b.*\b(bundles|linker)/,
        helpers.root('./app')
      )
    ]
  },
  cache: true,
  assets: config.assets
  // More Config
  // https://github.com/balmjs/balm/blob/master/docs/configuration.md
};

balm.go(function(mix) {
  if (balm.config.production) {
    // for static
    mix.publish();
    // for template
    Object.keys(config.publish).forEach(function(key) {
      mix.publish(key, config.publish[key].target, config.publish[key].option || {});
    });
  }
});
