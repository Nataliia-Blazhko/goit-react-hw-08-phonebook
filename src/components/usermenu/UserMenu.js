import React from 'react';
import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';

const UserMenu = ({ user, onLogout }) => {
  <div>
    <span>Welcome, {user.email}</span>
    <button type="button" onClick={onLogout}>
      Logout
    </button>
  </div>;
};

const mapStateToProps = state => ({
  name: authSelectors.getUsername(state),
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
