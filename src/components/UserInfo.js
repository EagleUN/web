import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import red from '@material-ui/core/colors/red'
import { withStyles } from '@material-ui/styles'
import PropTypes from 'prop-types'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import CardContent from '@material-ui/core/CardContent'

const styles = theme => ({
  card: {
    width: 400,
    margin: 20
  },
  avatar: {
    backgroundColor: red[500]
  }
})

class UserInfo extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <Card className={classes.card}>
        <CardHeader
          avatar = {
            <Avatar className={classes.avatar} aria-label='Recipe'>
              {this.props.user[0]}
            </Avatar>
          }
          title={this.props.user}
          subheader={this.props.email}
        />
        <CardContent>
          <Typography variant='body2' color='textSecondary' component='p'>
            Followers: {this.props.followers}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            Following: {this.props.following}
          </Typography>
        </CardContent>
      </Card>
    )
  }
}

UserInfo.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(UserInfo)