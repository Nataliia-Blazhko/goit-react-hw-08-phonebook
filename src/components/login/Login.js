import React, { Component } from 'react';

export class Login extends Component {
  state = {
    email: '',
    password: '',
  };
  handleInput = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    return (
      <div>
        <h1>Страница авторизации пользователя</h1>
        <form onSubmit={this.handleSubmit} autoComplete="off">
          <label htmlFor="login-email">E-mail</label>
          <input
            name="email"
            type="email"
            id="login-email"
            value={this.state.email}
            onChange={this.handleInput}
          />
          <label htmlFor="login-password">Пароль</label>
          <input
            name="password"
            type="password"
            id="login-password"
            value={this.state.password}
            onChange={this.handleInput}
          />
          <button>Войти</button>
        </form>
      </div>
    );
  }
}

export default Login;
