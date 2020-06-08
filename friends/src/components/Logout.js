import React, {  useContext } from 'react'
import FriendsContext from '../context/FriendsContext'
import { LogoutDiv, Input, Button, DivContainer } from '../styled/index'
import axiosWithAuth from '../util/axiosWithAuth'


export default function Login(props){
    const { login } = useContext(FriendsContext)

    const logout = e => {
        e.preventDefault();
        axiosWithAuth()
        .post('/login', login)
        .then(res=> {
            localStorage.setItem("token", '');
            props.history.push("/login");})
        .catch(err => console.log(err));
        
      };

    return(
        <DivContainer>
            <LogoutDiv onSubmit={logout}>
                <Button>Log Out</Button>
            </LogoutDiv>
        </DivContainer>
    )
}
 


