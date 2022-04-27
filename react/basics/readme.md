# Create React App From scratch

[ReactJS basics](https://youtu.be/uextYhQGP6k)

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

## Initialize application

Production dependencies

```bash 
npm install --save react react-dom 
```

> *We will need it once we deploy our application.*


---

## Initialize application

Development dependencies

```bash
npm install --save-dev webpack webpack-cli webpack-dev-server 
              babel-loader babel-preset-es2015 babel-preset-react 
              babel-preset-stage-2
```

```bash
mkdir -p src/app
touch src/index.html
```
---

## Initialize application

Write `HTML5` skeleton into: **_index.html_**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>ReactJS Basics</title>
  </head>
  <body>
  
  </body>
</html>
```

---

## Initialize application

Create a **_webpack.config.js_** file

```bash
touch webpack.config.js
```

---

```js
var path = require("path");

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

var config = {
  entry: SRC_DIR + "/app/index.js",
  output: {
    path: DIST_DIR + "/app",
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js?/,
        include: SRC_DIR,
        use: [ { loader: "babel-loader" } ]
      }
    ]
  },
  devServer: {
    static: DIST_DIR,
    hot: true
  }
};

module.exports = config;
```

---

## Initialize application

Write some code

```bash
touch src/app/index.js
```

**_index.js_**
```js
conosle.log('It works!');
```

---

## Initialize application

Reference it from the **_index.html_**

```html
  ...
  <body>
    <script src="/app/bundle.js"></script>
  </body>
  ...

```

---

## Initialize application

Write the build scrip in **_package.json_**

```json
{
  ...
  "scripts": {
    "start": "npm run build",
    "build": "webpack --mode=development && cp src/index.html dist/index.html && webpack-dev-server",
    "build:prod": "webpack --mode=production && cp src/index.html dist/index.html"
  },
  ...
}
```

---

