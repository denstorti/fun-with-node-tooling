# fun-with-node-tooling
Experiments using Nodejs and some tooling like Lint, testing, CI and automation

> npm install
> npm start
> http://localhost:8080?grades=20,55,12

	• Bundling
		○ ES6 Modules and CommonJS
		○ Webpack
	• Linter
		○ ESLint
			§ eslint --init
		○ eslint-watch
	• Transpiling
		○ Babel - https://babeljs.io/
			§ .babelrc
		○ TypeScript
	• Automation
		○ npm scripts
			§ npm-run-all --parallel
				□ npm install npm-run-all --save-dev
		○ Gulp
		○ Grunt
	• Style
		○ EditorConfig (plugin para o VSCode) - http://editorconfig.org/
	• Package Management
		○ npm
		○ Node Security Platform (Security scanning) - npm install -g nsp
			§ nsp check
	• Web server
		○ express
	• Share work-in-progress (expose website)
		○ localtunnel  (lt --port 3000)
		○ surge
		○ now
	• Testing
		○ Unit
			§ mocha (testing framework)
			
			§ chai (assertion library)
				□ var expect = require('chai').expect;
			§ *** Padrão em nome de arquivos:
				□ index.test.js
				□ Package.json:    "test": "mocha --reporter progress \"lib/**/*.test.js\""
			§ jsdom, cheerio (helper - evaluate DOM)
		○ UI
			§ Selenium
	• Continuous integration
		○ Integration
			§ Travis CI
			§ GitLab CI
			§ Jenkins
			§ CircleCI
			§ AppVeyor
	• HTTP and Mock API
		○ HTTP Call
			§ request (Node)
			§ fetch (polyfill - browser)
			§ axios (Node and browser)
		○ *** Centralize API Calls
