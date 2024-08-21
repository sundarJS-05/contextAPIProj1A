import './App.css'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'
import Login from "./components/Login"

function App() {


  return (
    <UserContextProvider>
    <h5> Context API Project </h5>

    <br/>

    <Login/>

    <br/>

    <Profile/>

    <br/>

    </UserContextProvider>
  )
}

export default App
