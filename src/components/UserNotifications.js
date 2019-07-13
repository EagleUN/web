import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Noti from './Noti'
import Loading from './Loading'

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
              follower_name
              content
            }
          }
        `}
      >
        {({ loading, error, data }) => {
          if (loading) return <Loading />;
          if (error) return <p>Error :(</p>;
            return data.NotificationByUser.map((object) => <Noti user={object.follower_name} date={object.date} type={object.type} post={object.content}/>)
        }}
        </Query>
    )
  }
}
export default UserNotifications;