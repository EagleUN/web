import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Home from './Home'

class VerifyLogin extends React.Component {  
  render(){
    const userId = "6b8cc5c8-72bd-48b2-bbe6-efc536e8f90f"
    const email = this.props.match.params.email
    const pass = this.props.match.params.pass
    console.log(email)
    console.log(pass)
    return(
      <Query
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
            console.log(data.profileFeedForUser)
            return <Home id='6b8cc5c8-72bd-48b2-bbe6-efc536e8f90f'/>
        }}
      </Query>
    )
  }
}
export default VerifyLogin;