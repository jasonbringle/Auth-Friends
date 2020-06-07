import React, { useState } from 'react'
import axiosWithAuth from '../util/axiosWithAuth'

export default function Login(props){
    const [ login, setLogin ] = useState({
        username:'',
        password:''
    })

    const handleChange = e => {
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        });
    };

    const loginSubmit = e => {
        e.preventDefault();
        console.log(login)
        axiosWithAuth()
        .post('/login', login)
        .then(res=> {
            localStorage.setItem("token", res.data.payload);
            props.history.push("/authorized-page");})
        .catch(err => console.log(err));
        setLogin({
            username: '',
            password: ''
        })
      };



    return(
        <div>
            <form onSubmit={loginSubmit}>
                <input type='text' name='username' value={login.username} onChange={handleChange} placeholder="Username" />
                <input type='password' name='password'value={login.password} onChange={handleChange} placeholder='Password'/>
                <button>submit</button>
            </form>
        </div>
    )
}