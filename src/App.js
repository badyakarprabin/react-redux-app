import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './store';

import './App.css';
import User from './components/User';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">Learn React Redux</header>
          <User />
        </div>
      </Provider>
    );
  }
}

export default App;
