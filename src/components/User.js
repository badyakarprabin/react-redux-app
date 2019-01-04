import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';

import { fetchUsers } from '../action/users';

class User extends Component {
  render() {
    const {
      userDetail: { list = [], isLoading }
    } = this.props;

    return (
      <div className="App">
        <div>Homepage</div>
        <br />

        {/* Click to fetch value from api and store in the redux store */}
        <div onClick={() => this.props.fetchUsers()}>
          {' '}
          {isLoading ? 'Loading' : 'Exmple of redux(Click to fetch data and store in redux store)'}
        </div>
        {list.map(item => (
          <div>{item.firstName}</div>
        ))}
        <br />
        <Link to="/error">Random routes</Link>
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
