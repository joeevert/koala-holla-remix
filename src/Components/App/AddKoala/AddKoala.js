import React, { Component } from 'react';
import { connect } from 'react-redux';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Paper from '@material-ui/core/Paper';

const styles = {
  paper: {
    margin: 'auto',
    padding: '25px',
    width: '800px',
    marginBottom: '10px',
  },
  header: {
    marginBottom: '25px'
  },
  formControl: {
    minWidth: '120px',
  },
  input: {
    margin: '10px 15px 25px 0px',
    backgroundColor: '#fff'
  },
  notes: {
    margin: '10px 15px 25px 0px',
    width: '300px',
    backgroundColor: '#fff'
  }
};

class AddKoala extends Component {

  state = {
    name: '',
    gender: '',
    age: '',
    ready_to_transfer: false,
    notes: '',
    labelWidth: 0,
  }

  addKoala = () => {
    let newKoala = this.state;
    this.props.dispatch({ type: 'ADD_KOALA', payload: newKoala});
  }

  handleChange = (event) => {
    console.log('in handleChange', event.target.value);
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('adding koala', this.state);
    this.props.dispatch({ type: 'ADD_KOALA', payload: this.state });
  }

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.paper}>
        <form onSubmit={this.handleSubmit}>
          <Typography className={classes.header} variant="h4">Add Koala</Typography>
          <TextField 
            className={classes.input}
            type="text"
            label="Name"
            name="name"
            onChange={this.handleChange}
            variant="outlined"
            value={this.state.name}
          />
          {/* <br /> */}
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel>
              Gender
            </InputLabel>
            <Select
              className={classes.input}
              value={this.state.gender}
              onChange={this.handleChange}
              input={
              <OutlinedInput
                labelWidth={this.state.labelWidth}
                name="gender"
              />
              }
            >
              <MenuItem value="">
              <em>None</em>
              </MenuItem>
              <MenuItem value="M">Male</MenuItem>
              <MenuItem value="F">Female</MenuItem>
              <MenuItem value="O">Other</MenuItem>
            </Select>
          </FormControl>
          {/* <br /> */}
          <TextField 
            className={classes.input}
            type="number"
            label="Age"
            name="age"
            onChange={this.handleChange}
            variant="outlined"
            value={this.state.age}
          />
          <br />
          <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Ready For Transfer?</FormLabel>
            <RadioGroup
              name="ready_to_transfer"
              value={this.state.ready_to_transfer}
              onChange={this.handleChange}
              row
            >
              <FormControlLabel
                value="true"
                control={<Radio color="primary" required/>}
                label="Ready"
                labelPlacement="end"
              />
              <FormControlLabel
                value="false"
                control={<Radio color="primary" required/>}
                label="Not Ready"
                labelPlacement="end"
              />
            </RadioGroup>
          </FormControl>
          <br />
          <TextField 
            className={classes.notes}
            type="text"
            label="Notes"
            name="notes"
            onChange={this.handleChange}
            variant="outlined"
            value={this.state.notes}
            multiline
            rowsMax="5"
          />
          <br />
          <Button variant="outlined" type="submit">
          SUBMIT
          {/* <Icon fontSize='small'></Icon> */}
          </Button>
        </form>
      </Paper>  
    );
  }
}

const mapReduxStateToProps = ( reduxState ) => ( { reduxState } );

export default connect(mapReduxStateToProps)(withStyles(styles)(AddKoala));
