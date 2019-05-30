import { copyFileSync, readJsonSync, writeJsonSync } from 'fs-extra';
import { join } from 'path';
import { exec } from 'child_process';

export { angular } from './angular';

export function copyGitignore (to) {
  if (!to) {
    throw new Error('Target directory is required!');
  }

  copyFileSync(
    join(__dirname, '../../specification/files/.gitignore'),
    join(to, '.gitignore')
  );
}

export function copyEditorconfig (to) {
  if (!to) {
    throw new Error('Target directory is required!');
  }

  copyFileSync(
    join(__dirname, '../../specification/files/.editorconfig'),
    join(to, '.editorconfig')
  );
}

export function copyStylelintrc (to) {
  if (!to) {
    throw new Error('Target directory is required!');
  }

  const modules = [
    'stylelint',
    'stylelint-config-standard',
    'stylelint-declaration-strict-value',
    'stylelint-no-unsupported-browser-features',
    'stylelint-scss',
    'stylelint-z-index-value-constraint'
  ];

  exec(`npm i ${modules.join(' ')}`, {cwd: join(to)}, (error) => {
    if (error) {
      throw new Error(`Angular CLI was fell ${error}`);
    }

    const packageJson = readJsonSync( join(to, 'package.json') );

    packageJson.scripts['lint:scss'] = 'stylelint --syntax scss "./src/**/*.scss"';

    writeJsonSync( join(to, 'package.json'), packageJson, { spaces: 2 } );

    copyFileSync(
      join(__dirname, '../../specification/files/.stylelintrc'),
      join(to, '.stylelintrc')
    );
  }).stdout.pipe(process.stdout);
}
