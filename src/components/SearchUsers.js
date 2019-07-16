import React from 'react'
import UserCard from './UserCard'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Loading from './Loading'

const SearchUsers = (props) => {
  const userId = props.id
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
            userList(userId: "${userId}") {
              otherUsers{
                name
                lastName
                uuid
                followsMe
                iFollow
              }
            }
          }
        `}
      >
      {({ loading, error, data }) => {
        if (loading) return <Loading />;
        if (error) return <p>Error :(</p>;
          return data.userList.otherUsers.map((object) => <UserCard key={object.uuid} otherUserId={object.uuid} userId={userId} isFollowed={object.iFollow} user={object.name+" "+object.lastName} />)
      }}
    </Query>
  )
}

export default SearchUsers
