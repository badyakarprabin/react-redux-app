import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './store';

import Route from './Route';
import './assets/css/App.scss';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Route />
        </div>
      </Provider>
    );
  }
}

export default App;
