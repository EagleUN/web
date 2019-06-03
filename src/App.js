import React from 'react'
import NavBar from './components/NavBar'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import Notifications from './components/Notifications'
import Profile from './components/Profile'
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
          <Route exact path='/notifications' component={Notifications} />
          <Route exact path='/profile/:id' component={Profile} />
        </div>
      </Router>
    </ApolloProvider>
  )
}

export default App
