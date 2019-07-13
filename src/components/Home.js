import React from 'react'
import Grid from '@material-ui/core/Grid'
import HomePosts from './HomePosts'
import NavBar from './NavBar'
import Loading from './Loading'

const Home = (props) => {
	const userId = localStorage.getItem('userID')

	function redireccionar(){
	  	window.location.href="/";
	}

	if (userId!==null) {
		return (
		    <div>
		      <NavBar state1="navS" id={userId}/>
		      <Grid container justify='center'>
		      	<HomePosts id={userId}/>
		      </Grid>
		    </div>
	  	)
	}else{
	setTimeout (redireccionar, 5000);
		return(
			<div>
				<Loading />
			</div>
		)
	}
}

export default Home
