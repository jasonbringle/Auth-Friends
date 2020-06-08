import React, { useContext } from 'react';
import NewFriend from './NewFriend';
import FriendsContext from '../context/FriendsContext';
import { DivContainer } from '../styled/index';
import FriendCard from './FriendCard'

export default function Friends(){
    const { friends } = useContext(FriendsContext)

    

    return (
        <>
            <NewFriend /> 
            <DivContainer>
                {friends &&friends.map(friend => (
                    <FriendCard key={friend.key} friend={friend} /> 
                ))}
            </DivContainer>
        </>
    )
}