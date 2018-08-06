const specifier = require('../specifier');
const fs = require('fs');
const FileGenerator = require('../file-generator');

jest.mock('fs');

describe('Specifier should', () => {
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

  test('create README.md file', () => {
    const values = {name: 'value'};
    specifier.createReadme(testDir, values);

    expect(fs.writeFile).toHaveBeenCalledWith('file path');
  });
});
