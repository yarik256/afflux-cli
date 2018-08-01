const fs = require('fs');
const path = require('path');

// Copy .gitignore
module.exports.copyGitignore = function (to) {
  fs.copyFileSync(
    path.join(__dirname, '../specification/files/.gitignore'),
    path.join(to, '.gitignore')
  );
}

// Copy .editorconfig
module.exports.copyEditorconfig = function (to) {
  fs.copyFileSync(
    path.join(__dirname, '../specification/files/.editorconfig'),
    path.join(to, '.editorconfig')
  );
}

// Copy .stylelintrc
module.exports.copyStylelintrc = function (to) {
  fs.copyFileSync(
    path.join(__dirname, '../specification/files/.stylelintrc'),
    path.join(to, '.stylelintrc')
  );
}
