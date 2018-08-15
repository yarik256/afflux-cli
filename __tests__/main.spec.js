const main = require('../main');
const projects = require('../project-types');
const inquirer = require('inquirer');

jest.mock('inquirer');

describe('User answers', () => {
  test('can call inquirer', () => {
    inquirer.prompt = jest.fn(async () => {return;});
    main();
    expect(inquirer.prompt).toHaveBeenCalled();
  });

  describe('can select correct project type', () => {
    beforeAll(() => {
      projects.plain = jest.fn();
      projects.angular = jest.fn();
      projects.react = jest.fn();
      projects.vue = jest.fn();
    });

    test('Plain JS', async () => {
      inquirer.prompt = jest.fn(async () => ({
        type: projects.types.PLAIN
      }));

      await main();

      expect(projects.plain).toHaveBeenCalled();
    });

    test('Angular', async () => {
      inquirer.prompt = jest.fn(async () => ({
        type: projects.types.ANGULAR
      }));

      await main();

      expect(projects.angular).toHaveBeenCalled();
    });

    test('React', async () => {
      inquirer.prompt = jest.fn(async () => ({
        type: projects.types.REACT
      }));

      await main();

      expect(projects.react).toHaveBeenCalled();
    });

    test('Vue', async () => {
      inquirer.prompt = jest.fn(async () => ({
        type: projects.types.VUE
      }));

      await main();

      expect(projects.vue).toHaveBeenCalled();
    });

    test('should throw TypeError with invalid project type', async () => {
      inquirer.prompt = jest.fn(async () => ({
        type: null
      }));

      await main();

      expect(inquirer.prompt).toHaveBeenCalled();
      expect(main()).resolves.toThrow(TypeError);
    });
  });
});
