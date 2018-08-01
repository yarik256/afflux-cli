const config = require('../config');
const cli = require('@angular/cli');
const specifier = require('../utils/specifier');

module.exports = async (data) => {
  const cliArgs = ['new', data.title, '--style', config.cssPreprocessor];

  await cli.default({cliArgs});

  specifier.copyGitignore(data.title);
  specifier.copyEditorconfig(data.title);
  specifier.copyStylelintrc(data.title);

  return;
};
