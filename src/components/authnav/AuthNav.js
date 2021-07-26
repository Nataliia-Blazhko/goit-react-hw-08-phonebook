import React from 'react';
import { NavLink } from 'react-router-dom';

const AuthNav = () => (
  <div>
    <NavLink to="register" exact className="link" activeClassName="active-link">
      Регистрация пользователя
    </NavLink>
    <NavLink to="login" exact className="link" activeClassName="active-link">
      Авторизация пользователя
    </NavLink>
  </div>
);

export default AuthNav;
