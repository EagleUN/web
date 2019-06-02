import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import red from '@material-ui/core/colors/red'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  avatar: {
    backgroundColor: red[500]
  },
  card: {
    maxWidth: 700,
    margin: 20
  }
})

export default function Post () {  
  const classes = useStyles()
  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar className={classes.avatar} aria-label='Recipe'>
            R
          </Avatar>
        }
        title='Shrimp and Chorizo Paella'
        subheader='September 14, 2016'
      />
      <CardContent>
        <Typography variant='body2' color='textSecondary' component='p'>
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label='Add to favorites'>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label='Share'>
          <ShareIcon />
        </IconButton>
      </CardActions>

    </Card>
  )
}
