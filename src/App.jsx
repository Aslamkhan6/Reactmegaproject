import React from "react"
import { useDispatch } from "react-redux";
import { useState,useEffect } from "react";
import authService from "./appwrite/auth";
import {login,logout} from "./store/Authslice";
import { Footer, Header } from "./components/index";
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
  !loading ? (<div className="min-h-screen  flex flex-wrap content-between bg-red-100">

    <div className="w-full block">
      <Header/>
      {/* {outlit} todo */}
      <Footer/>
    </div>
  </div>): null

  
  )
}

export default App
