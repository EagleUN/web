import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import React from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: 30,
    marginRight: 30,
    width: 500,
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
    <div>
      <Grid container justify='center'>
        <Grid>
          <Typography className={classes.typo} variant='body2' color='textPrimary' component='p'>
            Name
          </Typography>
          <TextField
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
              Last name
            </Typography>
            <TextField
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
              Email
            </Typography>
            <TextField
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
              Password
            </Typography>
            <TextField
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
              Password Confirmation
            </Typography>
            <TextField
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
          {postMutation => <Button variant='contained' aria-label='Add to favorites' className={classes.fab} onClick={postMutation}>
            Submit
          </Button>}
        </Mutation>
      </Grid>
    </div>
  )
}

export default SignUp
