var SCSS_SOURCE = 'scss';
var JS_SOURCE   = 'js';

module.exports = function (plop) {
    plop.setGenerator('scss', {
        description: 'generate pattern',
        prompts: [{
            type: 'input',
            name: 'type',
            message: 'type',
            validate: function (value) {
                if ((/.+/).test(value)) { return true; }
                return 'type is required';
            }
        },
				{
						type: 'input',
						name: 'name',
						message: 'name',
						validate: function (value) {
								if ((/.+/).test(value)) { return true; }
								return 'name is required';
						}
				}
			],
        actions: [
          // create template file
          {
            type: 'add',
            path: SCSS_SOURCE + '/{{pathCase type}}/{{dashCase name}}.scss',
            templateFile: 'plop-templates/scss.txt'
          }
          ,{
    				type: 'modify',
    				path: SCSS_SOURCE + '/main.scss',
    				pattern: /(\/\*component styles\*\/)/gi,
    				template: '$1\r\n@import "{{pathCase type}}/{{dashCase name}}.scss";'
    			},
      ]
    });


		plop.setGenerator('js', {
        description: 'generate js module',
        prompts: [{
            type: 'input',
            name: 'type',
            message: 'type',
            validate: function (value) {
                if ((/.+/).test(value)) { return true; }
                return 'type is required';
            }
        },
				{
						type: 'input',
						name: 'name',
						message: 'name',
						validate: function (value) {
								if ((/.+/).test(value)) { return true; }
								return 'name is required';
						}
				}
			],
        actions: [
          // create template file
          {
            type: 'add',
            path: JS_SOURCE + '/{{pathCase type}}/{{dashCase name}}.js',
            templateFile: 'plop-templates/js.txt'
          }
          // ,{
    			// 	type: 'modify',
    			// 	path: JS_SOURCE + '/main.js',
    			// 	pattern: /(\/\*component js\*\/)/gi,
    			// 	template: '$1\r\nrequire("'+ JS_SOURCE +'/{{pathCase type}}/{{properCase name}}.js");'
    			// },
      ]
    });



};
