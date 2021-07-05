import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const user = {
  firstName: 'Harold',
  lastName: 'Smith'
};

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

function getGreeting(user) {
  if(user) {
    return 'Hello, ' + formatName(user) + '!';
  }
  return 'Hello, stranger!'
}

// JSX prevents injection attacks (XSS cross-site-scripting attacks)
const element = <h1>{getGreeting(user)}</h1>;

const element2 = React.createElement(
  'div',
  {},
  <h1>{getGreeting(user)}</h1>
);

ReactDOM.render(
  element2,
  document.getElementById('root')
);
