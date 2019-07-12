import React from 'react'
import Grid from '@material-ui/core/Grid'
import ProfilePosts from './ProfilePosts'
import UserInfoQueries from './UserInfoQueries'
import NavBar from './NavBar'

class Profile extends React.Component {
  render () {
    var userId=0
    if(this.props.match.params.id){
      userId = this.props.match.params.id
    }else{
      userId = localStorage.getItem('userID')
    }

    return (
      <div>
        <NavBar id={userId}/>
        <Grid container justify='center'>
          <UserInfoQueries id={userId}/>
        </Grid>
        <Grid container justify='center'>
          <ProfilePosts id={userId} />
        </Grid>
      </div>
    )
  }
}

export default Profile
