import { copyGitignore, copyEditorconfig, copyStylelintrc } from '../specifier';
import * as fs from 'fs-extra';

jest.mock('fs-extra');
jest.mock('../helpers');

describe('Specifier can', () => {
  const testDir = 'target-tmp';

  test('copy .gitignore from specification', () => {
    expect(copyGitignore).toThrow();
    expect(() => copyGitignore(testDir)).not.toThrow();

    copyGitignore(testDir);
    expect(fs.copyFileSync).toHaveBeenCalled();
  });

  test('copy .editorconfig from specification', () => {
    expect(copyEditorconfig).toThrow();
    expect(() => copyEditorconfig(testDir)).not.toThrow();

    copyEditorconfig(testDir);
    expect(fs.copyFileSync).toHaveBeenCalled();
  });

  test('copy .stylelintrc from specification', () => {
    expect(copyStylelintrc).toThrow();
    expect(() => copyStylelintrc(testDir)).not.toThrow();

    copyStylelintrc(testDir);
    expect(fs.copyFileSync).toHaveBeenCalled();
  });
});
