import React from 'react';
import './style.css';
import Hof from './HigherOrderFunc';
import { BasicDetails, AddressDetails } from './HigherOrderComp';
import RouteApp from './Route';

const App = () => {
  return (
    <div>
      <h1>Today Topic's</h1>
      <h3>
        <li>Higher Order Components</li>
      </h3>
      <h3>
        <li>Router</li>
      </h3>
      <h3>
        <li>Child Routes</li>
      </h3>
      <h3>
        <li>Passing props to Routes</li>
      </h3>
      <Hof />
      <RouteApp />
    </div>
  );
};

export default App;
