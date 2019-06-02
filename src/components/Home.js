import React from 'react'
import Grid from '@material-ui/core/Grid'
import StyledPost from './Post'

class Home extends React.Component {
  render () {
    return (
      <div>
        <Grid container justify='center'>
          <StyledPost />
        </Grid>
      </div>
    )
  }
}

export default Home
