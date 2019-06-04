import React from 'react'
import Grid from '@material-ui/core/Grid'
import SearchUsers from './SearchUsers'
import NavBar from './NavBar'

const AllUsers = (props) => {
  const userId = props.match.params.id
  return (
    <div>
      <NavBar id={userId}/>
      <Grid container justify='center'>
        <SearchUsers id={userId} />
      </Grid>
    </div>
  )
}

export default AllUsers