import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Blog from './components/Blog'
import Contact from './components/Contact'

const App = () => {
  return (
    <div >
      <Navbar/>
      <Home/>
      <Blog/>
      <Contact/>
    </div>
  )
}

export default App