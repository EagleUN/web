import React from 'react'
import Grid from '@material-ui/core/Grid'
import ProfilePosts from './ProfilePosts'

class Profile extends React.Component {
  render () {
    const userId = this.props.match.params.id 
    return (
      <div>
        <Grid container justify='center'>
          <ProfilePosts id={userId} />
        </Grid>
      </div>
    )
  }
}

export default Profile
