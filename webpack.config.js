const path = require('path');

module.exports = {
	mode: 'development',

	entry: {
		'scripts': './_javascripts/index.js'
	},

	output: {
		path: path.join(__dirname, 'assets'),
		filename: '[name].js'
	}
};
