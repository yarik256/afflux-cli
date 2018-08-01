const projects = require('../../project-types');
const config = require('../../config');

const projectName = 'angular-project-test';
// const projectPath = path.join(__dirname, `../${projectName}`);
// const specPath = path.join(__dirname, '../specification/files/');

jest.mock('@angular/cli');
jest.mock('fs');

// const projectFiles = {
//   editorconfig: path.join(projectPath, '.editorconfig'),
//   stylelintrc: path.join(projectPath, '.stylelintrc'),
//   gitignore: path.join(projectPath, '.gitignore'),
//   README: path.join(projectPath, 'README.md'),
//   tslint: path.join(projectPath, 'tslint.json')
// };
//
// const specFiles = {
//   editorconfig: path.join(specPath, '.editorconfig'),
//   stylelintrc: path.join(specPath, '.stylelintrc'),
//   gitignore: path.join(specPath, '.gitignore'),
//   tslint: path.join(specPath, 'tslint.json')
// };

describe('Create angular project', () => {
  test('can run angular cli', () => {
    projects.angular({title: projectName}).then(({cliArgs}) => {
      expect(cliArgs[0]).toBe('new');
      expect(cliArgs[1]).toBe(projectName);
      expect(cliArgs[2]).toBe('--style');
      expect(cliArgs[3]).toBe(config.cssPreprocessor);
    });
  });

  // describe('Check *lint', () => {
  //   fileCopiedFromSpecification('tslint');
  //
  //   fileCopiedFromSpecification('stylelintrc');
  // });
  //
  // describe('Check README.md file', () => {
  //   test('file exists', () => {
  //     expect(fs.existsSync(projectFiles.README)).toBeTruthy();
  //   });
  //
  //   test('created by specification', () => {
  //     expect(false).toBeTruthy();
  //   });
  // });
  //
  // fileCopiedFromSpecification('editorconfig');
  //
  // fileCopiedFromSpecification('gitignore');
});

// function fileCopiedFromSpecification(key) {
//   describe(`Check ${key} file`, () => {
//     test('file exists', () => {
//       expect(fs.existsSync(projectFiles[key])).toBeTruthy();
//     });
//
//     test('copied from specification', () => {
//       fileCompare(projectFiles[key], specFiles[key], (res) => {
//         expect(res).toBeTruthy();
//       });
//     });
//   });
// }
