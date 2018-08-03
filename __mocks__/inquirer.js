const inquirer = jest.genMockFromModule('inquirer');

inquirer.prompt = async (questions) => {
  return;
};

module.exports = inquirer;
