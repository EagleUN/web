import React from 'react'
import Grid from '@material-ui/core/Grid'
import HomePosts from './HomePosts'
import NavBar from './NavBar'

const Home = (props) => {  
  const userId = props.id || props.match.params.id
  return (
    <div>
      <NavBar id={userId}/>
      <Grid container justify='center'>
        <HomePosts id={userId}/>
      </Grid>
    </div>
  )
}

export default Home
