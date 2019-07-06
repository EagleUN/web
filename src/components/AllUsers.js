import React from 'react'
import Grid from '@material-ui/core/Grid'
import SearchUsers from './SearchUsers'
import NavBar from './NavBar'

const AllUsers = (props) => {
  	const userId = localStorage.getItem('userID');

  	function redireccionar(){
	  	window.location.href="/";
	} 

	if (userId!==null) {
		return (
		    <div>
		      <NavBar id={userId}/>
		      <Grid container justify='center'>
		        <SearchUsers id={userId} />
		      </Grid>
		    </div>
		)
	}else{
	setTimeout (redireccionar, 5000);
		return(
			<div>
				loading...
			</div>
		)
	}
}

export default AllUsers