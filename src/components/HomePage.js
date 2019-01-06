import { Link } from 'react-router-dom';
import React, { Component } from 'react';

class HomePage extends Component {
  state = {
    isLoggedIn: false
  };

  onLogIn = () => {
    this.setState({ isLoggedIn: true });
  };

  render() {
    const { isLoggedIn } = this.state;
    const logIn = isLoggedIn ? 'Logged In' : 'Not logged in';

    return (
      <div className="App">
        React Repo : Built with create react app, added redux,interceptors, store presist, public and private routes.
        <ul>
          <li>Welcome to the site</li>
          <li>
            <Link to={{ pathname: '/home', state: { isLoggedIn } }}>Dashboard (logged in user)</Link>
          </li>
          <li>
            <Link to="/error">Random routes</Link>
          </li>
        </ul>
        <div onClick={this.onLogIn}>Click to login</div>
        <b>You are {logIn}.</b>
      </div>
    );
  }
}

export default HomePage;
