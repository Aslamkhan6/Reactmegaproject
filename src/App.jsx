
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { login, logout } from "./store/Authslice"
import authService from "./appwrite/auth"
import { Outlet } from "react-router-dom"
import { Header, Footer } from "./components/index"

function App() {
  const dispatch = useDispatch()
  const authStatus = useSelector(state => state.auth.status)

  useEffect(() => {
    authService.getCurrentUser()
      .then(user => {
        if (user) dispatch(login(user))
        else dispatch(logout())
      })
      .catch(() => dispatch(logout()))
  }, [dispatch])
if (authStatus === null) return <h1>Loading...</h1>
  return (
    <div className="min-h-screen flex flex-col bg-red-100">
      <Header />
      <main>

        <Outlet />
      </main>
     
      <Footer />
    </div>
  )
}

export default App
