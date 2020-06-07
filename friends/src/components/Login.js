import React, {  useContext } from 'react'
import FriendsContext from '../context/FriendsContext'

export default function Login(){
    const { handleChange, login, loginSubmit } = useContext(FriendsContext)

    return(
        <div>
            <form onSubmit={loginSubmit}>
                <input type='text' name='username' value={login.username} onChange={handleChange} placeholder="Username" />
                <input type='password' name='password'value={login.password} onChange={handleChange} placeholder='Password'/>
                <button>submit</button>
            </form>
        </div>
    )
}