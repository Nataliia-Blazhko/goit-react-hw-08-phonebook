import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as authOperations from '../../redux/auth/auth-operations';

export class Register extends Component {
  state = {
    name: '',
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
    this.props.onRegister(this.state);
    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    return (
      <div>
        <h1>Страница регистрации пользователя</h1>
        <form onSubmit={this.handleSubmit} autoComplete="off">
          <label htmlFor="register-name">Имя</label>
          <input
            onChange={this.handleInput}
            name="name"
            id="register-name"
            value={this.state.name}
          />
          <label htmlFor="register-email">E-mail</label>
          <input
            onChange={this.handleInput}
            name="email"
            id="register-email"
            value={this.state.email}
          />
          <label htmlFor="register-password">Пароль</label>
          <input
            onChange={this.handleInput}
            name="password"
            type="password"
            id="register-password"
            value={this.state.password}
          />
          <button>Зарегистрироваться</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onRegister: data => dispatch(authOperations.register(data)),
});

export default connect(null, mapDispatchToProps)(Register);
