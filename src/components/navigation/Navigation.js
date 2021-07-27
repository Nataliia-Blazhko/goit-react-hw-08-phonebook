import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { getIsAuthenticated } from '../../redux/auth/auth-selectors';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  title: {
    color: 'white',
  },
}));

const Navigation = ({ isAuthenticated }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <NavLink to="/" exact className="link" activeClassName="active-link">
        {' '}
        <Typography variant="h6" className={classes.title}>
          Главная
        </Typography>
      </NavLink>
      {isAuthenticated && (
        <NavLink
          to="/contacts"
          exact
          className="link"
          activeClassName="active-link"
        >
          {' '}
          <Typography variant="h6" className={classes.title}>
            Телефонная книга{' '}
          </Typography>
        </NavLink>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
});
export default connect(mapStateToProps)(Navigation);
