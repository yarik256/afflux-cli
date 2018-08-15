const fs = require('fs');
const path = require('path');
const FileGenerator = require('../file-generator');
const projects = require('../../project-types');

describe('File generator', () => {
  test('should generate text by template', () => {
    expect(new FileGenerator('{{title}}', {title: 'Project name'}).getText()).toBe('Project name');
  });

  test('should create file', async () => {
    fs.writeFile = jest.fn();

    const fileName = 'tmp.txt';

    new FileGenerator('{{title}}', { title: 'Test project title' })
      .create(fileName);

    expect(fs.writeFile).toHeveBeenCalledWith(fileName);
  });

  test('constructor should throw an Error without one of the property', () => {
    const templateErrorMessage = 'Template string is required!';
    const propertiesErrorMessage = 'Properties is required!';

    expect(new FileGenerator('{{title}}')).toThrow(propertiesErrorMessage);
    expect(new FileGenerator('{{title}}', null)).toThrow(propertiesErrorMessage);
    expect(new FileGenerator(null, { title: 'Test project title' })).toThrow(templateErrorMessage);
    expect(new FileGenerator({ title: 'Test project title' })).toThrow(templateErrorMessage);
  });
});
