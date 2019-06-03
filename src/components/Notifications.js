import React from 'react'
import Grid from '@material-ui/core/Grid'
import UserNotifications from './UserNotifications';

class Notifications extends React.Component {
  render () {
    const userId = "77bd2e0f-50fe-4c58-9800-1db11035ef64"
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