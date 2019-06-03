import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import red from '@material-ui/core/colors/red'
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

class ProfilePost extends React.Component {  
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
      </Card>
    )
  }
}

ProfilePost.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ProfilePost)
