import React from 'react';
import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  button: {
    color: 'secondary',
  },
}));

const UserMenu = ({ email, onLogout }) => {
  const classes = useStyles();
  return (
    <div>
      <span>Welcome, {email}</span>
      <Button
        type="button"
        onClick={onLogout}
        variant="contained"
        size="medium"
        color="secondary"
        className={classes.margin}
      >
        Logout
      </Button>
    </div>
  );
};

const mapStateToProps = state => ({
  name: authSelectors.getUsername(state),
  email: authSelectors.getUserEmail(state),
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
