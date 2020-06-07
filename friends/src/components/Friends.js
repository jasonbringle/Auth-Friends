import React, { useEffect } from 'react';
import axiosWithAuth from '../util/axiosWithAuth';

 export default function Friends(){

    useEffect(()=>{
        return getData;
        }
    )
    
    const getData = () =>{
        axiosWithAuth()
        .get("/data/friends")
        .then(res => console.log(res))
        .catch()
    }


     return (
         <div>
             HELLO!
         </div>
     )
 }