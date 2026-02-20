import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/Authslice'
const LogoutBtn = () => {

    const dispatch = useDispatch()
    const logoutHandler = async () => {
        authService.logout().then((Response)=>{
            dispatch(logout())
        })
    }
  return (
 <button onClick={logoutHandler} className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>logout</button>
  )
}

export default LogoutBtn