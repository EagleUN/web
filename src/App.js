import React from 'react'
import NavBar from './components/NavBar'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import Notifications from './components/Notifications'
import Profile from './components/Profile'

function App () {
  return (
    <Router>
      <div>
        <NavBar />
        <Route exact path='/' component={Home} />
        <Route exact path='/notifications' component={Notifications} />
        <Route exact path='/profile' component={Profile} />
      </div>
    </Router>
  )
}

export default App
