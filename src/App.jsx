import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Blog from './components/Blog'
import Contact from './components/Contact'
import AboutPage from './pages/AboutPage'
import BlogPage from './pages/BlogPage'
import BlogDetail from './pages/BlogDetail';
import ContactPage from './pages/ContactPage';
import NotFound from './pages/NotFound';

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
    element: <><Navbar/><AboutPage/><Contact/></>
  },
  {
    path: "/blog",
    element: <><Navbar/><BlogPage/><Contact/></>
  },
  {
    path: "/blog/:id",
    element: <><Navbar /><BlogDetail /><Contact /></>
  },
  {
    path: "/contact",
    element: <><Navbar/><ContactPage/><Contact/></>
  },
  {
    path: "*",
    element: <NotFound />
  }
  ])
  return (
    <div >
      
      <RouterProvider router={router} />
    </div>
  )
}

export default App