import React from 'react';
import ReactDOM from 'react-dom';

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>
  }
}

const element = <Welcome name="John Doe" />;

function SayHello(props) {
  return <h1>Hello, {props.name}!</h1>;
}

const element2 = <SayHello name="Sara" />

ReactDOM.render(
  element2,
  document.getElementById('root')
);
