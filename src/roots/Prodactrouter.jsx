import React from 'react'
import { Navigate } from 'react-router-dom';

export default function Prodactrouter({children}) {
    const token = localStorage.getItem("userToken");
    if(!token){
        return <Navigate to="/login"/>
    } 
       return children ;   
}
export function PublicRoute({children}){
   const token =  localStorage.getItem('userToken');
   if(token){
    return <Navigate to="/home" />;
   }
    return children  ;     
}
