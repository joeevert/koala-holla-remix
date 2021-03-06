import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  header: {
    backgroundColor: '#485167',
    marginBottom: '30px'
  },
  mainTitle: {
    color: '#fff',
    fontWeight: 'bold',
    marginTop: '30px',
    paddingBottom: '30px'
  },
  subTitle: {
    color: '#fff',
    fontStyle: 'italic',
    margin: '15px',
  }
};

class Header extends Component {
  render() {
    const { classes } = this.props;
    return (
      <AppBar className={classes.header} position="static">
        <Typography className={classes.mainTitle} variant='h2'>Koala Holla!</Typography>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Header);
