import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import React from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom'
import NavBar from './NavBar'
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: 30,
    marginRight: 30,
    width: 500,
  },
  fab: {
    marginTop: 20,
  },
  typo: {
    marginTop: 20
  }
}))

const CreatePost = (props) => {  
  const classes = useStyles()
  const [content, setContent] = React.useState({content: ""})
  const idCreator = localStorage.getItem('userID');
  const token = localStorage.getItem('Authorization');
  const contenido = (props.contenido ? props.contenido : "")

  const handleChange = name => event => {
    setContent({[name]: event.target.value})
  }
  const CREATE_POST = gql`
    mutation {
      createPost(post: {
        idCreator: "${idCreator}"
        content: "${content.content}"
      }) {
        id
      }
    }
  `;
  
  const getElementToRender = () => {
    if(contenido !== ""){
      return  <Typography className={classes.typo} variant='body2' color='textSecondary' component='p'>{contenido}</Typography>      
    } else{
      return  <Link to={{
          pathname: `/addMusicLists`,
          id: idCreator
        }}>Get Music List</Link>
    }
  }

  return (
    <div>
      <NavBar id={idCreator}/>
      <Grid container justify='center'>
        <TextField
            id="userInputMultiline"
            label="Write your post"
            multiline
            rowsMax="4"
            value={content.content}                     
            onChange={handleChange('content')}
            className={classes.textField}
            margin="normal"
          />
      </Grid>
      <Grid container justify='center'>
        <Mutation mutation={CREATE_POST} 
          context={{
            headers: {
              Authorization: token ? `Bearer ${token}` : ""
            }
          }} 
          onCompleted={
            (data,errors) => {
              if(data!==null){
                window.location.reload()
              }
            }
          }>
          {postMutation => <Fab component={Link} to={`/home`} className={classes.fab} onClick={postMutation}>
            <AddIcon /> 
          </Fab>}
        </Mutation>        
      </Grid>
      <Grid container justify='center'>
        {getElementToRender()}
      </Grid>
    </div>
  )
}

export default CreatePost
