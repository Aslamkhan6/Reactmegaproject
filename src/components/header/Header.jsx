import React from 'react'
import { Container,Logo,LogoutBtn } from '../index'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
 export const Header = () => {
  const authstate = useSelector((state) => state.auth.status)
 const navigate = useNavigate()
 const navitems=[
  {
    name:"Home",
    slug:"/",
    acrtive:true
  },
  {
    name:"login",
    slug:"/login",
    acrtive:!authstate
  },
  {
    name:"register",
    slug:"/register",
    acrtive:!authstate
  },  
  {
    name:"logout",
    slug:"/logout",
    acrtive:authstate
  }   ,
  {
    name:"All posts",
    slug:"/posts",
    acrtive:authstate
  },
  {
    name:"Add post",
    slug:"/addpost",
    acrtive:authstate
  }
 ]
  return (
   
      
  <header className='py-3 shadow bg-gray-500'>
    <Container>
<nav className='flex'>
  <div className='mr-4'>
  <Link to="/">
  <Logo width="70px"/>
  </Link>  
  </div>

  <ul className='flex ml-auto'>
{
  navitems.map((item)=>{
    return(
      item.active ? 
      <li key={item.name}>
        <button onClick={navigate(item.slug)} className='inline-block px-6 py-2 duration-200
         hover:bg-blue-100 rounded-full' >{item.name}</button>
      </li>
      : null
    )
  })
}
{authstate && (
  <li>
    <LogoutBtn/>
  </li>
)}
  </ul>
</nav>

    </Container>
  </header>
  )
}

