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

	• Nodejs can be for frontend developers too

	• ES6 Features
		○ http://es6-features.org

	• Promises vs Callbacks
		○ new Promise(function(resolve, reject){})
		○ promise.then(success (result){}, error(result){})
		○ https://developers.google.com/web/fundamentals/primers/promises?hl=pt-br#whats-all-the-fuss-about
		○ https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises

	• Auth
		○ Passport (auth)

	• View/Template
		○ Angular
		○ EJS
		○ Jade

	• APM
		○ https://blog.risingstack.com/monitoring-nodejs-applications-nodejs-at-scale/

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
	• Debugging
		○ node-inspector

	• Logging
		○ pino

	• Style
		○ EditorConfig (plugin para o VSCode) - http://editorconfig.org/

	• Package Management
		○ npm
		○ Node Security Platform (Security scanning) - npm install -g nsp
			§ nsp check
		○ *** Semantic versioning
			§ http://semver.org/
	• Web server
		○ express
		○ Cache
			§ redis
			§ memcached

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

			§ istanbul (nyc)
				□ npm i -D nyc
				□ Codecov - https://codecov.io/gh
					® npm i -D codecov

		○ UI
			§ Selenium
	• Continuous integration
		○ Integration
			§ Travis CI - https://travis-ci.org/
			§ GitLab CI
			§ Jenkins
			§ CircleCI
			§ AppVeyor
	• HTTP Calls
		○ HTTP Call
			§ request (Node)
			§ node-fetch (polyfill - browser)
			§ axios (Node and browser)
		○ *** Centralize API Calls
	• Mock API
		○ Nock
		○ JSON Server + JSON Schema Faker
			§ faker.js, chance.js
      Swagger