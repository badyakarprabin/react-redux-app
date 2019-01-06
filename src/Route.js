import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './components/HomePage';
import NotFound from './components/NotFound';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            {/* Add all routes here */}
            <Route exact path="/" render={() => <HomePage />} />
            <PrivateRoute path="/home" component={Dashboard} />
            <Route exact path="*" render={() => <NotFound />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Routes;
