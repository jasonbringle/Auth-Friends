import React, { useContext } from 'react';
import FriendsContext from '../context/FriendsContext';

export default function NewFriend(){
    const { newFriend, newFriendChangeHandler, submitNewFriend }= useContext(FriendsContext)

    return (
        <div>
            <h2>ADD A NEW FRIEND!</h2>
            <form onSubmit={submitNewFriend}>
                <input type='text' name='name' onChange={newFriendChangeHandler} placeholder='Name' value={newFriend.name}/>
                <input type='text' name='age' onChange={newFriendChangeHandler} placeholder='Age' value={newFriend.age}/>
                <input type='text' name='email' onChange={newFriendChangeHandler} placeholder='Email' value={newFriend.email}/>
                <button>Submit</button>
            </form>
        </div>
    )
}