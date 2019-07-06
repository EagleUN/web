import React from 'react'
import { Query, Mutation, graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Post from './Post'
import { messaging } from "../init-fcm";
import axios from 'axios';
import { print } from 'graphql';

const ADD_TOKEN = gql`
mutation($userId: String!, $token: String!) {
  addToken(token:{user_id: $userId, token: $token}) {
    user_id
    tokens
  }
}`;

class HomePosts extends React.Component {
  async componentDidMount() {
    console.log("on componnentDidMount()");
    messaging.requestPermission()
      .then(async function() {
        const token = await messaging.getToken();
        console.log(`Token is ${token}`);
        const userId = localStorage.getItem('userID');
  

        console.log(ADD_TOKEN);

        axios
        .post("http://35.232.95.82/graphql", {
          query: print(ADD_TOKEN),
          variables: {
            userId: userId,
            token: token,
          },
        })
        .then(res => console.log(res))
        .catch(err => console.log(err));
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
