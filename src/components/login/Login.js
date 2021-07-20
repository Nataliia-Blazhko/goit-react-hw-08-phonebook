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

  render() {
    return (
      <form>
        <label htmlFor="login-email">E-mail</label>
        <input
          name="email"
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
      </form>
    );
  }
}

export default Login;
