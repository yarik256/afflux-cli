import { ProjectType } from "@src/main";

interface Types {
  [key: string]: ProjectType
}

export const types: Types = {
  PLAIN: 'plain-js',
  ANGULAR: 'angular',
  REACT: 'react',
  VUE: 'vue'
};

export { plain } from './plain';
export { angular } from './angular';
export { react } from './react';
export { vue } from './vue';
