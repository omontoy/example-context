import { Component } from 'react'
import { AuthContext } from '../store/AuthContext'

// function Title() {
//   const auth = useContext(AuthContext)

//   return (
//     <h2>{auth.title}</h2>
//   )
// }

class Title extends Component {
  static contextType = AuthContext

  render() {
    return (
        <AuthContext.Consumer>
          {({title}) => {
            return (
              <h2>{this.context.title}</h2>
            )
          }}
        </AuthContext.Consumer> 
    )
  }
}

export default Title