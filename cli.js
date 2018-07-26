#!/usr/bin/env node

const path = require('path');
const execa = require('execa');
const Listr = require('listr');
const inquirer = require('inquirer');
// const program = require('commander');
//
// program
//   .version('0.0.1');

const QUESTIONS = [{
  name: 'title',
  type: 'input',
  message: 'Project name:',
  default: __dirname.split(path.sep).pop(),
  validate(input) {
    if (/^([A-Za-z\-\_\d])+$/.test(input)) {
      return true;
    } else {
      return 'Project name may only include letters, numbers, underscores and hashes.';
    }
  }
}, {
  name: 'description',
  type: 'input',
  message: 'Project description:',
  default: ''
}, {
  name: 'type',
  type: 'list',
  message: 'Project type:',
  choices: [
    {name: 'Plain JS', value: 'plain-js'},
    {name: 'Angular', value: 'angular'},
    {name: 'React', value: 'react'},
    {name: 'Vue', value: 'vue'},
    {name: 'Three.js', value: 'three'},
    {name: 'Chrome-extension', value: 'chrome_extension'},
    {name: 'Mapbox', value: 'Mapbox'}
  ]
}];

inquirer.prompt(QUESTIONS).then((answers) => {
  console.log(answers);

  new Listr([
    {
      title: `Init ${answers.title} project`,
      task: () => {
        switch (answers.type) {
          case 'angular': {
            return require('@angular/cli').default({
              cliArgs: ['new', answers.title, '--style', 'scss']
            });
          }
          default: {
            throw new TypeError('Invalid project type!');
          }
        }
      }
    }
  ]).run();
});
