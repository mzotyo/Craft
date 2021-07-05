import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}!</h2>
    </div>
  );

  ReactDOM.render(
    element,
    document.getElementById('root')
  );  
}

function Clock(props) {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is, {props.date.toLocaleTimeString()}!</h2>
    </div>
  );
}

class Clock2 extends React.Component {
  render() {
      return (
          <div>
              <h1>Hello, world!</h1>
              <h2>It is, {this.props.date.toLocaleTimeString()}!</h2>
          </div>
    );
  }
}

function tick2(){
  ReactDOM.render(
    <Clock2 date={new Date()} />, 
    document.getElementById('root')
  );
}

setInterval(tick2, 1000);