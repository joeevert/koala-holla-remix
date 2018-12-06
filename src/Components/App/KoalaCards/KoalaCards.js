import React, { Component } from 'react';
import koala_img from './koala.jpg';
import {connect} from 'react-redux';
// material ui
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const styles = {
  button: {
    margin: 10,

  },
  card: {
    width: '500px',
    backgroundColor: '#ddd',
    display: 'inline-block',
    margin: 10
  }
}

class KoalaCards extends Component {

  deleteKoala = (id) => {
    console.log('transfer!');
    this.props.dispatch({ type: 'DELETE_KOALA', payload: id})
  }

  transferKoala = (id) => {
    console.log('transfer!');
    this.props.dispatch({ type: 'MARK_TRANSFER', payload: id})
  }

  componentDidMount() {
    this.props.dispatch({ type: 'GET_KOALAS' });
  }

  render() {
    const { classes } = this.props;
    console.log('koalas from reducer:',this.props.reduxState.koalaReducer.koalas)

    return (
      <div>
        {this.props.reduxState.koalaReducer.koalas.map( koala => 
        <Card className={classes.card} key={koala._id}>
          <img src={koala.image_url} alt={koala.name} style={{width: 500}}/>
          <Typography variant="h4">{koala.name}</Typography>
          <Typography>Gender: {koala.gender}</Typography>
          <Typography>Age: {koala.age}</Typography>
          <Typography>Notes: {koala.notes}</Typography>
          <Typography>Status: {(koala.ready_to_transfer) ? 'Ready for Transfer' : 'Not Ready for Transfer'}</Typography>          
          <Button variant="contained" color="primary" className={classes.button} onClick={() => this.transferKoala(koala._id)}>Transfer</Button>
          <Button variant="contained" color="secondary" className={classes.button} onClick={() => this.deleteKoala(koala._id)}>Remove</Button>
        </Card>
        )}
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapReduxStateToProps)(withStyles(styles)(KoalaCards));
