const balm = require('balm');
const config = require('./config/balmrc');
const templates = require('./config/publish');

balm.config = config;

balm.go(mix => {
  if (balm.config.isProd) {
    // Publish assets
    mix.publish();
    // Publish templates
    mix.publish(templates);
  }
});
