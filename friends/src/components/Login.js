import React, {  useContext } from 'react'
import FriendsContext from '../context/FriendsContext'
import { FormDiv, Input, Button, DivContainer } from '../styled/index'
import axiosWithAuth from '../util/axiosWithAuth'


export default function Login(props){
    const { handleChange, login, setLogin } = useContext(FriendsContext)

    const loginSubmit = e => {
        e.preventDefault();
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
        <DivContainer>
            <FormDiv onSubmit={loginSubmit}>
                <label>User Name</label>
                    <Input type='text' name='username' value={login.username} onChange={handleChange} placeholder="Username" />
                <label>User Password</label>
                    <Input type='password' name='password'value={login.password} onChange={handleChange} placeholder='Password'/>
                <Button>Submit</Button>
            </FormDiv>
        </DivContainer>
    )
}