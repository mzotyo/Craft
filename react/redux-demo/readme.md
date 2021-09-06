# React Redux Tutorials

## Initial Setup

1. Create a folder with the name `redux-demo`.

2. Inside the folder `redux-demo` run the following command:

```shell
> npm init --yes
```

This will initialize a `package.json` with default settings.
```json
{
  "name": "redux-demo",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}

```

3. Add redux as a dependency for our project

```shell
> npm install redux
```

```json
  ...
  "dependencies": {
    "redux": "^4.1.1"
  }
}
```

4. Create the `index.js` JavaScript file

```js
console.log('hello world')
```

```shell
> node index
hello world
```

## Actions

1. Define our fitst action type

```js
const BUY_CAKE = 'BUY_CAKE'
```

2. Define our first action

```js
{
    type: BUY_CAKE
}
```

3. The additional property of an action

```js
{
    type: BUY_CAKE
    info: 'First redux action'
}
```

4. Create an action creator: a function that creates an action.

```js
function buyCacke() {
    return {
        type: BUY_CACKE,
        info: 'First redu action'
    }
}
```