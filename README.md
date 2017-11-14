# Fun with Nodejs and Javacript environment [![Build Status](https://travis-ci.org/denstorti/fun-with-node-tooling.svg?branch=master)](https://travis-ci.org/denstorti/fun-with-node-tooling)
Experiments using Nodejs and some tooling like Lint, testing, CI and automation

How to run:
1. npm install
2. npm start
3. open http://localhost:8080?grades=20,55,12 or http://localhost:8080/users

Check the build: https://travis-ci.org/denstorti/fun-with-node-tooling

Scripts on package.json:

```json
  "scripts": {
    "prestart": "node ./scripts/preMessage.js",
    "start": "npm-run-all --parallel inicial test:watch security-check lint",
    "inicial": "node ./src/index.js ",
    "lint": "esw --watch --color",
    "security-check": "nsp check",
    "test": "mocha --reporter progress \"lib/**/*.test.js\" \"src/**/*.test.js\"",
    "test:watch": "npm run test -- --watch"
  }
```
Some notes about tooling for Javascript environment:

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
