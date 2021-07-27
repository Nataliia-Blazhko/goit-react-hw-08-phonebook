import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  title: {
    color: 'white',
  },
}));

const AuthNav = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <NavLink
        to="register"
        exact
        className="link"
        activeClassName="active-link"
      >
        <Typography variant="h6" className={classes.title}>
          Регистрация{' '}
        </Typography>
      </NavLink>
      <NavLink to="login" exact className="link" activeClassName="active-link">
        {' '}
        <Typography variant="h6" className={classes.title}>
          Авторизация{' '}
        </Typography>
      </NavLink>
    </div>
  );
};

export default AuthNav;
