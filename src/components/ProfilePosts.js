import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import ProfilePost from './ProfilePost';

class ProfilePosts extends React.Component {  
  render(){
    const userId = localStorage.getItem('userID')
    const token = localStorage.getItem('Authorization');
    return(
      <Query 
        context={{
          headers: {
            Authorization: token ? `Bearer ${token}` : ""
          }
        }}
        query={gql`
        {
            profileFeedForUser(id: "${userId}"){
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
            return data.profileFeedForUser.map((object) => <ProfilePost key={object.id} user={object.idCreator} date={object.createdAt} content={object.content}/>)
        }}
      </Query>
    )
  }
}
export default ProfilePosts;