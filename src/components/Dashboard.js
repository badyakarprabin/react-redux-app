import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';

import { fetchUsers } from '../action/users';

// All routes after logged in can be added here.
class Dashboard extends Component {
  render() {
    const {
      userDetail: { list = [], isLoading, error }
    } = this.props;
    const hasData = list && list.length !== 0 && !error;

    return (
      <div className="App">
        <div>Welcome to the Dashboard</div>
        <br />
        {/* Click to fetch value from api and store in the redux store */}
        <div onClick={() => this.props.fetchUsers()}>
          {isLoading ? 'Loading' : 'Click to fetch data and store in redux store'}
        </div>

        {hasData && list.map(item => <div>{item.firstName}</div>)}

        {error && <div>Error Fetchting data</div>}
        <br />
        <Link to="/">Back</Link>
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
)(Dashboard);
