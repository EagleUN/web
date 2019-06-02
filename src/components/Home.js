import React from 'react'
import Grid from '@material-ui/core/Grid'
import Post from './Post'

class Home extends React.Component {
  render () {  
    const user = 'Juan Diego Moreno'
    const date = '01/06/2019'
    const content = 'Some nice content'
    return (
      <div>
        <Grid container justify='center'>
          <Post user={user} date={date} content={content}/>
        </Grid>
      </div>
    )
  }
}

export default Home
