const inquirer: Inquirer = jest.genMockFromModule('inquirer');

interface Inquirer {
  prompt: Function
}

inquirer.prompt = async (questions) => {
  return;
};

module.exports = inquirer;
