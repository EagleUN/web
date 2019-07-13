import React from 'react'
import gql from 'graphql-tag'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { Mutation } from 'react-apollo'
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom'
import { FormControl, FormLabel } from "react-bootstrap";
import logo from './../eagle.svg'
import Loading from './Loading'
import swal from '@sweetalert/with-react';
import "./Login.css";

const useStyles = makeStyles(theme => ({
  fab: {
    marginTop: 20,
    marginLeft: 20
  },
  typo: {
    marginTop: 20
  }
}));


const Login = (props) => {

  document.body.style = 'background: -webkit-linear-gradient(to left, #F53134, #FFFC52);  /* Chrome 10-25, Safari 5.1-6 */';
  document.body.style = 'background: #fc4a1a;';
  document.body.style = 'background: linear-gradient(to left, rgba(245,49,52,1), rgba(255,252,82,1));';

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
  
  const token = localStorage.getItem('Authorization')

  function redireccionar(){
    window.location.href="/home";
  }

  if (token==null) {
    return (
      <div className="Login"
        onKeyPress={event => {
          if (event.key === "Enter") {
            document.getElementById("loginBtn").click();
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
              <FormLabel>Email</FormLabel>
            </Typography>
            <FormControl
              id="userEmail"
              label=""
              value={values.email}
              onChange={handleChange('email')}
              className={classes.textField}
              margin="normal"
              placeholder="Enter email"
              autoFocus="autofocus"
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
              placeholder="Password"
            />
          </Grid>
        </Grid>
        <Grid container justify='center'>
          <Mutation mutation={CREATE_TOKEN_SESSION}
            onError={
              (errors)=>{
                if(errors){
                  return <div alert={swal("Wrong login!", "Bad credentials", "error")} />
                }
              }
            }
            onCompleted={
              (data) => {
                if(data!==null){
                  if(data.createNewUserSession.jwt !== "0"){
                    localStorage.setItem("Authorization", data.createNewUserSession.jwt)
                    localStorage.setItem("userID", data.createNewUserSession.id)
                    window.location.assign("/home")
                    window.location.reload()
                  }
                }
              }
            }
          >
            {postMutation => <Button id="loginBtn" variant='contained' aria-label='Add to favorites' className={classes.fab} onClick={postMutation}>
              Login
            </Button>}
          </Mutation>
          <Button id="loginBtn2" component={Link} to={'/signup'} variant='contained' aria-label='Add to favorites' className={classes.fab} >
            Sign Up
          </Button>
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
export default Login