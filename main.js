const execa = require('execa');
const Listr = require('listr');
const inquirer = require('inquirer');

inquirer.prompt(require('./questions')).then((answers) => {
  console.log(answers);

  new Listr([
    {
      title: `Init ${answers.title} project`,
      task: () => {
        switch (answers.type) {
          case 'angular': {
            return require('./projects/angular')(answers);
          }
          default: {
            throw new TypeError('Invalid project type!');
          }
        }
      }
    }
  ]).run();
});
