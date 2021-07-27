import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  title: {
    color: 'black',
  },
});

export class Home extends Component {
  render() {
    return (
      <div>
        <Typography variant="h4" align="center">
          Телефонная книга
        </Typography>
      </div>
    );
  }
}

export default Home;
