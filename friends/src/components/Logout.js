import React, {  useContext } from 'react'
import FriendsContext from '../context/FriendsContext'
import { FormDiv, Input, Button, DivContainer } from '../styled/index'
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
            <FormDiv onSubmit={logout}>
                <Button>Log Out</Button>
            </FormDiv>
        </DivContainer>
    )
}
 


