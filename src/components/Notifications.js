import React from 'react'
import NavBar from './NavBar'
import Grid from '@material-ui/core/Grid'
import UserNotifications from './UserNotifications';

class Notifications extends React.Component {
  render () {
    const userId = localStorage.getItem('userID')
    return (
      <div>
        <NavBar state2="navS" id={userId} />
        <Grid container justify='center'>
          <UserNotifications id={userId}/>
        </Grid>
      </div>
    )
  }
}

export default Notifications
