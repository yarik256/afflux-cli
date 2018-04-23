#!/usr/bin/env node

const inquirer = require('inquirer');
const program = require('commander');

program
  .version('0.0.1');

const QUESTIONS = [{
  name: 'project-name',
  type: 'input',
  message: 'Project name:',
  validate(input) {
    if (/^([A-Za-z\-\_\d])+$/.test(input)) {
      return true;
    } else {
      return 'Project name may only include letters, numbers, underscores and hashes.';
    }
  }
}];

inquirer.prompt(QUESTIONS).then((answers) => {
  console.log(answers);
});
