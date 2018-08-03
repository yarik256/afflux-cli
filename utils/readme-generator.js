const fs = require('fs');
const path = require('path');
const validate = require('./validators');

class readmeGenerator {
  constructor(properties) {
    this.properties = validate.readmeProperties(properties);

    this.text = generateByTemplate(getTemplate(), properties);
  }

  async create() {
    // TODO: Create file
  }

  getText() {
    return this.text;
  }
}

function generateByTemplate(template, values) {
  // TODO: Gererate text

  return template;
}

function getTemplate() {
  try {
    return fs.readFileSync(path.join(__dirname, '../specification/files/README.md'), 'utf8');
  } catch (e) {
    throw new Error('Can\'t find README.md template');
  }
}

module.exports = readmeGenerator;
