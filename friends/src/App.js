import React, { useState, useEffect } from 'react';
import './App.css';
import Login  from './components/Login';
import PrivateRoute from './components/Friends'
import Friends from './components/Friends'
import Logout from './components/Logout'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import FriendsContext from './context/FriendsContext'
import axiosWithAuth from './util/axiosWithAuth'

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

  const loginSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
    .post('/login', login)
    .then(res=> {
        localStorage.setItem("token", res.data.payload);
        window.history.push("/authorized-page");})
    .catch(err => console.log(err));
    setLogin({
        username: '',
        password: ''
    })
  };

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

  const deleteFriend = person => {
      axiosWithAuth()
      .delete(`friends/:${person.id}`)
      .then(res=> res)
      .catch(err => console.log('Person Not Deleted', err.message))
  }

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
    
      <Router >
        <Link to='/'>HOME</Link>
        <Link to='/login'>LOGIN</Link>
        <Link to="/authorized-page">FRIENDS</Link>
        <Link to="/logout">LOGOUT</Link>
        <FriendsContext.Provider value={{ handleChange, login, setLogin, loginSubmit, getData, deleteFriend, friends, setFriends, newFriend, setNewFriend, newFriendChangeHandler, submitNewFriend}}>
          <Switch>
            <Route exact path= "/login" component={Login} />
            <Route path="/logout" component={Logout}/>
            <PrivateRoute path="/authorized-page" component={Friends} /> 
          </Switch>
        </FriendsContext.Provider> 
      </Router>
    
  );
}

export default App;
