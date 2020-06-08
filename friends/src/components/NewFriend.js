import React, { useContext } from 'react';
import FriendsContext from '../context/FriendsContext';
import { NewFriendFormDiv, Input, Button, DivContainer } from '../styled/index'


export default function NewFriend(){
    const { newFriend, newFriendChangeHandler, submitNewFriend }= useContext(FriendsContext)

    return (
        <DivContainer>
            <NewFriendFormDiv onSubmit={submitNewFriend}>
                <h2>ADD A NEW FRIEND!</h2>
                    <label>New Friend Name</label>
                <Input type='text' name='name' onChange={newFriendChangeHandler} placeholder='Name' value={newFriend.name}/>
                    <label>New Friend Age</label>
                <Input type='text' name='age' onChange={newFriendChangeHandler} placeholder='Age' value={newFriend.age}/>
                    <label>New Friend Email</label>
                <Input type='text' name='email' onChange={newFriendChangeHandler} placeholder='Email' value={newFriend.email}/>
                <Button>Submit</Button>
            </NewFriendFormDiv>
        </DivContainer>
    )
}