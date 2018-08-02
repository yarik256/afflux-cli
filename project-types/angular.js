const config = require('../config');
const cli = require('@angular/cli');
const specifier = require('../utils/specifier');

module.exports = async ({title}) => {
  if (!title) throw new Error('Title is required!');

  const cliArgs = ['new', title, '--style', config.cssPreprocessor];

  try {
    await cli.default({cliArgs});
  } catch (e) {
    throw new Error('Angular CLI was fell', e);
  }

  specifier.copyGitignore(title);
  specifier.copyEditorconfig(title);
  specifier.copyStylelintrc(title);

  return;
};
