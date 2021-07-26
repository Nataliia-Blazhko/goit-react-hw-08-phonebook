import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as authOperations from '../../redux/auth/auth-operations';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  form: {
    display: 'block',
    margin: '30px auto',
  },
  input: {
    display: 'block',
    marginBottom: '15px',
    width: '350px',
    margin: '10px auto',
  },
  textCenter: {
    textAlign: 'center',
  },
};

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
      <>
        <Typography
          style={styles.textCenter}
          variant="h4"
          component="h4"
          gutterBottom
        >
          Страница регистрации пользователя
        </Typography>
        {/* <h1>Страница регистрации пользователя</h1> */}
        <form
          onSubmit={this.handleSubmit}
          autoComplete="off"
          style={styles.form}
        >
          <TextField
            label="Name"
            variant="outlined"
            onChange={this.handleInput}
            name="name"
            id="register-name"
            value={this.state.name}
            style={styles.input}
            fullWidth
          />
          <TextField
            label="E-mail"
            variant="outlined"
            onChange={this.handleInput}
            name="email"
            id="register-email"
            value={this.state.email}
            style={styles.input}
            fullWidth
          />
          <TextField
            label="Password"
            variant="outlined"
            onChange={this.handleInput}
            name="password"
            type="password"
            id="register-password"
            value={this.state.password}
            style={styles.input}
            fullWidth
          />
          <Button
            variant="outlined"
            color="primary"
            style={styles.input}
            size="large"
          >
            Зарегистрироваться
          </Button>
        </form>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onRegister: data => dispatch(authOperations.register(data)),
});

export default connect(null, mapDispatchToProps)(Register);
