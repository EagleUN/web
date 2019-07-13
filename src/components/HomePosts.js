import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Post from './Post'
import Loading from './Loading'

class HomePosts extends React.Component {
  
  render() {
    const userId = localStorage.getItem('userID')
    const token = localStorage.getItem('Authorization')
    
    return (
      <Query
      context={{
        headers: {
          Authorization: token ? `Bearer ${token}` : ""
        }
      }}
        query={gql`
          {
            homeFeedForUser(id: "${userId}"){
              content
              id
              idCreator
              createdAt
            }
          }
        `}
      >
        {({ loading, error, data }) => {
          if (loading) return <Loading />;
          if (error) return <p>Error :(</p>;
            return data.homeFeedForUser.map((object) => <Post key={object.id} userId={userId} postId={object.id} user={object.idCreator} date={object.createdAt} content={object.content}/>)
        }}
        </Query>
    )
  }
}

export default HomePosts;
