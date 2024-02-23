import React from 'react'
import App from '../App'

function Hero() {
    return (
        <main className='sm:flex  backdrop-blur-xl rounded-3xl  md:m-auto mt-20 max-w-screen-xl bg-[#ffffff3c]  p-14  justify-center items-center md:h-screen  '>
            <div className='md:flex w-full justify-center items-center'>
                <div className='justify-center items-center py-10 ml-9 '>
                    <h1 className='text-[80px]  font-poppins font-bold leading-tight'>YOUR FEET DESERVE THE BEST</h1>
                    <p className='font-poppins items-center  py-5 md:w-1/2   '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, provident nisi? Cumque! Lorem, ipsum dolor sit amet consectetur </p>

                    <div className='pb-3'>
                        <button className='p-3 m-2 bg-red-500 rounded-xl font-bold  text-white'>Shop Now</button>
                        <button className='p-3 m-2 bg-red-500 rounded-xl font-bold text-white'>Category</button>
                    </div>

                    <div className='py-2 font-bold'>
                        <p>Also Available on</p>
                    </div>

                    <div className='flex gap-3'>
                        <img src="../public/img/amazon.png" alt="amazon logo" />
                        <img src="../public/img/flipkart.png" alt="flipkart logo" />
                    </div>


                </div>
                <div className='justify-center items-center h-full w-full ml-5 mt-20'>
                    <img src="../public/img/shoe_image.png" alt="shoe" className='' />
                </div>
            </div>
        </main>
    )
}

export default Hero
