import { copyFileSync } from 'fs-extra';
import { join } from 'path';

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

  copyFileSync(
    join(__dirname, '../../specification/files/.stylelintrc'),
    join(to, '.stylelintrc')
  );
}
