import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { Link } from 'react-router-dom'

function SimpleMenu () {
  const [anchorEl, setAnchorEl] = React.useState(null)

  function handleClick (event) {
    setAnchorEl(event.currentTarget)
  }

  function handleClose () {
    setAnchorEl(null)
  }

  return (
    <div>
      <IconButton color='inherit' aria-label='Menu' aria-owns={anchorEl ? 'simple-menu' : undefined}
        aria-haspopup='true'
        onClick={handleClick}>
        <MenuIcon />
      </IconButton>
      <Menu id='simple-menu' anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={handleClose} component={Link} to='/profile'>Profile</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  )
}

export default SimpleMenu
