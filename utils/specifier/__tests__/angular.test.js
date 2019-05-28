const specifierAngular = require('../angular');
const fs = require('fs');

jest.mock('fs');
jest.mock('../../helpers');

describe('For Angular specifier can', () => {
  const testDir = 'target-tmp';

  test('edit angular.js with additions from specification in Angular project', () => {
    fs.writeFileSync = jest.fn();
    expect(specifierAngular.editAngularJson).toThrow();

    fs.readFileSync = jest.fn().mockReturnValue("{}");
    expect(() => specifierAngular.editAngularJson(testDir)).not.toThrow();

    specifierAngular.editAngularJson(testDir);

    expect(fs.readFileSync).toHaveBeenCalled();
    expect(fs.writeFileSync).toHaveBeenCalled();
  });

  test('copy .htaccess from specification in Angular project', () => {
    expect(specifierAngular.copyDotHtaccess).toThrow();
    expect(() => specifierAngular.copyDotHtaccess(testDir)).not.toThrow();

    specifierAngular.copyDotHtaccess(testDir);
    expect(fs.copyFileSync).toHaveBeenCalled();
  });

  test('copy .tsconfig from specification in Angular project', () => {
    expect(specifierAngular.copyTsconfig).toThrow();
    expect(() => specifierAngular.copyTsconfig(testDir)).not.toThrow();

    specifierAngular.copyTsconfig(testDir);
    expect(fs.copyFileSync).toHaveBeenCalled();
  });
});
