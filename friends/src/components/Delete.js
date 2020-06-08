import React, { useContext } from 'react';
import axiosWithAuth from '../util/axiosWithAuth'
import FriendsDeleteContext from '../context/FriendsDeleteContext'

export default function Delete(){
    const{friend} = useContext(FriendsDeleteContext)
    
    const deleteFriend = e => {
        // console.log(e.id);
        axiosWithAuth()
        .delete(`friends/:${e.id}`)
        .then(res=> res)
        .catch(err => console.log('Person Not Deleted', err.message))
    }

    return(
        <button onClick={deleteFriend(friend)}>Delete Friend</button>
    )
}





