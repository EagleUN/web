import React from 'react'
import Grid from '@material-ui/core/Grid'
import UserNotifications from './UserNotifications';

class Notifications extends React.Component {
  render () {
    const userId = this.props.match.params.id
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