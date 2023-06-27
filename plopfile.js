export default function (plop) {
	plop.setGenerator('controller', {
	  description: 'Create a new controller',
	  prompts: [
		{
		  type: 'input',
		  name: 'name',
		  message: 'Enter the controller name:',
		  validate: function (value) {
			if (/.+/.test(value)) {
			  return true;
			}
			return 'name is required';
		  },
		},
		{
		  type: 'confirm',
		  name: 'hasModel',
		  message: 'Does the controller have a corresponding model?',
		  default: false,
		},
		{
		  type: 'input',
		  name: 'modelName',
		  message: 'Enter the model name:',
		  when: function (answers) {
			return answers.hasModel;
		  },
		},
	  ],
	  actions: function (data) {
		const actions = [
		  {
			type: 'add',
			path: `src/controllers/${data.name}.js`,
			templateFile: 'plop-templates/authController.hbs',
		  },
		  {
			type: 'add',
			path: `src/store/actions/${data.name}.js`,
			templateFile: 'plop-templates/actions.hbs',
		  },
		  {
			type: 'add',
			path: `src/store/reducers/${data.name}.js`,
			templateFile: 'plop-templates/reducer.hbs',
		  },
		  {
			type: 'add',
			path: `src/actionTypes/${data.name}.js`,
			templateFile: 'plop-templates/actionTypes.hbs',
		  },
		  // Additional actions
		  {
			type: 'append',
			path: 'src/index.js',
			pattern: `// Import Controllers`,
			template: `import ${data.name}Controller from './controllers/${data.name}';`,
		  },
		  {
			type: 'modify',
			path: 'src/routes.js',
			pattern: /(import.*from.*controllers';)/s,
			template: `$1\nimport ${data.name}Controller from './controllers/${data.name}';`,
		  },
		  {
			type: 'modify',
			path: 'src/routes.js',
			pattern: /(app\.use\(router\);)/,
			template: `router.use('/${data.name}', ${data.name}Controller);\n  $1`,
		  },
		  {
			type: 'modify',
			path: 'src/store/reducers/index.js',
			pattern: /(import.*from.*reducers';)/s,
			template: `$1\nimport ${data.name}Reducer from './${data.name}';`,
		  },
		  {
			type: 'modify', 
			path: 'src/store/reducers/index.js',
			pattern: /(export default combineReducers\({)/s,
			template: `$1\n  ${data.name}: ${data.name}Reducer,`,
		  },
		];
  
		if (data.hasModel) {
		  actions.push({
			type: 'add',
			path: `src/models/${data.modelName}.js`,
			templateFile: 'plop-templates/model.hbs',
		  });
		  actions.push({
			type: 'modify',
			path: 'src/controllers/index.js',
			pattern: /(const.*controllers.*=.*{)/s,
			template: `$1\n  ${data.name}: require('./${data.name}').default,`,
		  });
		}
  
		return actions;
	  },
	});
  }
  