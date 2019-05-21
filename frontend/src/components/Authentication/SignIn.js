import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import TextField from '@material-ui/core/TextField';
import * as authService from '../../services/authService';
import Swal from 'sweetalert2';
import {extractErrorMessageFromResponse} from '../../utils/errorMessageExtractor'
import {connect} from 'react-redux';
import store from '../../store';
import {storeUserCredentials} from '../../actions/authActions';

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

// const mapDispatchToProps=dispatch=>{
//   return (userCredentials)=>dispatch(s)
// }

class SignIn extends Component{
  constructor(){
    super()
    this.state={
      email:'',
      password:''
    }
    this.onChange=this.onChange.bind(this)
    this.submitForm=this.submitForm.bind(this)
  }
  onChange(key){
    return (event)=>{
      this.setState({
        [key]:event.target.value
      })
    }    
  }

  submitForm(){
    authService.signIn(this.state.email,this.state.password)
    .then(response=>{
      
      //Store to local storage
      let responseData=response.data.data
      let accessToken=responseData.accessToken
      let refreshToken=responseData.refreshToken
      let userId=responseData.userId
      localStorage.setItem('accessToken', accessToken)
      localStorage.setItem('refreshToken', refreshToken)
      localStorage.setItem('userId', userId)
      //Store the user credentials to redux.
      this.props.dispatch(storeUserCredentials({userId}))
      
    })
    .catch(error=>{
      let errorMsg = extractErrorMessageFromResponse(error)
      Swal.fire('Oops...', errorMsg, 'error')
    })
  }

  render(){
    const { classes } = this.props;
    return (
      <main className={classes.main}>
        <CssBaseline />
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <TextField
          fullWidth
          label="Email Address*"
          // className={classes.textField}
          value={this.state.email}
          onChange={this.onChange('email')}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Password*"
          type='password'
          value={this.state.password}
          onChange={this.onChange('password')}
          margin="normal"
        />

            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Button
            type='submit'
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={this.submitForm}
            >
              Sign in
            </Button>

        </Paper>
      </main>
    );
  }
}
SignIn.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(store => {
  return {
    tooltip: '',
  };
})(withStyles(styles)(SignIn));