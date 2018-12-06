import React, { Component } from 'react';
import { connect } from 'react-redux';

// mui
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
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
import Switch from '@material-ui/core/Switch';






const styles = {
  header: {
    backgroundColor: '#485167',
    marginBottom: '50px'
  },
  mainTitle: {
    color: '#fff',
    fontWeight: 'bold',
    marginTop: '30px'
  },
  subTitle: {
    color: '#fff',
    fontStyle: 'italic',
    margin: '15px',
  },
  formControl: {
    // margin: theme.spacing.unit,
    minWidth: 120,
  },
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

  handleChange = (event) => {
      
    console.log('in handleChange', event.target.value);
    this.setState({
        ...this.state,
        [event.target.name]: event.target.value
    
    })
    
  }

  render() {
    const { classes } = this.props;
    return (
      <form onSubmit={this.handleClick}>
      {JSON.stringify(this.state)}<br />
        <TextField 
          className={classes.input}
          type="text"
          label="Name"
          name="name"
          onChange={this.handleChange}
          variant="outlined"
          value={this.state.name}
        /><br />
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel
            ref={ref => {
              this.InputLabelRef = ref;
            }}
            htmlFor="outlined-age-simple"
          >
            Gender
          </InputLabel>
          <Select
            value={this.state.gender}
            onChange={this.handleChange}
            input={
              <OutlinedInput
                labelWidth={this.state.labelWidth}
                name="gender"
                id="outlined-age-simple"
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
        </FormControl><br />
        <TextField 
          className={classes.input}
          type="text"
          label="Age"
          name="age"
          onChange={this.handleChange}
          variant="outlined"
          value={this.state.age}
        /><br />
        <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Ready For Harvest?</FormLabel>
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
        </FormControl><br />

        <TextField 
          className={classes.input}
          type="text"
          label="Notes"
          name="notes"
          onChange={this.handleChange}
          variant="outlined"
          value={this.state.notes}
          multiline
          rowsMax="5"
        /><br />
        {/* <Switch
          checked={this.state.ready_to_transfer}
          onChange={() => this.handleChange()}
          value={this.state.ready_to_transfer}
          name={ready_to_transfer}
        /> */}
        
        <Button variant="outlined" type="submit">
          SUBMIT
          {/* <Icon fontSize='small'></Icon> */}
        </Button>
      </form>  
    );
  }
}

// const mapStateToProps = ( reduxState ) => ( { reduxState } );

export default (withStyles(styles)(AddKoala));
