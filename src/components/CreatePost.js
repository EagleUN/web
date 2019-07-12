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
import swal from '@sweetalert/with-react';
import Button from '@material-ui/core/Button'

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
      return  <Button variant='contained' aria-label='Add to favorites' className={classes.fab} component={Link} to={{pathname: `/addMusicLists`, id: idCreator}}>Get Music List</Button>
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
            required
          />
      </Grid>
      <Grid container justify='center'>
        <Mutation mutation={CREATE_POST} 
          context={{
            headers: {
              Authorization: token ? `Bearer ${token}` : ""
            }
          }}
          onError={
            (errors)=>{
              if(errors){
                return <div alert={swal("Wrong creation post!", "The post can not be empty", "error")} />
              }
            }
          }
          onCompleted={
            (data,errors) => {
              if(data!==null){
                swal({
                  title: "Posted!",
                  text: "Your post has been created!",
                  icon: "success",
                  button: "Ok!",
                })
                .then((value)=>{
                  window.location.assign('/home')
                });
              }
            }
          }>
          {postMutation => <Fab className={classes.fab} onClick={postMutation}>
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
