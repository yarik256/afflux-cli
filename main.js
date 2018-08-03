const inquirer = require('inquirer');
const projects = require('./project-types');
const questions = require('./utils/questions');

module.exports = () => (
  inquirer.prompt(questions).then((answers) => {
    switch (answers.type) {
      case projects.types.PLAIN: {
        return projects.plain(answers);
      }
      case projects.types.ANGULAR: {
        return projects.angular(answers);
      }
      case projects.types.REACT: {
        return projects.react(answers);
      }
      case projects.types.VUE: {
        return projects.vue(answers);
      }
      default: {
        return TypeError('Invalid project type!');
      }
    }
  })
);
