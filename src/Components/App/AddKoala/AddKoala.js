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
    ready_to_transfer: '',
    notes: '',
    labelWidth: 0,
  }

  addKoala = () => {
    let newKoala = {...this.state, ready_to_transfer: false};
    this.props.dispatch({ type: 'ADD_KOALA', payload: newKoala});
  }

  handleChange = (propertyName) => (event) => {
    console.log('in handleChange', event.target.value);
    this.setState({
        ...this.state,
        [propertyName]: event.target.value
    })
  }

  render() {
    const { classes } = this.props;
    return (
      <form onSubmit={this.addKoala}>
        <TextField 
          className={classes.input}
          type="text"
          label="Name"
          name="name"
          onChange={() => this.handleChange('name')}
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
            onChange={() => this.handleChange('gender')}
            input={
              <OutlinedInput
                labelWidth={this.state.labelWidth}
                name="age"
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

        {/* <TextField 
          className={classes.input}
          type="text"
          label="Gender"
          name="gender"
          onChange={this.handleChange}
          variant="outlined"
          value={this.state.gender}
        /><br /> */}
        <TextField 
          className={classes.input}
          type="text"
          label="Age"
          name="age"
          onChange={() => this.handleChange('age')}
          variant="outlined"
          value={this.state.age}
        /><br />
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
