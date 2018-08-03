const fs = require('fs');
const path = require('path');
const readme = require('../readme-generator');
const projects = require('../../project-types');

describe('README.md file', () => {
  test('should be created', async () => {
    await new readme({
      title: 'Test project title',
      description: 'Short project description',
      type: projects.types.ANGULAR,
      browserSupport: {},
      team: [{
        name: 'Vlad Yaremenko',
        position: 'master'
      }],
      links: {
        demo: '',
        live: '',
        documentation: '',
        taskList: '',
        issueTracker: '',
        specification: ''
      }
    }).create();

    fs.writeFile = jest.fn();

    expect(fs.writeFile).toHeveBeenCalledWith('README.md');
  });

  test('should comply with the specification', () => {
    const mockReadme = fs.readFileSync(path.join(__dirname, 'README.mock.md'), 'utf8').trim();

    expect(new readme({
      title: 'Test project title',
      description: 'Short project description',
      type: projects.types.ANGULAR,
      browserSupport: {},
      team: [{
        name: 'Vlad Yaremenko',
        position: 'master'
      }, {
        name: 'John Doe',
        position: 'developer'
      }],
      links: {
        demo: 'https://demo.page.com',
        live: 'https://page.com',
        documentation: '',
        taskList: '',
        issueTracker: '',
        specification: ''
      }
    }).getText()).toBe(mockReadme);
  });
});
