# Create React App From scratch
---

## Initialize application

Initialize the environment
```bash
npm init

# package name: default
# version: default
# description: Some basic ReactJS
# entry point: index.js 
# test command: default
# git repository: default
# keywords: react 
# author: Magyari Zoltán
# license: default

```
---

Production dependencies
```bash 
npm install --save react react-dom 
```
---

Development dependencies
```bash
npm install --save-dev webpack webpack-dev-server babel-loader babel-preset-es2015 babel-preset-react babel-preset-stage-2
```

```bash
mkdir -p src/app
touch src/index.html
```
---

Write html 5 skeleton into: _index.html_
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>ReactJS Basics</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="css/style.css" rel="stylesheet">
  </head>
  <body>
  
  </body>
</html>
```
---

Configure webpack
```bash
touch webpack.config.js
```
---

_webpack.config.js_
```js
var path = require("path");

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");
var config = {
  entry: SRC_DIR + "/app/index.js",
  output: {
    path: DIST_DIR + "app",
    filename: "bundle.js",
    publicPath: "/app/"
  },
  modules: {
    loaders: [
      {
        test: /\.js?/,
        include: SRC_DIR,
        loader: "babel-loader",
        query: {
          presets: ["react", "es2015", "stage-2"]
        }
      }
    ]
  }
};

module.exports = config;
```
---

Write some code
```bash
touch src/app/index.js
```
_index.js_
```js
conosle.log('It works!');
```
---

Reference it from html
```html
  <body>
    <script src="/app/bundle.js"></script>
  </body>
```
---

Write the build scrip in package.json
```json
{
  ...
  "scripts": {
    "start": "npm run build",
    "build": "webpack -d && cp src/index.html dist/index.html webpack-dev-server --content-base src --inline --hot",
    "build:prod": "webpack -p && cp src/index.html dist/index.html",
  },
  ...
}
```
---
min 0:22
