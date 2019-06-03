import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import red from '@material-ui/core/colors/red'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  card: {
    width: 700,
    margin: 20
  },
  avatar: {
    backgroundColor: red[500]
  }
}))

const ProfilePost = (props) => {  
  const classes = useStyles()
  const user = props.user
  const date = props.date
  const content = props.content
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
          {content}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default ProfilePost
