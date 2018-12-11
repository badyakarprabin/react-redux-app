import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './store';

import './assets/css/App.scss';
import User from './components/User';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            Learn React Redux
            <User />
          </header>
        </div>
      </Provider>
    );
  }
}

export default App;
