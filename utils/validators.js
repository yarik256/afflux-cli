module.exports.title = (input) => {
  if (/^([A-Za-z\-\_\d])+$/.test(input)) {
    return true;
  } else {
    return 'Project name may only include letters, numbers, underscores and hashes.';
  }
}
