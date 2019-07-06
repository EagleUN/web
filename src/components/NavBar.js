import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import OptionsMenu from './OptionsMenu'
import { Link } from 'react-router-dom'
import logo from './../eagle.svg'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  optionsButton: {
    marginLeft: 'auto',
    color: "white",
    '&:hover': {
      color: "orange"
    }
  },
  title: {
    flexGrow: 1
  },
  butns: {
    color: "white",
    '&:hover': {
      color: "orange"
    }
  }
}))

const ButtonAppBar = (props) => {
  const classes = useStyles()
  const userId = props.id
  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <div className={classes.botns}>
            <img src={logo} className="App-logo-nav" alt="logo" />
            <Button className={classes.butns} color='inherit' component={Link} to={`/home`}>Home</Button>
            <Button className={classes.butns} color='inherit' component={Link} to={`/notifications`}>Notifications</Button>
            <Button className={classes.butns} color='inherit' component={Link} to={`/post`}>New post</Button>
            <Button className={classes.butns} color='inherit' component={Link} to={`/users`}>Users</Button>
          </div>
          <div className={classes.optionsButton}>
            <OptionsMenu id={userId}/>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default ButtonAppBar
