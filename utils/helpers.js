const path = require('path');

module.exports = { isObject, deepMerge, getCWD };

function getCWD() {
  return process.cwd().split(path.sep).pop()
}

function isObject(item) {
  return !!(item && typeof item === 'object' && !Array.isArray(item));
}

function deepMerge(target, ...sources) {
  if (!sources.length) {
    return target;
  }

  const source = sources.shift();

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) {
          Object.assign(target, { [key]: {} });
        }

        deepMerge(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }

  return deepMerge(target, ...sources);
}

