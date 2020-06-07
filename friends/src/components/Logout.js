import React from 'react';
import axiosWithAuth from '../util/axiosWithAuth'

export default function Logout(){

    const logout = () =>{
        axiosWithAuth()
        .post('/login',{})
        .then(res => res)
        .catch(err => console.log("You didnt log out", err.message))
    }

return (
    <div>
        <button onClick={logout}>Log Out</button>
    </div>
)


}
 


