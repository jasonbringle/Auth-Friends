import React, { useContext } from 'react';
import NewFriend from './NewFriend';
import FriendsContext from '../context/FriendsContext';
import { FriendDiv, DivContainer } from '../styled/index'
import Delete from './Delete'
import FriendsDeleteContext from '../context/FriendsDeleteContext'


export default function Friends(){
    const { friends } = useContext(FriendsContext)
    return (
        <>
            <NewFriend /> 
            <DivContainer>
                {friends &&friends.map(friend => (
                    <FriendDiv key={friend.id}>
                        <h1>{friend.name}</h1>
                        <p>Age:{friend.age}</p>
                        <p>Email:{friend.email}</p>
                        <FriendsDeleteContext.Provider value={{ friend }}>
                            <Delete/>
                        </FriendsDeleteContext.Provider>
                    </FriendDiv>  
                ))}
            </DivContainer>
        </>
    )
}