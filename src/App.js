import { AuthProvider } from './store/AuthContext'
import Navbar from './components/Navbar'
import Button from './components/Button'
import Title from './components/Title'
import './App.css';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Navbar />
        <Button />
        <Title />
      </AuthProvider>
    </div>
  );
}

export default App;
