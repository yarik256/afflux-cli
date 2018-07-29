const path = require('path');

module.exports.getCWD = () => process.cwd().split(path.sep).pop();
