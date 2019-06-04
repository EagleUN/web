import React from 'react'
import NavBar from './NavBar'

class Notifications extends React.Component {    
  render (){
    const id = this.props.match.params.id 
    return(
      <div>
        <NavBar id={id} />
        Notifications
      </div>
    )
  }
}

export default Notifications
