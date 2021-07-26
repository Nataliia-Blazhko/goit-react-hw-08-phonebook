import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as authOperations from '../../redux/auth/auth-operations';

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
    this.props.onLogin(this.state);
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

const mapDispatchToProps = {
  onLogin: authOperations.logIn,
};

export default connect(null, mapDispatchToProps)(Login);
