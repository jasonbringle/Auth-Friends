import styled from 'styled-components'
import img from '../img/friendsbackground.jpg'
import img2 from '../img/friends.jpg'
import img3 from '../img/chandler.png'

export const AppDiv = styled.div`
    background-image: url(${img});
    background-size: cover; 
    background-attachment: fixed; 
    background-position-y: 150px;
    min-width: 100%;
    min-height: 100vh;

`

export const DivContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
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
export const LogoutDiv = styled.div`
    display: flex;
    justify-content: center;
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
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
    border: 10px solid grey;
    border-radius: 13px;
    background-color: lightblue;
    box-shadow: 35px 35px 70px 35px black;
    height: 22vh;
    width: 50vh;
`

export const Input = styled.input`
    background-color: lightgrey;
    
`
export const InputDiv = styled.div`
    display:flex;
    flex-direction: column;
`

export const InputsDiv = styled.div`
    display:flex;
    flex-direction:row;
    width:100%;
    justify-content:space-around;
`

export const Button = styled.button`
    height: 4rem;
    width: 4rem;
    border-radius: 90px;
    outline: none;
    box-shadow: 10px 10px 40px 10px black;

    &:active {
        box-shadow: 20px 20px 70px 10px black; 
        }
    &:hover{
        background-image:url(${img3});
        background-size:cover;
        color: white;
        background-position-y:1px;
    }
`

export const LinksDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items:flex-end;
    text-decoration: none;
    font-size: 3rem;
    background-image: url(${img2});
    background-position-y:-80px;
    background-position-x:0px;
    background-size:cover;
    height:20vh;
    box-shadow: 35px 35px 70px 35px black;

        a:visited, a:link, a:active{
            text-decoration: none;
            color: lightgoldenrodyellow;
        }
        a:hover{
            color: lightgreen;
        }

`