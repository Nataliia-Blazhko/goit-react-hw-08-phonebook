import { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
// import ContactForm from './components/contactform/ContactForm';
// import ContactList from './components/contactlist/ContactList';
import Login from './components/login/Login';
import Register from './components/register/Register';
// import Filter from './components/filter/Filter';
import Contacts from './components/contacts/Contacts';
import Home from './components/home/Home';
import AppBar from './components/appbar/AppBar';

import './styles.scss';

class App extends Component {
  // state = {
  //   contacts: [],
  //   filter: '',
  // };

  render() {
    return (
      <div>
        <AppBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/contacts" component={Contacts} />
        </Switch>
        {/* <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList /> */}
      </div>
    );
  }
}

export default App;
