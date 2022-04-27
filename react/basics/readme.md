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
# entry point: index.tsx 
# test command: default
# git repository: default
# keywords: react 
# author: Magyari Zoltán
# license: default
```

---

## Initialize application

Production dependencies: _"We will need them once we deploy our application."_

```bash 
npm install --save react react-dom 
```

---

## Initialize application

Development dependencies: _"We need them to develop our application."_


```bash
# Webpack
npm install --save-dev webpack webpack-cli webpack-dev-server 
              
# Babel
npm install --save-dev babel-loader @babel/preset-react

# Typescript
npm install --save-dev @babel/preset-typescript
```

---

## Initialize application

Create **_index.html_**

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
  entry: SRC_DIR + "/app/index.tsx",
  output: {
    path: DIST_DIR + "/app",
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?/,
        include: SRC_DIR,
        use: [
          { loader: "babel-loader" }
        ]
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

Create a **_babel.config.json_** file

```bash
touch babel.config.json
```

---


## Initialize application

**_babel.config.json_**
```json
{
  "presets": ["@babel/preset-react", "@babel/preset-typescript"]
}
```

---

## Initialize application

Write some code

```bash
touch src/app/index.tsx
```

**_index.tsx**
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

## First component

Add a `div` in the `html` at the position where you want the react component to be rendered.

**_index.html_**
```js
  ...
  <body>
    <div id="app"></div>
    ...
  </body>
  ...
```

---

## First component

Write the root component.

**_index.tsx_**
```js 
import React from 'react';
import { createRoot } from 'react-dom/client';

const App = () => {
  return (
    <div>
      <h1>Hello!</h1>
    </div>
  )
}
const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App/>);
```
