import React, { Component, Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { authOperations } from './redux/auth';
import AppBar from './components/appbar/AppBar';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import Container from '@material-ui/core/Container';

import './styles.scss';

const Home = lazy(() => import('./components/home/Home'));
const Register = lazy(() => import('./components/register/Register'));
const Login = lazy(() => import('./components/login/Login'));
const Contacts = lazy(() => import('./components/contacts/Contacts'));

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <Container fixed>
        <AppBar />
        <Suspense fallback={<p>Идёт загрузка...</p>}>
          <Switch>
            <PublicRoute
              exact
              path="/"
              component={Home}
              redirectTo="/contacts"
            />
            <PublicRoute
              exact
              path="/register"
              component={Register}
              redirectTo="/contacts"
            />
            <PublicRoute
              exact
              path="/login"
              redirectTo="/contacts"
              restricted
              component={Login}
            />
            <PrivateRoute
              exact
              path="/contacts"
              component={Contacts}
              redirectTo="/login"
            />
          </Switch>
        </Suspense>
      </Container>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
