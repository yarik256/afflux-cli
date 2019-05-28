const fs = require('fs');
const path = require('path');
const angularJsonAdditions = require('../../../specification/files/angular/angular');
const { deepMerge } = require('../../../utils/helpers');

module.exports = {
  editAngularJson(to) {
    if (!to) {
      throw new Error('Target directory is required!');
    }

    const json = fs.readFileSync(`${to}/angular.json`, 'utf-8');

    if (!json) {
      throw new Error('The file does not exist!');
    }

    const configUpdates = {projects: {[to]: angularJsonAdditions}};

    const newValue = JSON.stringify(
      deepMerge({}, JSON.parse(json), configUpdates),
      null,
      2
    );

    fs.writeFileSync(`${to}/angular.json`, newValue, 'utf-8');
  },

  copyTsconfig(to) {
    if (!to) {
      throw new Error('Target directory is required!');
    }

    fs.copyFileSync(
      path.join(__dirname, '../specification/files/angular/tsconfig.json'),
      path.join(to, 'tsconfig.json')
    );
  },

  copyDotHtaccess(to) {
    if (!to) {
      throw new Error('Target directory is required!');
    }

    fs.copyFileSync(
      path.join(__dirname, '../specification/files/angular/.htaccess'),
      path.join(to, 'src/.htaccess')
    );
  }
};
