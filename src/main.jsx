import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import './index.css'
import store from './store/store'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Post from './pages/Post.jsx'
import { Authlayout, Login, Register, Addpost, Allposts, Editpost } from './components/index.js'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
    { index: true, element: <Home /> },
      {
        path: "/login",
        element: (
          <Authlayout authenticated={false}>
            <Login />
          </Authlayout>
        )
      },
      {
        path: "/register",
        element: (
          <Authlayout authenticated={false}>
            <Register />
          </Authlayout>
        )
      },
      {
        path: "/allposts",
        element: (
          <Authlayout authenticated={true}>
            <Allposts />
          </Authlayout>
        )
      },
      {
        path: "/addpost",
        element: (
          <Authlayout authenticated={true}>
            <Addpost />
          </Authlayout>
        )
      },
      {
        path: "/editpost/:slug",
        element: (
          <Authlayout authenticated={true}>
            <Editpost />
          </Authlayout>
        )
      },
      { path: "/post/:slug", element: <Post /> }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  
)
