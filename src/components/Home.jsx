import React from 'react'

const Home = () => {
  return (
    <div className='min-h-screen w-full flex flex-col md:flex-row bg-gray-100 overflow-hidden'>
      <div className='w-1/2 h-full'>
        <img className='w-full h-screen object-cover' src="../assets/girls.jpg" alt="Blog" />
      </div>
      <div className='w-1/2 h-full flex flex-col justify-center items-center p-10'>
        <h1 className='text-4xl font-bold mb-4 text-center'>Welcome to my blog</h1>
        <p className='text-md text-gray-700 mt-4 text-center max-w-md'>This is a page where I share my thoughts and ideas.</p>
        <p className="text-lg text-gray-600 italic mt-2 text-center max-w-md">
          "Writing is the painting of the voice." – Voltaire
        </p>

        <p className="text-md text-gray-700 mt-6 text-center max-w-mdd">
          On this blog, I pen down stories, reflections, and ideas that inspire me.From technology to life lessons, explore topics that matter.
        </p>

        <p className="text-md text-gray-700 mt-4 text-center max-w-md">
          Whether you're here to learn, reflect, or just browse, I hope you leave with something meaningful.
        </p>
        <div className='m-10 bg-[#E5D0E3] p-3 rounded-lg shadow-md text-center hover:bg-[#E0B0D5] transition duration-300 ease-in-out cursor-pointer'>
          Connect with me
      </div>
      </div>
      
    </div>
  )
}

export default Home