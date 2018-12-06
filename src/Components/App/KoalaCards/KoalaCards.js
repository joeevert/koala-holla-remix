import React, { Component } from 'react';
import wet_koala from './wet_koala.jpg';
import {connect} from 'react-redux';
// material ui
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Button';


const styles = {
  card: {
    width: '500px',
    backgroundColor: '#ddd'
  }
}

class KoalaCards extends Component {

  componentDidMount() {

  }

  transferKoala = (id) => {
    console.log('transfer!');
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        {this.props.reduxState.koalaReducer.map( koala => 
        <Card className={classes.card} key={koala._id}>
          <img src={wet_koala}/>
          <Typography variant="h4">{koala.name}</Typography>
          <Typography>Gender: {koala.gender}</Typography>
          <Typography>Age: {koala.age}</Typography>
          <Typography>Blood-type: {koala.blood_type}</Typography>
          <Typography>Notes: {koala.notes}</Typography>
          <Typography>Status: {koala.status}</Typography>          
          <Button onClick={this.transferKoala}>Transfer</Button>
        </Card>
        )}
      </div>
    );
  }
}

export default withStyles(styles)(KoalaCards);
