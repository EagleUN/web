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

function ButtonAppBar () {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <Button color='inherit' component={Link} to='/60682681-24ac-4425-86d7-0d1604813dbf'>Home</Button>
          <Button color='inherit' component={Link} to='/notifications'>Notifications</Button>
          <div className={classes.optionsButton}>
            <OptionsMenu />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default ButtonAppBar
