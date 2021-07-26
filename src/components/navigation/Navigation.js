import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { getIsAuthenticated } from '../../redux/auth/auth-selectors';

const Navigation = ({ isAuthenticated }) => (
  <nav>
    <NavLink to="/" exact className="link" activeClassName="active-link">
      Главная
    </NavLink>
    {isAuthenticated && (
      <NavLink
        to="/contacts"
        exact
        className="link"
        activeClassName="active-link"
      >
        Телефонная книга
      </NavLink>
    )}
  </nav>
);

const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
});
export default connect(mapStateToProps)(Navigation);
