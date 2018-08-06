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

  async create(fileName) {
    if (!fileName) throw new Error('File name is required!');

    // TODO: Create file
  }
}

module.exports = FileGenerator;
