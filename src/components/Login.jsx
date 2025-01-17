import React, {useState, useContext} from 'react'
import UserContext from '../context/userContext'

function Login() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const {setUser} = useContext(UserContext)

    const handleSubmit =  ( event)=>{
        event.preventDefault()
        setUser( {username, password} )

    }


  return (
    <div>
        <h3>Login Window </h3>

        <input type='text' 
        value={username}   
        onChange={ (event)=>  setUsername(event.target.value)}
        placeholder='username' />

        <input type='text' 
        value={password}   
        onChange={ (event)=>  setPassword(event.target.value)}
        placeholder='password' />

        <button onClick={handleSubmit} >
            Login now!
        </button>


        </div>
  )
}

export default Login