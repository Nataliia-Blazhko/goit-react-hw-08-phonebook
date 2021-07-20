import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Home extends Component {
  render() {
    return (
      <div>
        <h2>
          Чтобы просматривать контакты телефонной книги вам нужно{' '}
          <Link to="/register"> зарегистрироваться</Link> или
          <Link to="/login"> войти</Link>
        </h2>
      </div>
    );
  }
}

export default Home;
