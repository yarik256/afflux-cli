const fs = require('fs');
const path = require('path');
const execa = require('execa');
const fileCompare = require('filecompare');
const projects = require('../project-types');

const projectName = 'angular-project-test';
const projectPath = path.join(__dirname, `../${projectName}`);
const specPath = path.join(__dirname, '../specification/files/');

jest.setTimeout(300000);

const projectFiles = {
  editorconfig: path.join(projectPath, '.editorconfig'),
  stylelintrc: path.join(projectPath, '.stylelintrc'),
  gitignore: path.join(projectPath, '.gitignore'),
  README: path.join(projectPath, 'README.md'),
  tslint: path.join(projectPath, 'tslint.json')
};

const specFiles = {
  editorconfig: path.join(specPath, '.editorconfig'),
  stylelintrc: path.join(specPath, '.stylelintrc'),
  gitignore: path.join(specPath, '.gitignore'),
  tslint: path.join(specPath, 'tslint.json')
};

describe('Create angular project', () => {
  beforeAll(async () => {
    return projects.angular({title: projectName});
  });

  test('project directory exists', () => {
    expect(fs.existsSync(projectPath)).toBeTruthy();
  });

  describe('Check *lint', () => {
    fileCopiedFromSpecification('tslint');

    fileCopiedFromSpecification('stylelintrc');
  });

  describe('Check README.md file', () => {
    test('file exists', () => {
      expect(fs.existsSync(projectFiles.README)).toBeTruthy();
    });

    test('created by specification', () => {
      expect(false).toBeTruthy();
    });
  });

  fileCopiedFromSpecification('editorconfig');

  fileCopiedFromSpecification('gitignore');

  afterAll(() => {
    execa.shellSync(`rm -rdf ${projectPath}`);
  });
});

function fileCopiedFromSpecification(key) {
  describe(`Check ${key} file`, () => {
    test('file exists', () => {
      expect(fs.existsSync(projectFiles[key])).toBeTruthy();
    });

    test('copied from specification', () => {
      fileCompare(projectFiles[key], specFiles[key], (res) => {
        expect(res).toBeTruthy();
      });
    });
  });
}
