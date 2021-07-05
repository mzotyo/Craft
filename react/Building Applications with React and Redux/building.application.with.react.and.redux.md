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
  devtool: "cheap-module-source-map",
  entry: ".src/index",
  output: {
    path: path.resolve(__dirname, "build"),
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
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /(\.css)$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};
```

### Babel

- Transpile modern JS
- Compile JSX to JS

**package.json**

```
{
  ...
  "babel": {
    "presets": [
      "babel-preset-react-app"
    ]
  },
  ...
}
```

### Start webpack via npm script

**package.json**

```
{
  ...
  "scripts": {
    "start": "webpack-dev-server --config webpack.config.dev.js --port 3000"
  },
  ...
}
```


```
npm install
```


```
npm start
```


### Debugging and Sourcemaps


It can be inspected from the browser:

```
function Hi() {
  debugger;
  return <p>Hi.</p>
}
```

### ESLint

**package.json**
```
{
  "eslintConfig": {
    "extends": [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:import/errors",
      "plugin:import/warnings"
    ],
    "parser": "babel-eslint",
    "parserOptions": {
      "ecmaVersion": 2018,
      "sourceType": "module",
      "ecmaFeatures": {
        "jsx": true
      }
    },
    "env": {
      "browser": true,
      "node": true,
      "es6": true,
      "jest": true
    },
    "rules": {
      "no-debugger": "off",
      "no-console": "off",
      "no-unused-vars": "warn",
      "react/prop-types": "warn"
    },
    "settings": {
      "react": {
        "version": "detect"
      }
    },
    "root": true
  }
}
```

Install ESLint extension in *VS Code*.

## 2. React Component

### createClass

```
var HelloWorld = React.createClass({
	render: function () {
		return (
			<h1>Hello World</h1>
		);
	}
});
```

### JS class

```
class HelloWorld extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<h1>Hello World</h1>
		);
	}
}
```


### Function

```
function HelloWorld(props) {
	return (
		<h1>Hello World</h1>
	);
}
```

### Arrow function

```
const HelloWorld = (props) => <h1>Hello World</h1>
```


### Container vs Presentation components

**Container**

- Little to no markup
	- Logic on the UI side
	- Stateful
- Pass data and actions down
- Know about *Redux*
  - Have *Redux* specific code inside to dispacht actions
- Often stateful


**Presentation**

- Nearly all markup
- Receive data and actions via props
- Doesn't know about redux
- Often no state

#### Alternative Jargons

- Container vs. Presentational
- Smart vs. Dumb
- Stateful vs. Stateless
- Controller View vs. View

> "When you notice that some
>  components don't use props they
>  receive but merely forward them
>  down ... it's a good time to introduce
>  some container components."
>  - Dan Ambarmov -

## 3. Initial App Structure

**HomePage.js**

```
import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
    <div className="jumbotron">
        <h1>Pluralsight Administration</h1>
        <p>React, Redux and React Router for ultra-responsive web apps.</p>
        <Link to="about" className="btn btn-primary btn-lg">
            Learn more
        </Link>
    </div>
);

export default HomePage;
```


**AboutPage.js**

```
import React from "react";

const AboutPage = () => (
    <div>
        <h2>About</h2>
        <p>
            This app uses React, Redux, React Router, and many other 
            helpful libraries.
        </p>
    </div>
);

export default AboutPage;
```


### Configure app entry point

**index.css**

```
#app {
    max-width: 850px;
    margin: 0 auto;
}

nav {
    padding: 20px 0 20px 0;
}
```

**App.js**

```
import React from 'react';
import {Route} from 'react-router-dom';
import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';

function App() {
    return (
        <div className="container-fluid">
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
        </div>
    )
}

export default App;
```

**index.js**

```
import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from './components/App';
import "./index.css"

render(
  <Router>
    <App />
  </Router>, 
  document.getElementById("app")
);
```

### Create a header

**Header.js**

```
import React from 'react';
import {Route} from 'react-router-dom';
import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';
import Header from './common/Header';

function App() {
    return (
        <div className="container-fluid">
            <Header />
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
        </div>
    )
}

export default App;
```

**App.js**

```
...
import Header from './common/Header';

function App() {
    return (
        <div className="container-fluid">
            <Header />
            ...
        </div>
    )
}

export default App;
```

### Create 404 Error Page

**PageNotFound.js**

```
import React from "react";

const PageNotFound = () => <h1>Oops! Page not found.</h1>

export default PageNotFound;
```

**App.js**

```
...
	<Header />
    <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route component={PageNotFound} />
    </Switch>
...
```

### Course Management

**CoursesPage.js**

```
import React from "react";

class CoursesPage extends React.Component {
    render() {
        return <h2>Courses</h2>;
    }
}

export default CoursesPage;
```

**App.js**

```
...
	<Header />
    <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/about" component={AboutPage} />
        <Route component={PageNotFound} />
    </Switch>
