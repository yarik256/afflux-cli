import { writeFileSync, readFileSync, copyFileSync, copySync } from 'fs-extra';
import { join } from 'path';
import { deepMerge } from '../../helpers';
import * as angularJsonAdditions from '../../../specification/files/angular/angular.json';

export const angular = {
  copyBaseStructure(to): void {
    if (!to) {
      throw new Error('Target directory is required!');
    }

    copySync(
      join(__dirname, '../../../codebase/angular'),
      join(to, 'src')
    )
  },

  editAngularJson(to: string): void {
    if (!to) {
      throw new Error('Target directory is required!');
    }

    const json = readFileSync(`${to}/angular.json`, 'utf-8');

    if (!json) {
      throw new Error('The file does not exist!');
    }

    const configUpdates = {projects: {[to]: angularJsonAdditions}};

    const newValue = JSON.stringify(
      deepMerge({}, JSON.parse(json), configUpdates),
      null,
      2
    );

    writeFileSync(`${to}/angular.json`, newValue, 'utf-8');
  },

  copyTsconfig(to: string): void {
    if (!to) {
      throw new Error('Target directory is required!');
    }

    copyFileSync(
      join(__dirname, '../../../specification/files/angular/tsconfig.json'),
      join(to, 'tsconfig.json')
    );
  },

  copyDotHtaccess(to: string): void {
    if (!to) {
      throw new Error('Target directory is required!');
    }

    copyFileSync(
      join(__dirname, '../../../specification/files/angular/.htaccess'),
      join(to, 'src/.htaccess')
    );
  }
};
