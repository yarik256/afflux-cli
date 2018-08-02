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
  })
});
