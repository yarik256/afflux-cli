const projects = require('../../project-types');

jest.mock('fs');

describe('Generate angular project', () => {
  const cli = require('@angular/cli');
  const specifier = require('../../utils/specifier');
  const projectName = 'angular-project-test';

  test('can run angular cli', () => {
    cli.default = jest.fn();
    specifier.angular.editAngularJson = jest.fn();

    return projects.angular({title: projectName}).then(() => {
      expect(cli.default).toHaveBeenCalled();
    });
  });

  test('should throw an Error without "title" property', () => {
    cli.default = jest.fn();

    expect(projects.angular()).rejects.toThrow();
    expect(cli.default).not.toHaveBeenCalled();
  });

  describe('should call', () => {
    beforeAll(() => {
      specifier.angular.editAngularJson = jest.fn();
      specifier.angular.copyDotHtaccess = jest.fn();
      specifier.angular.copyTsconfig = jest.fn();
      specifier.copyEditorconfig = jest.fn();
      specifier.copyStylelintrc = jest.fn();

      return projects.angular({title: projectName});
    });

    test('editAngularJson with with project title', () => {
      expect(specifier.angular.editAngularJson).toHaveBeenCalledWith(projectName);
    });

    test('copyAngularDotHtaccess with project title', () => {
      expect(specifier.angular.copyDotHtaccess).toHaveBeenCalledWith(projectName);
    });

    test('copyAngularTsconfig with project title', () => {
      expect(specifier.angular.copyTsconfig).toHaveBeenCalledWith(projectName);
    });

    test('copyEditorconfig with project title', () => {
      expect(specifier.copyEditorconfig).toHaveBeenCalledWith(projectName);
    });

    test('copyStylelintrc with project title', () => {
      expect(specifier.copyStylelintrc).toHaveBeenCalledWith(projectName);
    });
  });
});
