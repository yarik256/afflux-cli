const config = require('../config');

module.exports = (data) => {
  const cliArgs = ['new', data.title, '--style', config.cssPreprocessor];

  return require('@angular/cli').default({cliArgs});
};
