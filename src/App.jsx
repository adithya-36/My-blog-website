import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Blog from './components/Blog'
import Contact from './components/Contact'
import AboutPage from './pages/AboutPage'
import BlogPage from './pages/BlogPage'
import ContactPage from './pages/ContactPage' 
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const App = () => {
  const router = createBrowserRouter([
  {
    path: "/",
    element: <>
    <Navbar/>
    <Home/>
    <About/>
    <Blog/>
    <Contact/>
    </>
  },
  {
    path: "/about",
    element: <><Navbar/><AboutPage/></>
  },
  {
    path: "/blog",
    element: <><Navbar/><BlogPage/></>
  },
  {
    path: "/contact",
    element: <><Navbar/><ContactPage/></>
  }
  ])
  return (
    <div >
      
      <RouterProvider router={router} />
    </div>
  )
}

export default App