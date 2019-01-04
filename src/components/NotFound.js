import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="App">
    <div>404 Not Found</div>
    <br/>
    <Link to="/">Home Page</Link>
  </div>
);

export default NotFound;