...
```

**Header.js**

```
...
	 <nav>
	    <NavLink to="/" activeStyle={activeStyle} exact>Home</NavLink> {" | "}
	    <NavLink to="/courses" activeStyle={activeStyle}>Courses</NavLink> {" | "}
	    <NavLink to="/about" activeStyle={activeStyle}>About</NavLink>
	</nav>
...
```

## 4. Redux

Redux is a cetralized client side local database (store).

### When to use Redux

- Complex data flows
- Intercomponent communication
- Non-hierarchical data
- Many actions
- Same data used in many places

> "... If you aren't sure if you need it,
>  you don't need it"
>  Pete Hunt

#### Redux core proinciples

- The application state is placed in a single immutable store.
- In redux the only way to change state is to emit an action.
- State changes are handled by pure functions. This functions are called reducers.

### Actions, Stores and Reducers

**Action**

```
{ 
	type: RATE_COURSE, rating: 5 
}
```

**Action Creator**

It's a convinience function:

```
function rateCourse(rating) {
	return { type: RATE_COURSE, rating: rating }
}
```

**Store**

```
let store = createStore(reducer);
```


**Store API**

```
store.dispatch(action);
store.subscribe(listener);
store.getState();
raplaceReducer(nextReducer);
```

The Store in Redux is immutable. There is no action to change any state in the store.

**Reducer**

Reducers must be pure functions, which means they don't produce sideeffects. Pure means a predictable result, for the same set of arguments returns the same output.

- It should arguments never be mutated
- It should no side effects be performed
- It shouldn't any non-pure function be called

```
function myReducer(state, action) {
	switch (action.type) {
		case "INCREMENT_COUNTER":
			return {...state, counter: state.counter + 1};
		default:
			return state;
	}
}
```

All reducers are called when an action is dispatched. The switch statements make sure that the intended one will be executed.

> "Write independent small reducer
>  functions that are each responsible for
>  updates to a specific slice of state. 
>  We call this pattern 'reducer composition'.
>  A given action could be handled by all, some, or non of them."
>  
>  Redux FAQ

## 5. Connect React to Redux


### Two component types

**Container**

- Focus on how things work
- Aware of Redux
- Subscribe to Redux State
- Dispatch redux actions

**Presentational**

- Focus on how things look
- Unaware of Redux
- Read data from props
- Invoke callbacks on props

### React-Redux

Consists of two core items

- Provider
  - Attaches app to store
  
```
<Provider store={this.props.store}>
	<App />
</Provider>
```
  
- Connect
  - Creates container components
  - Wraps our component so it's connected to the Redux store.
    
```
function mapStateToProps(state, ownProps) {
	return { authors: state.authors };
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionsCreators(actions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorPage)
```

## 6. Redux flow

### Attaching App to Store

**CoursePage.js**

```
import React from "react";

class CoursesPage extends React.Component {
  state = {
    course: {
      title: "",
    },
  };

  handleChange = (event) => {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alert(this.state.course.title);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h3>Add Course</h3>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.course.title}
        />
        <input type="submit" value="save" />
      </form>
    );
  }
}

export default CoursesPage;
```

**courseActions.js**

```
export function createCourse(course) {
  return { type: "CREATE_COURSE", course };
}
```

**courseReducer.js**

```
export default function courseReducer(state = [], action) {
  switch (action.type) {
    case "CREATE_COURSE":
      return [...state, { ...action.course }];
    default:
      return state;
  }
}
```

**reducers/index.js**

```
import { combineReducers } from "redux";
import courses from "./courseReducer";

const rootReducer = combineReducers({
  courses,
});

export default rootReducer;
```

**configureStore.js**

```
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";

export default function configureStore(initialState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(reduxImmutableStateInvariant()))
  );
}
```

**index.js**

```
import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./components/App";
import "./index.css";
import configureStore from "./redux/configureStore";
import { Provider as ReduxProvider } from "react-redux";

const store = configureStore();

render(
  <ReduxProvider store={store}>
    <Router>
      <App />
    </Router>
  </ReduxProvider>,
  document.getElementById("app")
);
```

### Connecting Container Component to Store

**CoursesPage.js**

```
import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

class CoursesPage extends React.Component {
  state = {
    course: {
      title: "",
    },
  };

  handleChange = (event) => {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.actions.createCourse(this.state.course);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h3>Add Course</h3>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.course.title}
        />
        <input type="submit" value="save" />
        {this.props.courses.map((course) => (
          <div key={course.title}>{course.title}</div>
        ))}
      </form>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    courses: state.courses,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
```

**actionTypes.js**

```
export const CREATE_COURSE = "CREATE_COURSE";
```

**courseActions.js**

```
import { CREATE_COURSE } from "./actionTypes";

export function createCourse(course) {
  return { type: CREATE_COURSE, course };
}
```

**courseReducer.js**

```
import { CREATE_COURSE } from "../actions/actionTypes";

export default function courseReducer(state = [], action) {
  switch (action.type) {
    case CREATE_COURSE:
      return [...state, { ...action.course }];
    default:
      return state;
  }
}
```