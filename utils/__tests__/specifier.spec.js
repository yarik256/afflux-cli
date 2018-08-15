const specifier = require('../specifier');
const fs = require('fs');
const path = require('path');
const FileGenerator = require('../file-generator');
const helpers = require('../helpers');

jest.mock('fs');
jest.mock('../file-generator');

describe('Specifier should copy', () => {
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
    const mockFile = 'test.fl';
    helpers.getReadmeTemplate = jest.fn(() => mockFile);

    const values = {name: 'value'};
    specifier.createReadme(values, testDir);

    expect(FileGenerator).toHaveBeenCalledWith(mockFile, values);

    const instance = FileGenerator.mock.instances[0];
    expect(instance.create).toHaveBeenCalledWith('README.md', testDir);
  });
});
