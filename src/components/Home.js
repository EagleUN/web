import React from 'react'
import Grid from '@material-ui/core/Grid'
import HomePosts from './HomePosts'

const Home = (props) => {  
  const userId = props.match.params.id
  return (
    <div>
      <Grid container justify='center'>
        <HomePosts id={userId}/>
      </Grid>
    </div>
  )
}

export default Home
