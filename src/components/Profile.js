import React from 'react'
import Grid from '@material-ui/core/Grid'
import ProfilePosts from './ProfilePosts'
import UserInfo from './UserInfo'

class Profile extends React.Component {
  render () {
    const userId = this.props.match.params.id
    const user='Juand'
    const email='juand@juand'
    const followers = 23
    const following = 50
    return (
      <div>
        <Grid container justify='center'>
          <UserInfo user={user} email={email} followers={followers} following={following}/>
        </Grid>
        <Grid container justify='center'>
          <ProfilePosts id={userId} />
        </Grid>
      </div>
    )
  }
}

export default Profile
