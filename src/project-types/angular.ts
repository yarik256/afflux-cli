import config from '../config';
import * as cli from '@angular/cli';
import * as specifier from '../utils/specifier';

export const angular = ({title} = {title: ''}) => {
  if (!title) throw new Error('Title is required!');

  const cliArgs = ['new', title, '--style', config.cssPreprocessor];

  cli.default({cliArgs}).then(() => {
    specifier.angular.editAngularJson(title);
    specifier.angular.copyDotHtaccess(title);
    specifier.angular.copyTsconfig(title);
    specifier.angular.copyBaseStructure(title);
    specifier.copyEditorconfig(title);
    specifier.copyStylelintrc(title);
    specifier.copyStylelintrc(title);
  }, (e) => {
    throw new Error(`Angular CLI was fell ${e}`);
  });
};
