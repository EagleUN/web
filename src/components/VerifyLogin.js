import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Home from './Home'
import Login from './Login'

class VerifyLogin extends React.Component {  
  render(){
    const email = this.props.match.params.email
    const pass = this.props.match.params.pass
    console.log(email)
    console.log(pass)
    return(
      <Query
        query={gql`
        {
            UserSess(user:{
              email: "${email}"
              password: "${pass}"
            }){
              id
              session
            }
          }
        `}
      >
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>
          if (error) return <Login />
            if(data.UserSess.session) {
              return <Home id={data.UserSess.id}/>
            }
            return <Login />
        }}
      </Query>
    )
  }
}
export default VerifyLogin;