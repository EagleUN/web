import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
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
              follower_name
              content
            }
          }
        `}
      >
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;
            console.log(data)
            return data.NotificationByUser.map((object) => <Noti user={object.follower_name} date={object.date} type={object.type} post={object.content}/>)
        }}
        </Query>
    )
  }
}
export default UserNotifications;