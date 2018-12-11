import React, { Component } from 'react';

class User extends Component {
  render() {
    const { name } = this.props;

    return (
      <div className="App">
        <button> {name} </button>
      </div>
    );
  }
}
export default User;
