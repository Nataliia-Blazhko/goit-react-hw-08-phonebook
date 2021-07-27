import React, { Component } from 'react';
import ContactForm from '../contactform/ContactForm';
import ContactList from '../contactlist/ContactList';
import Filter from '../filter/Filter';
import Typography from '@material-ui/core/Typography';

const styles = {
  div: {
    paddingTop: '20px',
    paddingLeft: '20px',
  },
  header: {
    textAlign: 'center',
    margin: '20px 0',
  },
};

export class Contacts extends Component {
  render() {
    return (
      <div style={styles.div}>
        <Typography variant="h4" style={styles.header}>
          Телефонная книга
        </Typography>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    );
  }
}

export default Contacts;
