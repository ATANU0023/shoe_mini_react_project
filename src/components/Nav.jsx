import React from 'react'

function Nav() {
  return (
    <>
       <div>
        <nav className='flex justify-between m-auto max-w-screen-xl py-4 px-3 '>
          <div className=''>
            <img src="../public/img/brand_logo.png" alt="logo" />
          </div>
          <ul className='flex gap-5 md:gap-9 font-poppins font-bold '>
            <li href="#">Menu</li>
            <li href="#">Location</li>
            <li href="#">About</li>
            <li href="#">Contact</li>
          </ul>

          <button className='p-2 bg-rose-400 rounded-md m-0 hover:bg-pink-600 font-bold text-white'> login </button>
        </nav>
      </div>
    </>
  )
}

export default Nav
