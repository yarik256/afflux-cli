const validator = require('../validators');

describe('Validators can', () => {
  test('check title correct', () => {
    const errorMessage = 'Project name may only include letters, numbers, underscores and hashes.';
    expect(validator.title()).toBe(errorMessage);
    expect(validator.title('')).toBe(errorMessage);
    expect(validator.title('project')).toBeTruthy();
    expect(validator.title('project-name')).toBeTruthy();
    expect(validator.title('project_name')).toBeTruthy();
    expect(validator.title('project/name')).toBe(errorMessage);
    expect(validator.title('project name')).toBe(errorMessage);
  });

  test('check required properties for readme ', () => {
    const properties = {
      title: 'title',
      type: 'type'
    };

    expect(validator.readmeProperties).toThrowError(new TypeError('Properties is required!'));

    const titleCopy = {...properties};
    delete titleCopy.title;
    expect(() => validator.readmeProperties(titleCopy)).toThrowError(new TypeError('Title is required!'));

    const typeCopy = {...properties};
    delete typeCopy.type;
    expect(() => validator.readmeProperties(typeCopy)).toThrowError(new TypeError('Project type is required!'));
  });
});
