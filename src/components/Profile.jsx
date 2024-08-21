import React, {useContext} from 'react'
import UserContext from '../context/userContext'

function Profile() {

    const {user} = useContext(UserContext)

    if(!user) return( 
            <div> 1st Login as a user!</div>
        )

        return  (
        <div> Profile of {user.username} </div>
        )
    }

export default Profile