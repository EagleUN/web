import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardActions from '@material-ui/core/CardActions'
import Avatar from '@material-ui/core/Avatar'
import { makeStyles } from '@material-ui/core/styles'
import red from '@material-ui/core/colors/red'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import swal from '@sweetalert/with-react';

const useStyles = makeStyles(theme => ({
  avatar: {
    backgroundColor: red[500]
  },
  fab: {
    margin: 10
  }
}))

const UserCard = (props) => {   
  const classes = useStyles()
  const user = props.user
  const userId = props.userId
  const disabled = props.isFollowed
  const otherUser = props.otherUserId
  const token = localStorage.getItem('Authorization');

  const CREATE_FOLLOW = gql`
    mutation {
      createFollow(followerId: "${userId}", followingId: "${otherUser}"){
        followerId
      }
    }
  `;

  
  const DELETE_FOLLOW = gql`
    mutation {
      deleteFollow(followerId: "${userId}", followingId: "${otherUser}") {
        followerId
      }
    }
  `;

  return (
    <Grid container justify='center'>
      <Card className='userStyle'>
        <CardHeader
          avatar={
            <Avatar className={classes.avatar} aria-label='Recipe'>
              {user[0]}
            </Avatar>
          }
          title={user}
        />
        

        <CardActions disableSpacing>
          <Grid container justify='center'>
            <Mutation mutation={CREATE_FOLLOW}
              context={{
                headers: {
                  Authorization: token ? `Bearer ${token}` : ""
                }
              }}
              onCompleted={
                (data,errors) => {
                  if(data!==null){
                    swal({
                      title: "Following!",
                      text: `You are now following ${user}!`,
                      icon: "success",
                      button: "Ok!",
                    })
                    .then((value)=>{
                      window.location.reload()
                    });
                  }
                }
              }>
                {postMutation => <Button disabled={disabled} variant='contained' className={classes.fab} onClick={postMutation}>
                  Follow
              </Button>}
            </Mutation>
            <Mutation mutation={DELETE_FOLLOW}
              context={{
                headers: {
                  Authorization: token ? `Bearer ${token}` : ""
                }
              }}
              onCompleted={
                (data,errors) => {
                  if(data!==null){
                    swal({
                      title: "Unfollow success!",
                      text: `You are not now following ${user}!`,
                      icon: "success",
                      button: "Ok!",
                    })
                    .then((value)=>{
                      window.location.reload()
                    });
                  }
                }
              }>
                {postMutation => <Button disabled={!disabled} variant='contained' className={classes.fab} onClick={postMutation}>
                  Unfollow
              </Button>}
            </Mutation>
            <Button variant='contained' component={Link} to={`/profile/${otherUser}`} className={classes.fab}>
              Profile
            </Button>
          </Grid>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default UserCard
