import styled from 'styled-components'
import img from '../img/friendsbackground.jpg'

export const AppDiv = styled.div`
    background-image: url(${img});
    background-size:cover; 
    background-attachment:fixed; 
    min-width: 100%;
    min-height:100vh;

`


export const DivContainer = styled.div`
    display: flex;
    flex-wrap:wrap;
    justify-content: space-around;
    padding: 3rem;
`

export const FormDiv = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: .5rem;
    width: 12rem;
    height: 10rem;
    border: 10px solid grey;
    border-radius: 13px;
    background-color: lightblue;
    box-shadow: 35px 35px 70px 35px black;
`

export const HomeDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align:center;
    width: 12rem;
    height: auto;
    border: 10px solid grey;
    border-radius: 13px;
    background-color: lightblue;
    box-shadow: 35px 35px 70px 35px black;
`

export const FriendDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: .5rem;
    margin: 1rem;
    border: 10px solid grey;
    border-radius: 13px;
    background-color: lightgoldenrodyellow;
    box-shadow: 35px 35px 70px 35px black;
`

export const NewFriendFormDiv = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    padding: 1rem;
    /* width: 12rem;
    height: 20rem; */
    border: 10px solid grey;
    border-radius: 13px;
    background-color: lightblue;
    box-shadow: 35px 35px 70px 35px black;
`

export const Input = styled.input`
    background-color: lightgrey;
    
`

export const Button = styled.button`
    height: 4rem;
    width: 4rem;
    border-radius: 90px;
    outline: none;`

export const LinksDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    text-decoration: none;
    font-size: 3rem;
    background: lightblue;
    box-shadow: 35px 35px 70px 35px black;

        a:visited, a:link, a:active{
            text-decoration: none;
            color: lightgoldenrodyellow;
        }
        a:hover{
            color: black;
        }

`