const Listr = require('listr');
const projects = require('./project-types');

require('inquirer').prompt(require('./utils/questions')).then((answers) => {
  new Listr([
    {
      title: `Init ${answers.title} project`,
      task: () => {
        switch (answers.type) {
          case projects.types.ANGULAR: {
            return projects.angular(answers);
          }
          default: {
            throw TypeError('Invalid project type!');
          }
        }
      }
    }
  ]).run();
});
