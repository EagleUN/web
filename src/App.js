import React from 'react'
import NavBar from './components/NavBar'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import Notifications from './components/Notifications'
import Profile from './components/Profile'
import CreatePost from './components/CreatePost'
import AllUsers from './components/AllUsers'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

const client = new ApolloClient({
  uri: 'http://35.232.95.82:5000/graphql'
})

function App () {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <NavBar id={'6b8cc5c8-72bd-48b2-bbe6-efc536e8f90f'}/>
          <Route exact path='/home/:id' component={Home} />
          <Route exact path='/notifications/:id' component={Notifications} />
          <Route exact path='/profile/:id' component={Profile} />
          <Route exact path='/post/:id' component={CreatePost} />
          <Route exact path='/users/:id' component={AllUsers} />
        </div>
      </Router>
    </ApolloProvider>
  )
}

export default App
