import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <NavLink to="/" exact className="link" activeClassName="active-link">
      Главная
    </NavLink>

    <NavLink
      to="/contacts"
      exact
      className="link"
      activeClassName="active-link"
    >
      Телефонная книга
    </NavLink>
  </nav>
);
export default Navigation;
