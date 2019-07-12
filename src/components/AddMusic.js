import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import CreatePost from './CreatePost';
import Loading from './Loading'

const AddMusic = (props) => {
  const userId = props.location.id  
  return (
    <Query
        query={gql`
         {
            getMusicList(id: "${userId}"){        
              url
              name
            }
          }
        `}
      >
      {({ loading, error, data }) => {
        if (loading) return <Loading />;
        if (error) return <CreatePost id={userId} contenido="You have not created any music list :("></CreatePost>;            
        return <CreatePost id={userId} contenido={`The last list that I created is called ${data.getMusicList.name} you can see its photo here ${data.getMusicList.url}`}></CreatePost>        
      }}
    </Query>
  )
}

export default AddMusic
