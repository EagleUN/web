import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Post from './Post'
import Noti from './Noti'

class UserNotifications extends React.Component {
  render() {
    const userId = this.props.id
    console.log(userId)
    return (
      <Query
        query={gql`
        {
            NotificationByUser(user: "${userId}"){
              notificated_user
              follower
              date
              type
              post_id
            }
          }
        `}
      >
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;
            console.log(data)
            return data.NotificationByUser.map((object) => <Post user={object.follower} date={object.date} content={object.type}/>)
        }}
        </Query>
    )
  }
}
export default UserNotifications;