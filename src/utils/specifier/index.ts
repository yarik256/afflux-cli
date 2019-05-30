import { copyFileSync, readJsonSync, writeJsonSync } from 'fs-extra';
import { join } from 'path';
import { execSync } from 'child_process';

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

  execSync(`npm i ${modules.join(' ')}`, {cwd: join(to)});

  const packageJson = readJsonSync( join(to, 'package.json') );

  packageJson.scripts['lint:scss'] = 'stylelint --syntax scss "./src/**/*.scss"';

  writeJsonSync( join(to, 'package.json'), packageJson, { spaces: 2 } );

  copyFileSync(
    join(__dirname, '../../specification/files/.stylelintrc'),
    join(to, '.stylelintrc')
  );
}
