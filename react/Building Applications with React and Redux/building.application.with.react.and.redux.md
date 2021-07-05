# Building Application with React and Redux

## 1. Environment Build

Creating an environment which will:

- Compile JSX
- Transpile JS
- Linting
- Generate index
- Reload on save

It will be used following technologies:

- Node
- Webpack
- Babel
- ESLint
- npm scripts

### Install Node

Install *nodejs*: [https://joshtronic.com/2017/12/11/upgrade-to-nodejs-8-on-debian-and-ubuntu/](https://joshtronic.com/2017/12/11/upgrade-to-nodejs-8-on-debian-and-ubuntu/)

Install *Node packages* in the project folder:
`npm install`

Intall *React Dev Tools* and *Redux Dev Tools* plugins in the browser.

### Install vs code

```bash
	sudo apt install software-properties-common apt-transport-https curl

	curl -sSL https://packages.microsoft.com/keys/microsoft.asc | sudo apt-key add -
	sudo add-apt-repository "deb [arch=amd64] https://packages.microsoft.com/repos/vscode stable main"
	
	sudo apt update	
	sudo apt install code
```

### Initial code

**index.html**

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Pluralsight Redux</title>
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>
```

**index.js**

```
import React from "react";
import { render } from "react-dom";

function Hi() {
  return <p>Hi.</p>;
}

render(<Hi />, document.getElementById("app"));
```

### Configure webpack

It's common to have a separate config from development and production.


#### Core config settings

**webpack.config.dev.js**

```
const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

process.env.NODE_ENV = "development";

module.export = {
  mode: "development",
  target: "web",
  devTool: "cheap-module-source-map",
  entry: ".src/index",
  output: {
    path: path.resolve(__dirnam, "build"),
    publicPath: "/",
    filename: "bundle.js",
  },
};

```

#### Dev Server

```
module.export = {
  ...
  devServer: {
    stats: "minimal",
    overlay: true,
    historyApiFallback: true,
    disableHostCheck: true,
    headers: { "Access-Control-Allow-Origin": "*" },
    https: false,
  },
};
```

#### Plugins

```
module.export = {
  ...
  plugins: new HtmlWebpackPlugin({
    template: "src/index.html",
    favicon: "src/favicon.ico",
  }),
};
```

#### Loaders

```
module.export = {
  ...
  plugins: new HtmlWebpackPlugin({
    template: "src/index.html",
    favicon: "src/favicon.ico",
  }),
};
```