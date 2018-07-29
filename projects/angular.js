module.exports = function (data) {
  return require('@angular/cli').default({
    cliArgs: ['new', data.title, '--style', 'scss']
  });
};
