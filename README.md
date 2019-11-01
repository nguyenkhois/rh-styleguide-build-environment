# The Styleguide development environment
The project is using for front-end developers who use it to create UI components. It's simpler, faster and more effective for development and testing before a component is implemented into the Styleguide application.

__The project is using:__

|Package|Description|
|---|---|
|React Hooks||
|SASS||
|Handlesbars|Using for HTML template|
|Babel||
|ESLint||
|Webpack||
|Webpack Dev Server||
|[code-template-generator](https://www.npmjs.com/package/code-template-generator)|Using for project generation|
|[BrowserSync](https://www.browsersync.io/)|Using for synchronised browser testing|
|[BrowserStack](https://www.browserstack.com/)|Using for cross browser testing _(real and simulation devices)_|
|[Netlify](https://www.netlify.com/)|Using for deployment|

_... and many more in `package.json`..._

## Target environment
Operating system:
* iOS
* Android
* Windows
* MacOS
* Ubuntu

Browsers:
* IE11
* Safari
* Google Chrome
* Microsoft Edge
* Firefox
* Opera

## Usage
* Clone the repo and choose a right branch by the command `$ git fetch` ;-)
* Run `npm install` to install all needed dependencies.
* View the file `/webpack.custom.js` to know more about the local web server and change the port for your reasons.
* Run the commands:
    * `npm start` - Starts the local web server at `http://localhost:3060`.
    * `npm run bs` - Starts the local web server with BrowserSync at `http://localhost:3061`.
    * `npm run build` - Bundles the app to production on local.
    * `npm run deploy` - Deploys to Netlify _(Deploy a draft version)_.
    * `npm run publish` - Deploy to Netlify _(Deploy a production version - live)_.

[![Browserstack](./src/images/Browserstack-logo.svg)](https://www.browserstack.com)