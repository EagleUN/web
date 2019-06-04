import React from 'react'
import Grid from '@material-ui/core/Grid'
import SearchUsers from './SearchUsers'

const AllUsers = (props) => {
  const userId = props.match.params.id
  return (
    <div>
      <Grid container justify='center'>
        <SearchUsers id={userId} />
      </Grid>
    </div>
  )
}

export default AllUsers