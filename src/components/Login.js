import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import { Button } from '@material-ui/core'
import { FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "./Login.css";
import logo from './../eagle.svg'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: 30,
    marginRight: 30,
    width: 280,
  },
  fab: {
    marginTop: 20,
    marginLeft: 20
  },
  typo: {
    marginTop: 20
  }
}));

const Login = (props) => {  
  const classes = useStyles()
  const [values, setValues] = React.useState({
    email: "",
    password: "",
  })

  const CREATE_TOKEN_SESSION = gql`
    mutation {
      createNewUserSession(user: {
        email: "${values.email}",
        password: "${values.password}"
      }) 
      {
        jwt
        id
      }
    }
  `;

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
  
  return (
    <div className="Login">
      <img src={logo} className="App-logo" alt="logo" />
      <Grid container justify='center'>
          <form>  
            <Grid>
              <FormGroup size="large">
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
                  autoFocus="autofocus"
                />
              </FormGroup>
            </Grid>
            <Grid>
              <FormGroup size="large">
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
                  margin="normal"/>
              </FormGroup>
            </Grid>
          <Grid className="Botns" container>
            <Mutation mutation={CREATE_TOKEN_SESSION}
            onCompleted={
              (data,errors) => {
                if(data!==null){
                  if(data.createNewUserSession.jwt !== "0"){
                    localStorage.setItem("Authorization", data.createNewUserSession.jwt)
                    localStorage.setItem("userID", data.createNewUserSession.id)
                    window.location.reload()
                  }
                } else {
                  if(data.createNewUserSession.errors.message === "0"){
                  }
                }
                if(errors[0].message===0){
                  alert("error en inicio de sesion")
                }
              }
            }
            >
              {postMutation => <Button component={Link} to={'/home'} variant='contained' aria-label='Add to favorites' className={classes.fab} onClick={postMutation}>
                Submit
              </Button>}
            </Mutation>
            <Button component={Link} to={'/signup'} variant='contained' aria-label='Add to favorites' className={classes.fab} >
                Sign Up
            </Button>
          </Grid>
        </form>
      </Grid>  
    </div>
  )
}
export default Login