import React from "react"
import { useDispatch } from "react-redux";
import { useState,useEffect } from "react";
import authService from "./appwrite/auth";
import {login,logout} from "./store/Authslice";
function App() {
 const [loading, setloading] = useState(true);
const dispatch = useDispatch();
useEffect(() => {
 authService.getCurrentUser().then((data)=>{
  if(data){
    dispatch(login({data}))
  }
  else{
    dispatch(logout())
  }
 }).finally(()=>{
  setloading(false)
 })
 
}, [])

  return (
    <>
      <h1>app in appwrite</h1>
    </>
  )
}

export default App
