import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import UserInfo from './UserInfo'

const UserInfoQueries = (props) => {  
  const userId = props.id
  const userQuery = gql`
    {
      userById(id: {id: "${userId}"}){
        id
        name
        last_name
        email
      }
    }
  `

  const followersQuery = gql`
    {
      followers(userId: "${userId}"){
        count
      }
    }
  `

  const followingQuery= gql`
    {
      following(userId: "${userId}"){
        count
      }
    }
  `

  return (
    <Query query={userQuery}>
      {({ loading: loadingOne, data: { userById  } }) => (
        <Query query={followersQuery}>
          {({ loading: loadingTwo, data: { followers  } }) => (
            <Query query={followingQuery}>
              {({ loading: loadingThree, data: { following }}) => {
                if (loadingOne || loadingTwo || loadingThree) return <span>Loading...</span>
                return <UserInfo user={userById.name+ " "+userById.last_name} 
                                email={userById.email} followers={followers.count}
                                following={following.count} />
              }}
            </Query>
          )}
        </Query>
      )}
    </Query>
  )  
}
export default UserInfoQueries;