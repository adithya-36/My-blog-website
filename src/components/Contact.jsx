import React from 'react'

const Contact = () => {
  return (
    <div className='min-h-screen bg-[#E5D0E3] p-8'>
      <h1 className='text-4xl font-bold mb-4'>Contact</h1>
      <p className='mb-4'>If you have any questions, feel free to reach out!</p>
      <form className='bg-white p-6 rounded-lg shadow-md'>
        <label className='block mb-2'>
          Name:
          <input type="text" name="name" className='border border-gray-300 p-2 rounded-md w-full' />
        </label>
        <br />
        <label className='block mb-2'>
          Email:
          <input type="email" name="email" className='border border-gray-300 p-2 rounded-md w-full' />
        </label>
        <br />
        <label className='block mb-2'>
          Message:
          <textarea name="message" className='border border-gray-300 p-2 rounded-md w-full'></textarea>
        </label>
        <br />
        <button type="submit" className='bg-[#b23a48] text-white p-2 rounded-md'>Submit</button>
      </form>
    </div>
  )
}

export default Contact