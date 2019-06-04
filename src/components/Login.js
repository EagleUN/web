import React from 'react'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import { Button } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: 30,
    marginRight: 30,
    width: 200,
  },
  fab: {
    marginTop: 20,
    marginLeft: 20
  },
  typo: {
    marginTop: 20
  }
}))

const Login = (props) => {  
  const classes = useStyles()
  const [values, setValues] = React.useState({
    email: "",
    password: "",
  })

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
  
  return (
    <div>
      <Grid container justify='center'>
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
        <Grid container justify='center'>
          <Button component={Link} to={`/verifyLogin/${values.email}/${values.password}`} variant='contained' aria-label='Add to favorites' className={classes.fab} >
              Submit
          </Button>
          <Button component={Link} to={'/signup'} variant='contained' aria-label='Add to favorites' className={classes.fab} >
              Sign Up
          </Button>
        </Grid>
      </Grid>  
    </div>
  )
}

export default Login
