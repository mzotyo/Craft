import React from 'react';
import { createRoot } from 'react-dom/client';

function App(): React.Component {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-10 col-xs-offset-1">
          <h1>Hello!</h1>
        </div>      
      </div>
    </div>
  )
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App/>);
