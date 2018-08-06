const fs = require('fs');
const path = require('path');

module.exports.getCWD = () => process.cwd().split(path.sep).pop();

module.exports.getReadmeTemplate = () => {
  const templateFile = 'README.mst';

  try {
    return fs.readFileSync(path.join('../specification/files/', templateFile), 'utf8');
  } catch (e) {
    throw new Error(`Can\'t find ${templateFile} template`, e);
  }
};
