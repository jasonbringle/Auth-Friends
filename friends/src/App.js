import React, { useState, useEffect } from 'react';
import './App.css';

import { BrowserRouter as Router } from 'react-router-dom';
import FriendsContext from './context/FriendsContext';
import axiosWithAuth from './util/axiosWithAuth';
import Header from './components/Header';
import {AppDiv} from './styled/index'

function App() {
  const handleChange = e => {
    setLogin({
        ...login,
        [e.target.name]: e.target.value,
    });
  };

  const newFriendChangeHandler = e => {
    setNewFriend({
    ...newFriend,
    [e.target.name]: e.target.value
    })
}

  const submitNewFriend = e => {
    if (newFriend.name && newFriend.age && newFriend.email) {
        axiosWithAuth()
        .post("/friends", newFriend)
        .then(res => console.log(res))
        .catch(err => console.log('cound not add friend', err.message)) 
    }
  }

  useEffect(()=>{
    getData()
    },[]
  )

  const getData = () =>{
      axiosWithAuth()
      .get("/friends")
      .then(res => setFriends(res.data))
      // .then(res => console.log(friends))
      .catch()
  }

  // const deleteFriend = person => {
  //     axiosWithAuth()
  //     .delete(`friends/:${person.id}`)
  //     .then(res=> res)
  //     .catch(err => console.log('Person Not Deleted', err.message))
  // }

  const [ friends, setFriends ] = useState([])

  const [ login, setLogin ] = useState({
      username:'',
      password:'',
    }
  )

  const [ newFriend, setNewFriend ] = useState(
    {
        name:'',
        age:'',
        email:'',
        id: Date.now()
    }
  )

  return (
    <AppDiv>
        <Router >
          <FriendsContext.Provider value={{ handleChange, login, setLogin, getData, friends, setFriends, newFriend, setNewFriend, newFriendChangeHandler, submitNewFriend}}>
          <Header />  
          </FriendsContext.Provider> 
        </Router> 
    </AppDiv>
  );
}

export default App;
