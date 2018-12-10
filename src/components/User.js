import React, { Component } from 'react';

import { connect } from 'react-redux';
import { fetchUsers } from '../action/users';

class User extends Component {
  render() {
    const {
      userDetail: { list = [], isLoading }
    } = this.props;

    return (
      <div className="App">
        <div onClick={() => this.props.fetchUsers()}> {isLoading ? 'Loading' : 'Click to fetch names'}</div>
        {list.map(item => (
          <div>{item.firstName}</div>
        ))}
      </div>
    );
  }
}

// takes value from store.
const mapStateToProps = state => ({
  userDetail: state.users
});

const mapDispatchToProps = {
  fetchUsers
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
