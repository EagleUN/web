import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import Notifications from './components/Notifications'
import Profile from './components/Profile'
import CreatePost from './components/CreatePost'
import AllUsers from './components/AllUsers'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import Login from './components/Login'
import SignUp from './components/SignUp'
import VerifyLogin from './components/VerifyLogin'

const client = new ApolloClient({
  uri: 'http://35.232.95.82:5000/graphql'
})

function App () {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>          
          <Route exact path='/' component={Login} />
          <Route exact path='/verifyLogin/:email/:password' component={VerifyLogin} />
          <Route exact path='/signup/' component={SignUp} />
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
