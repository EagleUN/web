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
  card: {
    width: 700,
    margin: 20
  },
  avatar: {
    backgroundColor: red[500]
  }
}))

const Noti = (props) => {   
  const classes = useStyles()
  const user = props.user
  const date = props.date
  const type = props.type
  const post_id = props.post

  return (
    <Card className={classes.card}>
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
          {type == 'follow' ? "Te ha seguio ": "Te ha compartio el post # " + post_id}
        </Typography>
      </CardContent>

    </Card>
  )
}

export default Noti
