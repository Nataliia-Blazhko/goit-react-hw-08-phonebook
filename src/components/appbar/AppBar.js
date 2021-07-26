import { connect } from 'react-redux';
import Navigation from '../navigation/Navigation';
import UserMenu from '../usermenu/UserMenu';
import AuthNav from '../authnav/AuthNav';
import { authSelectors } from '../../redux/auth';

const AppBar = ({ isAuthenticated }) => (
  <header>
    <Navigation />
    {isAuthenticated ? <UserMenu /> : <AuthNav />}
  </header>
);

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});
export default connect(mapStateToProps)(AppBar);
