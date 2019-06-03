import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import React from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: 30,
    marginRight: 30,
    width: 500,
  },
  fab: {
    marginTop: 20,
  }
}))

const CreatePost = (props) => {  
  const classes = useStyles()
  const [content, setContent] = React.useState({content: ""})
  const idCreator = props.match.params.id

  const handleChange = name => event => {
    setContent({[name]: event.target.value})
  }
  const CREATE_POST = gql`
    mutation {
      createPost(post: {
        idCreator: "${idCreator}"
        content: "${content.multiline}"
      }) {
        id
      }
    }
  `;
  return (
    <div>
      <Grid container justify='center'>
        <TextField
            id="userInputMultiline"
            label="Write your post"
            multiline
            rowsMax="4"
            value={content.multiline}
            onChange={handleChange('multiline')}
            className={classes.textField}
            margin="normal"
          />
      </Grid>
      <Grid container justify='center'>
        <Mutation mutation={CREATE_POST}>
          {postMutation => <Fab component={Link} to={`/home/${idCreator}`} className={classes.fab} onClick={postMutation}>
            <AddIcon /> 
          </Fab>}
        </Mutation>
      </Grid>
    </div>
  )
}

export default CreatePost
