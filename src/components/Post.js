import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import red from '@material-ui/core/colors/red'
import FavoriteIcon from '@material-ui/icons/Favorite'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  avatar: {
    backgroundColor: red[500]
  }
}))

const Post = (props) => {   
  const classes = useStyles()
  const user = props.user
  const date = props.date
  const content = props.content
  const postId = props.postId
  const userId = props.userId
  const token = localStorage.getItem('Authorization');


  const SHARE_POST = gql`
    mutation {
      createShare(share: {
        userId: "${userId}"
        postId: "${postId}"
      }){
        userId
      }
    }
  `;

  return (
    <Card className="postStyle">
      <CardHeader
        avatar={
          <Avatar className={classes.avatar} aria-label='Recipe'>
            {user[0]}
          </Avatar>
        }
        title={user}
        subheader={date}
      />
      <CardContent>
        <Typography variant='body2' color='textSecondary' component='p'>
          {content}
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
      <Mutation mutation={SHARE_POST}
        context={{
          headers: {
            Authorization: token ? `Bearer ${token}` : ""
          }
        }}>
          {postMutation => <IconButton component={Link} to={`/home`} aria-label='Add to favorites' className={classes.fab} onClick={postMutation}>
            <FavoriteIcon />
          </IconButton>}
        </Mutation>
      </CardActions>
    </Card>
  )
}

export default Post
