module.exports = [{
  name: 'title',
  type: 'input',
  message: 'Project name:',
  default: '',
  validate (input) {
    if (/^([A-Za-z\-\_\d])+$/.test(input)) {
      return true;
    } else {
      return 'Project name may only include letters, numbers, underscores and hashes.';
    }
  }
}, {
  name: 'description',
  type: 'input',
  message: 'Project description:',
  default: ''
}, {
  name: 'type',
  type: 'list',
  message: 'Project type:',
  choices: [
    {name: 'Plain JS', value: 'plain-js'},
    {name: 'Angular', value: 'angular'},
    {name: 'React', value: 'react'},
    {name: 'Vue', value: 'vue'},
    {name: 'Three.js', value: 'three'},
    {name: 'Chrome-extension', value: 'chrome_extension'},
    {name: 'Mapbox', value: 'Mapbox'}
  ]
}];
