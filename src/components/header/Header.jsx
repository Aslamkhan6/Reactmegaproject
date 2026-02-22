
import React from 'react'
import { Container, Logo, LogoutBtn } from '../index'
import { useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'

const Header = () => {
  const authstate = useSelector(state => state.auth.status)
  const navigate = useNavigate()

  // Navigation items
  const navitems = [
    { name: "Home", slug: "/", active: true },
    { name: "Login", slug: "/login", active: !authstate },
    { name: "Register", slug: "/register", active: !authstate },
    { name: "All posts", slug: "/allposts", active: authstate },
    { name: "Add post", slug: "/addpost", active: authstate }
  ]
  console.log("Header rendered")

  console.log("authstate:", authstate)


  return (
    <header className='py-3 shadow bg-gray-500'>
      <Container>
        <nav className='flex'>
          <div className='mr-4'>
            <Link to='/'>
              <Logo width='70px' />

            </Link>
          </div>
          <ul className='flex ml-auto'>
            
            {navitems.map((item) => item.active ?
            
              <li key={item.name}>
                <h1>hello</h1>
                <button
                  onClick={() => navigate(item.slug)}
                  className="px-4 py-2 bg-white text-black hover:bg-blue-100 rounded-full transition-all"

                >
                  {item.name}
                </button>

              </li>
              : null
            )}
            {authstate && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>

        </nav>
      </Container>

    </header>
  )
}

export default Header