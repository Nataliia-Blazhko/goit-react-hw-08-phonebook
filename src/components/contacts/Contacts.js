import React, { Component } from 'react';
import ContactForm from '../contactform/ContactForm';
import ContactList from '../contactlist/ContactList';
import Filter from '../filter/Filter';

export class Contacts extends Component {
  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    );
  }
}

export default Contacts;
