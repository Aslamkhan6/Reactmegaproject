import React from 'react'
import { useState,useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Protected = ({children,authenticated=true}) => {
   const navigate = useNavigate()
   const [loader,setloader] = useState(true)
     if(authenticated == true){
        const authstate = useSelector(state=>state.auth.status)
useEffect(() => {
  
if(authenticated && authstate!==authenticated) {
navigate("/login")
}
else if(!authenticated && authstate==authenticated)
    {
navigate("/")
    }
   setloader(false)
}, [authstate,authenticated,navigate])


        
    }
    return (
    loader ? <h1>loading.....</h1>:<>{children}</>
  )
}

export default Protected