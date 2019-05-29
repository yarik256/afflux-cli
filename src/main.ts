import * as inquirer from 'inquirer';
import * as projects from './project-types';
import { questions } from './utils/questions';

interface Answer {
  title: string,
  description: string,
  type: string
}

export default () => {
  return inquirer.prompt(questions).then((answers: Answer) => {
    switch (answers && answers.type) {
      case projects.types.PLAIN: {
        return projects.plain(answers);
      }
      case projects.types.ANGULAR: {
        return projects.angular(answers);
      }
      case projects.types.REACT: {
        return projects.react(answers);
      }
      case projects.types.VUE: {
        return projects.vue(answers);
      }
      default: {
        return TypeError('Invalid project type!');
      }
    }
  })
};
