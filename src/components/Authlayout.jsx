
// verynew
import React from "react"
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

const Protected = ({ children, authenticated = true }) => {
  const authStatus = useSelector((state) => state.auth.status)

  // Still checking auth
  if (authStatus === null) {
    return <h1>Loading...</h1>
  }

  // If route requires login and user is not logged in
  if (authenticated && !authStatus) {
    return <Navigate to="/login" replace />
  }

  // If route is for guests and user is logged in
  if (!authenticated && authStatus) {
    return <Navigate to="/" replace />
  }

  return children
}

export default Protected
