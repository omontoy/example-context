import { Component } from 'react'
import { AuthContext } from '../store/AuthContext'

function Navbar() {

  // static contextType = AuthContext

    // console.log(this.context)
    return (
      <nav>
        {
        <AuthContext.Consumer>
          {({currentUser}) => {
            return (
              <p>{currentUser}</p>
            )
          }}
        </AuthContext.Consumer>
      }
      {/*<p>{this.context.currentUser}</p>*/}
      </nav>
    )
  
}

export default Navbar