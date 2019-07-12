import React from 'react'
import gql from 'graphql-tag'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { Mutation } from 'react-apollo'
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { FormControl, FormLabel } from "react-bootstrap";
import logo from './../eagle.svg';
import Loading from './Loading'
import swal from '@sweetalert/with-react';
import "./Signup.css";

const useStyles = makeStyles(theme => ({
  fab: {
    marginTop: 20,
  },
  typo: {
    marginTop: 20
  }
}))

const SignUp = (props) => {

  document.body.style = 'background: -webkit-linear-gradient(to left, #F53134, #FFFC52);  /* Chrome 10-25, Safari 5.1-6 */';
  document.body.style = 'background: #fc4a1a;';
  document.body.style = 'background: linear-gradient(to left, rgba(245,49,52,1), rgba(255,252,82,1));';
  
  const classes = useStyles()
  const [values, setValues] = React.useState({
    name: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  })

  const CREATE_USER = gql`
    mutation {
      createUser(user: {
        name: "${values.name}"
        last_name: "${values.lastName}"
        username: "${values.username}"
        email: "${values.email}"
        password: "${values.password}"
        password_confirmation: "${values.passwordConfirmation}"
      }){
        id
      }
    }
  `;

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const token = localStorage.getItem('Authorization')
  
  function redireccionar(){
    window.location.href="/home";
  }

  if (token==null) {
    return (
      <div className="Signup" 
        onKeyPress={event => {
          if (event.key === "Enter") {
            document.getElementById("btnSingUp").click();
          }
        }}
        >
        <div>
          <h1>Eagle UN</h1>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <Grid container justify='center'>
          <Grid>
            <Typography className={classes.typo} variant='body2' color='textPrimary' component='p'>
              <FormLabel>Name</FormLabel>
            </Typography>
            <FormControl
              id="nameUser"
              label=""
              value={values.name}
              onChange={handleChange('name')}
              className={classes.textField}
              margin="normal"
              placeholder="Enter your name"
              autoFocus="autofocus"
            />
            </Grid>
            <Grid>
              <Typography className={classes.typo} variant='body2' color='textPrimary' component='p'>
                <FormLabel>Last name</FormLabel>
              </Typography>
              <FormControl
                id="userLastName"
                label=""
                value={values.lastName}
                onChange={handleChange('lastName')}
                className={classes.textField}
                margin="normal"
                placeholder="Enter your last name"
              />
            </Grid>
            <Grid>
              <Typography className={classes.typo} variant='body2' color='textPrimary' component='p'>
                <FormLabel>User Name</FormLabel>
              </Typography>
              <FormControl
                id="userName"
                label=""
                value={values.username}
                onChange={handleChange('username')}
                className={classes.textField}
                margin="normal"
                placeholder="Enter a user name"
              />
            </Grid>
            <Grid>
              <Typography className={classes.typo} variant='body2' color='textPrimary' component='p'>
                <FormLabel>Email</FormLabel>
              </Typography>
              <FormControl
                id="userEmail"
                label=""
                value={values.email}
                onChange={handleChange('email')}
                className={classes.textField}
                margin="normal"
                placeholder="Enter a email"
              />
            </Grid>
            <Grid>
              <Typography className={classes.typo} variant='body2' color='textPrimary' component='p'>
                <FormLabel>Password</FormLabel>
              </Typography>
              <FormControl
                id="userPassword"
                label=""
                type="password"
                value={values.password}
                onChange={handleChange('password')}
                className={classes.textField}
                margin="normal"
                placeholder="Enter a password"
            />
            </Grid>
            <Grid>
              <Typography className={classes.typo} variant='body2' color='textPrimary' component='p'>
                <FormLabel>Password Confirmation</FormLabel>
              </Typography>
              <FormControl
                id="userPasswordConfirmation"
                label=""
                type="password"
                value={values.passwordConfirmation}
                onChange={handleChange('passwordConfirmation')}
                className={classes.textField}
                margin="normal"
                placeholder="Confirm your password"
              />
            </Grid>          
        </Grid>
        <Grid container justify='center'>
          <Mutation mutation={CREATE_USER}
            onError={
              (errors)=>{
                if(errors){
                  return <div alert={swal("Wrong sign up!", "Bad credentials", "error")} />
                }
              }
            }
            onCompleted={
              (data) => {
                if(data!==null){
                  swal({
                    title: "Sign up completed!",
                    text: "Now you can login!",
                    icon: "success",
                    button: "Ok!",
                  })
                  .then((value)=>{
                    window.location.assign('/')
                  });
                }
              }
            }
          >
            {postMutation => <Button id="btnSingUp" variant='contained' aria-label='Add to favorites' className={classes.fab} onClick={postMutation}>
              Sign up
            </Button>}
          </Mutation>
        </Grid>
      </div>
    )
  }else{
  setTimeout (redireccionar, 5000);
    return(
      <div>
        <Loading />
      </div>
    )
  }
}

export default SignUp
