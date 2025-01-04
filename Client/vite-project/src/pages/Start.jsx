import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div className='bg-[url("/src/assets/red-traffic-light-pedestrians-with-countdown.jpg")]  bg-cover bg-center pt-5 w-full h-screen flex flex-col justify-between'>
      <img className='w-16 ml-5' src='https://download.logo.wine/logo/Uber/Uber-Logo.wine.png' alt=''/>
      <img/>
        <div className='bg-white py-4 px-4 pb-5'>
            <h1 className='text-3xl font-bold'>Get started with uber</h1>
            <Link to="/user-login" className='bg-black flex justify-center item-center mt-5 rounded text-white w-full py-3'>Continue</Link>
        </div>
    </div>
  )
}

export default Start