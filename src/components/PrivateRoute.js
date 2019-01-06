import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

/**
 * Higher Order Component to authenticate routes.
 *
 * @param {object} props
 * @returns {JSX}
 */
class PrivateRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false
    };
  }

  componentWillMount() {
    // If logged in
    if (this.props.location.state.isLoggedIn) {
      this.setState({
        isAuthenticated: true
      });

      return;
    }
  }

  render() {
    const { isAuthenticated } = this.state;
    const { component: Component, ...rest } = this.props;

    return (
      <Route
        {...rest}
        render={props =>
          isAuthenticated ? (
            <Component {...props} />
          ) : (
            <Redirect to={{ pathname: '/', state: { from: props.location } }} />
          )
        }
      />
    );
  }
}

export default PrivateRoute;
