import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Post from './Post'
import { messaging } from "../init-fcm";

class HomePosts extends React.Component {
  async componentDidMount() {
    messaging.requestPermission()
      .then(async function() {
      const token = await messaging.getToken();
      console.log(`Token is ${token}`);
    })
     .catch(function(err) {
    console.log("Unable to get permission to notify.", err);
    });
    navigator.serviceWorker.addEventListener("message", (message) => console.log(message));
  }
  
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
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;
            return data.homeFeedForUser.map((object) => <Post key={object.id} userId={userId} postId={object.id} user={object.idCreator} date={object.createdAt} content={object.content}/>)
        }}
        </Query>
    )
  }
}
export default HomePosts;