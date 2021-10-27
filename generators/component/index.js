const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Create a new navigate-able component',
  prompts: [
    {
      type: 'list',
      name: 'component',
      message: 'Are you creating components or screens?',
      choices: ['Screens', 'Components'],
    },
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'ComponentName',
      validate: value => {
        if (/.+/.test(value)) {
          return componentExists(value.toLowerCase())
            ? 'A component with this name already exists'
            : true;
        }

        return value.length > 0 || 'The name is required';
      },
    },
  ],
  actions: data => {
    const actions = [
      {
        type: 'add',
        path: '../src/{{lowerCase component}}/{{dashCase name}}/index.ts',
        templateFile: './component/index.ts.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../src/{{lowerCase component}}/{{dashCase name}}/{{dashCase name}}.layout.tsx',
        templateFile: './component/layout.tsx.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../src/{{lowerCase component}}/{{dashCase name}}/{{dashCase name}}.logic.tsx',
        templateFile: './component/logic.tsx.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../src/{{lowerCase component}}/{{dashCase name}}/{{dashCase name}}.stories.tsx',
        templateFile: './component/stories.tsx.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../src/{{lowerCase component}}/{{dashCase name}}/styles.ts',
        templateFile: './component/styles.ts',
        abortOnFail: true,
      },
    ];
    return actions;
  },
};
