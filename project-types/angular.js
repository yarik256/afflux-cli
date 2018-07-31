const config = require('../config');
const cli = require('@angular/cli');

module.exports = (data) => {
  const cliArgs = ['new', data.title, '--style', config.cssPreprocessor];

  return cli.default({cliArgs});
};
