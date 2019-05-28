const fs = require('fs');
const path = require('path');
const angular = require('./angular');

module.exports.angular = angular;

module.exports.copyGitignore = function (to) {
  if (!to) {
    throw new Error('Target directory is required!');
  }

  fs.copyFileSync(
    path.join(__dirname, '../specification/files/.gitignore'),
    path.join(to, '.gitignore')
  );
};

module.exports.copyEditorconfig = function (to) {
  if (!to) {
    throw new Error('Target directory is required!');
  }

  fs.copyFileSync(
    path.join(__dirname, '../specification/files/.editorconfig'),
    path.join(to, '.editorconfig')
  );
};

module.exports.copyStylelintrc = function (to) {
  if (!to) {
    throw new Error('Target directory is required!');
  }

  fs.copyFileSync(
    path.join(__dirname, '../specification/files/.stylelintrc'),
    path.join(to, '.stylelintrc')
  );
};
