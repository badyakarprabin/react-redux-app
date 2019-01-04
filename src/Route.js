import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './components/User';
import NotFound from './components/NotFound';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            {/* Add all routes here */}
            <Route exact path="/" render={() => <HomePage />} />
            <Route exact path="*" render={() => <NotFound />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Routes;
