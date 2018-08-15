const fs = require('fs');
const path = require('path');
const validate = require('./validators');
const mustache = require('mustache');

class FileGenerator {
  constructor(template, properties) {
    if (!template || !(typeof template === 'string')) throw new Error('Template string is required!');
    if (!properties || !(typeof properties === 'object')) throw new Error('Properties object is required!');

    this.text = mustache.render(template, validate.readmeProperties(properties));
  }

  getText() {
    return this.text;
  }

  create(fileName, path) {
    if (!fileName) throw new Error('File name is required!');
    if (!path) throw new Error('Path is required!');

    return new Promise((resolve, reject) => {
      fs.writeFile(path.join(path, fileName), this.text, 'utf8', (err) => {
        if (err) reject(err);

        resolve();
      });
    });
  }
}

module.exports = FileGenerator;
