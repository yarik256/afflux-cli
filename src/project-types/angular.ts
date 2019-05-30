import config from '../config';
import { exec } from 'child_process';
import * as specifier from '../utils/specifier';

export const angular = ({title} = {title: ''}) => {
  if (!title) {
    throw new Error('Title is required!')
  }

  const cliArgs = ['new', title, '--style', config.cssPreprocessor];

  exec(`npx @angular/cli ${cliArgs.join(' ')}`,(error) => {
    if (error) {
      throw new Error(`Angular CLI was fell ${error}`);
    }

    specifier.angular.editAngularJson(title);
    specifier.angular.copyDotHtaccess(title);
    specifier.angular.copyTsconfig(title);
    specifier.angular.copyBaseStructure(title);
    specifier.copyEditorconfig(title);
    specifier.copyStylelintrc(title);
  }).stdout.pipe(process.stdout);
};
