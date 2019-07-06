import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  item: {
    color: "black",
    '&:hover': {
      color: "orange"
    }
  }
}))

const SimpleMenu = (props) => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)

  function handleClick (event) {
    setAnchorEl(event.currentTarget)
  }

  function handleClose () {
    setAnchorEl(null)
  }

  function closeSession(){
    setAnchorEl(null)
    localStorage.clear()
    window.location.href="/";
  }
  return (
    <div>
      <IconButton color='inherit' aria-label='Menu' aria-owns={anchorEl ? 'simple-menu' : undefined}
        aria-haspopup='true'
        onClick={handleClick}>
        <MenuIcon />
      </IconButton>
      <Menu id='simple-menu' anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem className={classes.item} onClick={handleClose} component={Link} to={`/profile`}>Profile</MenuItem>
        <MenuItem className={classes.item} component={Link} to={'/'} onClick={closeSession}>Logout</MenuItem>
      </Menu>
    </div>
  )
}

export default SimpleMenu
