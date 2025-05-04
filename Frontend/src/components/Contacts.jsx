import React from 'react';

function Contacts() {
  return (
    <>
      <div className='border-gray-100 w-screen h-screen flex flex-col justify-center items-center'>
        <h1 className='font-semibold text-2xl '>Contact Us</h1>
        <form className='flex flex-col items-center w-1/5'>
          <div className='flex flex-col w-full mb-4'>
            <label for='name' className='mb-2'>
              <span>Name</span>
            </label>
            <input 
              type="text" 
              placeholder='Enter your name'
              className='w-full p-2 border border-gray-300'
              id='name'
              name='name'
            />
          </div>
          <div className='flex flex-col w-full mb-4'>
            <label for='email' className='mb-2'>
              <span>Email</span>
            </label>
            <input 
              type="email" 
              placeholder='Enter your email'
              className='w-full p-2 border border-gray-300'
              id='email'
              name='email'
            />
          </div>
          <div className='flex flex-col w-full mb-4'>
            <label for='comment' className='mb-2'>
              <span>Message</span>
            </label>
            <textarea 
              placeholder='Enter your message'
              className='w-full p-2 border border-gray-300'
              id='comment'
              name='comment'
              rows='5'
            />
          </div>
          <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md'>Submit</button>
        </form>
      </div>
    </>
  )
}

export default Contacts;