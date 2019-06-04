import React from 'react'
import UserCard from './UserCard'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const SearchUsers = (props) => {
  const userId = props.id
  return (
    <Query
        query={gql`
        {
            userList(userId: "6b8cc5c8-72bd-48b2-bbe6-efc536e8f90f") {
              otherUsers{
                name
                lastName
                id
                followsMe
                iFollow
              }
            }
          }
        `}
      >
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;
          return data.userList.otherUsers.map((object) => <UserCard key={object.id} otherUserId={object.id} userId={userId} isFollowed={object.iFollow} user={object.name+" "+object.lastName} />)
      }}
    </Query>
  )
}

export default SearchUsers
