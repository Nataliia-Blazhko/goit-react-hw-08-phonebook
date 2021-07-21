import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export class AppBar extends Component {
  render() {
    return (
      <header>
        <NavLink to="/"> Главная</NavLink>
        <NavLink to="/contacts"> Контакты </NavLink>
        <NavLink to="/register"> Зарегистрироваться</NavLink>
        <NavLink to="/login"> Войти </NavLink>
      </header>
    );
  }
}

export default AppBar;
