import { angular } from '../angular';
import * as fs from 'fs-extra';

jest.mock('fs-extra');
jest.mock('../../helpers');

describe('For Angular specifier can', () => {
  const testDir = 'target-tmp';

  test('edit angular.js with additions from specification in Angular project', () => {
    Object.defineProperty(fs, 'writeFileSync', {value: jest.fn()});
    expect(angular.editAngularJson).toThrow();

    Object.defineProperty(fs, 'readFileSync', {value: jest.fn().mockReturnValue("{}")});
    expect(() => angular.editAngularJson(testDir)).not.toThrow();

    angular.editAngularJson(testDir);

    expect(fs.readFileSync).toHaveBeenCalled();
    expect(fs.writeFileSync).toHaveBeenCalled();
  });

  test('copy .htaccess from specification in Angular project', () => {
    expect(angular.copyDotHtaccess).toThrow();
    expect(() => angular.copyDotHtaccess(testDir)).not.toThrow();

    angular.copyDotHtaccess(testDir);
    expect(fs.copyFileSync).toHaveBeenCalled();
  });

  test('copy .tsconfig from specification in Angular project', () => {
    expect(angular.copyTsconfig).toThrow();
    expect(() => angular.copyTsconfig(testDir)).not.toThrow();

    angular.copyTsconfig(testDir);
    expect(fs.copyFileSync).toHaveBeenCalled();
  });
});
