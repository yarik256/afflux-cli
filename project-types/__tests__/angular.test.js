const projects = require('../../project-types');

jest.mock('fs');

describe('Generate angular project', () => {
  const cli = require('@angular/cli');
  const projectName = 'angular-project-test';

  test('can run angular cli', () => {
    cli.default = jest.fn();

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
    const specifier = require('../../utils/specifier');

    beforeAll(() => {
      specifier.copyGitignore = jest.fn();
      specifier.copyEditorconfig = jest.fn();
      specifier.copyStylelintrc = jest.fn();

      return projects.angular({title: projectName});
    });

    test('copyGitignore with project title', () => {
      expect(specifier.copyGitignore).toHaveBeenCalledWith(projectName);
    });

    test('copyEditorconfig with project title', () => {
      expect(specifier.copyEditorconfig).toHaveBeenCalledWith(projectName);
    });

    test('copyStylelintrc with project title', () => {
      expect(specifier.copyStylelintrc).toHaveBeenCalledWith(projectName);
    });
  });
});
