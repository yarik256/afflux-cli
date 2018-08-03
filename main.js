const inquirer = require('inquirer');
const projects = require('./project-types');
const questions = require('./utils/questions');

module.exports = () => (
  inquirer.prompt(questions).then((answers) => {
    switch (answers.type) {
      case projects.types.ANGULAR: {
        return projects.angular(answers);
      }
      default: {
        return TypeError('Invalid project type!');
      }
    }
  })
);
