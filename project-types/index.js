module.exports.types = {
  PLAIN: 'plain-js',
  ANGULAR: 'angular',
  REACT: 'react',
  VUE: 'vue'
};

module.exports.plain = require('./plain');
module.exports.angular = require('./angular');
module.exports.react = require('./react');
module.exports.vue = require('./vue');
