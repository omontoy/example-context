
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
              <div>
                <p>{currentUser}</p>
                <p>{process.env.REACT_APP_NAME}</p>
                <p>Párrafo solamente en dev</p>
              </div>
            )
          }}
        </AuthContext.Consumer>
      }
      {/*<p>{this.context.currentUser}</p>*/}
      </nav>
    )
  
}

export default Navbar