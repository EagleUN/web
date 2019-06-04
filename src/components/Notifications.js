import React from 'react'
import Grid from '@material-ui/core/Grid'
import UserNotifications from './UserNotifications';

class Notifications extends React.Component {
  render () {
    const userId = "6b8cc5c8-72bd-48b2-bbe6-efc536e8f90f"
    return (
      <div>
        <Grid container justify='center'>
          <UserNotifications id={userId}/>
        </Grid>
      </div>
    )
  }
}

export default Notifications