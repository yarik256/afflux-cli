module.exports.title = (input) => {
  if (input && /^([A-Za-z\-\_\d])+$/.test(input)) {
    return true;
  } else {
    return 'Project name may only include letters, numbers, underscores and hashes.';
  }
};

module.exports.readmeProperties = (properties) => {
  if (!properties.title) throw new TypeError('Title is required!');
  if (!properties.description) throw new TypeError('Descriptiob is required!');
  if (!properties.type) throw new TypeError('Project type is required!');
  if (!properties.team) throw new TypeError('Team is required!');
};
