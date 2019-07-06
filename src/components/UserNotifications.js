import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Noti from './Noti'

class UserNotifications extends React.Component {
  render() {
    const userId = localStorage.getItem('userID')
    const token = localStorage.getItem('Authorization');
    return (
      <Query
        context={{
          headers: {
            Authorization: token ? `Bearer ${token}` : ""
          }
        }}
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
            return data.NotificationByUser.map((object) => <Noti user={object.follower} date={object.date} type={object.type} post={object.post_id}/>)
        }}
        </Query>
    )
  }
}
export default UserNotifications;