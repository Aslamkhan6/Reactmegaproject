import React from 'react'
import {Button,Input,logo} from './index'
import { login } from '../store/Authslice'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import { useForm } from 'react-hook-form'
import { Link ,NavLink,useNavigate} from 'react-router-dom'
export const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [error, seterror] = useState("")
    const {register,handleSubmit} = useForm()

    const loginHandler = async (data) => {
        seterror("")
        try {
            const session= await authService.login(data)
            if(session){
               
                const user = await authService.getCurrentUser()
               if(user){    
                dispatch(login(user))
                navigate("/")
               }
            }
            
        } catch (error) {
            seterror(error.message)
        }
    }

  return (
    <div>Login</div>
  )
}
