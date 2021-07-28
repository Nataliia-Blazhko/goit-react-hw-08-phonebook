import { connect } from 'react-redux';
import Navigation from '../navigation/Navigation';
import UserMenu from '../usermenu/UserMenu';
import AuthNav from '../authnav/AuthNav';
import { authSelectors } from '../../redux/auth';
import MaterialAppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: '#ae34eb',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}));

const AppBar = ({ isAuthenticated }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MaterialAppBar position="static">
        <Toolbar className={classes.appBar}>
          <Navigation />
          {isAuthenticated ? <UserMenu /> : <AuthNav />}
        </Toolbar>
      </MaterialAppBar>
    </div>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});
export default connect(mapStateToProps)(AppBar);
