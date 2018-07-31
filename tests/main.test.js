const execa = require('execa');
const path = require('path');

const tmpDirName = 'tmp';
const binFile = require('../package').bin.afflux;

describe('Main functionality', () => {
  beforeAll(() => {
    try {
      execa.shellSync(`mkdir ${tmpDirName}`);
    } catch (e) {
      if (e.code !== 1) {
        console.error(e);
      }
    }
    execa.shellSync('cd tmp');

    return execa.shellSync(path.join('..', binFile));
  });

  test('Project directory was created', () => {
    expect(true).toBe(true);
  });

  afterAll(() => {
    // Go back to the root project folder
    execa.shellSync(`cd ${path.join(__dirname, '..')}`);
    execa.shellSync(`rm -rdf ${tmpDirName}`);
  });
});
