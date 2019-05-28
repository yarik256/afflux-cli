const specifier = require('../specifier');
const fs = require('fs');

jest.mock('fs');
jest.mock('../helpers');

describe('Specifier can', () => {
  const testDir = 'target-tmp';

  test('copy .gitignore from specification', () => {
    expect(specifier.copyGitignore).toThrow();
    expect(() => specifier.copyGitignore(testDir)).not.toThrow();

    specifier.copyGitignore(testDir);
    expect(fs.copyFileSync).toHaveBeenCalled();
  });

  test('copy .editorconfig from specification', () => {
    expect(specifier.copyEditorconfig).toThrow();
    expect(() => specifier.copyEditorconfig(testDir)).not.toThrow();

    specifier.copyEditorconfig(testDir);
    expect(fs.copyFileSync).toHaveBeenCalled();
  });

  test('copy .stylelintrc from specification', () => {
    expect(specifier.copyStylelintrc).toThrow();
    expect(() => specifier.copyStylelintrc(testDir)).not.toThrow();

    specifier.copyStylelintrc(testDir);
    expect(fs.copyFileSync).toHaveBeenCalled();
  });
});
