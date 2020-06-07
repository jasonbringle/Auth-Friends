import React, { useContext } from 'react';
import NewFriend from './NewFriend'
import FriendsContext from '../context/FriendsContext';

export default function Friends(){
    const {friends, deleteFriend }= useContext(FriendsContext)
    
     return (
         <div>
             <NewFriend />
            {friends && friends.map(friend => (
                <div key={friend.id}>
                    <h1>{friend.name}</h1>
                    <p>Age:{friend.age}</p>
                    <p>Email:{friend.email}</p>
                    <button onClick={deleteFriend}>Delete Friend</button>
                </div>  
            ))}
         </div>
    )
}