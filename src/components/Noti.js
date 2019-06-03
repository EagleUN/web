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
import { withStyles } from '@material-ui/styles'
import PropTypes from 'prop-types'

const styles = theme => ({
  card: {
    width: 700,
    margin: 20
  },
  avatar: {
    backgroundColor: red[500]
  }
})

class Noti extends React.Component {  
  render () {  
    const { classes } = this.props  
    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar className={classes.avatar} aria-label='Recipe'>
              {this.props.user[0]}
            </Avatar>
          }
          title={this.props.user}
          subheader={this.props.date}
        />
        <CardContent>
          <Typography variant='body2' color='textSecondary' component='p'>
            {this.props.content}
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
}

Noti.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Noti)
