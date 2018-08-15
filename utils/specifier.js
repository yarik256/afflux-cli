const fs = require('fs');
const path = require('path');
const FileGenerator = require('./file-generator');
const helpers = require('./helpers');

module.exports.copyGitignore = function (to) {
  if (!to) throw new Error('Target directory is required!');

  fs.copyFileSync(
    path.join(__dirname, '../specification/files/.gitignore'),
    path.join(to, '.gitignore')
  );
};

module.exports.copyEditorconfig = function (to) {
  if (!to) throw new Error('Target directory is required!');

  fs.copyFileSync(
    path.join(__dirname, '../specification/files/.editorconfig'),
    path.join(to, '.editorconfig')
  );
};

module.exports.copyStylelintrc = function (to) {
  if (!to) throw new Error('Target directory is required!');

  fs.copyFileSync(
    path.join(__dirname, '../specification/files/.stylelintrc'),
    path.join(to, '.stylelintrc')
  );
};

module.exports.createReadme = function (values, to) {
  const file = new FileGenerator(helpers.getReadmeTemplate(), values);
  file.create('README.md', to);
};
