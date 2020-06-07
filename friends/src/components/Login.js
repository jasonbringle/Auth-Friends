import React, { useState } from 'react'
import axiosWithAuth from '../util/axiosWithAuth'

export default function Login(props){
    const [ login, setLogin ] = useState({
        name:'',
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
        axiosWithAuth()
        .post('/api/login', login)
        .then(res=> {
            localStorage.setItem("token", res.data.payload);
            props.history.push("/authorized-page");})
        .catch(err => console.log(err))
      };



    return(
        <div>
            <form onSubmit={loginSubmit}>
                <input type='text' onChange={handleChange} placeholder="name" />
                <input type='password' onChange={handleChange} placeholder='Password'/>
                <button>submit</button>
            </form>
        </div>
    )
}