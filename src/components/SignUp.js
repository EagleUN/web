import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import React from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom'
import { FormText, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import logo from './../eagle.svg';
import "./Signup.css";

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: 30,
    marginRight: 30,
    width: 280,
  },
  fab: {
    marginTop: 20,
  },
  typo: {
    marginTop: 20
  }
}))

const SignUp = (props) => {  
  const classes = useStyles()
  const [values, setValues] = React.useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  })

  const CREATE_USER = gql`
    mutation {
      createUser(user: {
        name: "${values.name}"
        last_name: "${values.lastName}"
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

  return (
    <div className="Signup">
      <img src={logo} className="App-logo" alt="logo" />
      <Grid container justify='center'>
        <Grid>
          <Typography className={classes.typo} variant='body2' color='textPrimary' component='p'>
            <FormLabel>Name</FormLabel>
          </Typography>
          <FormControl
            id="userName"
            label=""
            value={values.name}
            onChange={handleChange('name')}
            className={classes.textField}
            margin="normal"
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
            />
          </Grid>          
      </Grid>
      <Grid container justify='center'>
        <Mutation mutation={CREATE_USER}>
          {postMutation => <Button component={Link} to={'/'}variant='contained' aria-label='Add to favorites' className={classes.fab} onClick={postMutation}>
            Submit
          </Button>}
        </Mutation>
      </Grid>
    </div>
  )
}

export default SignUp
