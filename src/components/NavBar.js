import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import OptionsMenu from './OptionsMenu'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  optionsButton: {
    marginLeft: 'auto'
  },
  title: {
    flexGrow: 1
  }
}))

const ButtonAppBar = (props) => {
  const classes = useStyles()
  const userId = props.id
  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <Button color='inherit' component={Link} to={`/home/${userId}`}>Home</Button>
          <Button color='inherit' component={Link} to='/notifications'>Notifications</Button>
          <Button color='inherit' component={Link} to={`/post/${userId}`}>Post</Button>
          <Button color='inherit' component={Link} to={`/users/${userId}`}>Users</Button>
          <div className={classes.optionsButton}>
            <OptionsMenu id={userId}/>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default ButtonAppBar
