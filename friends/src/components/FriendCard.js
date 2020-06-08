import React, { useContext } from 'react';
import { FriendDiv } from '../styled/index';
import FriendsContext from '../context/FriendsContext'


export default function FriendCard(props){
 const { deleteFriend } = useContext(FriendsContext)
    return (
        <FriendDiv key={props.friend.id}>
            <h1>{props.friend.name}</h1>
            <p>Age:{props.friend.age}</p>
            <p>Email:{props.friend.email}</p>
            <button id={props.friend.id} onClick={deleteFriend}>Delete Friend</button>       
        </FriendDiv> 
        )

}