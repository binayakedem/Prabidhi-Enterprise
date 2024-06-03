import React from 'react'

const Services = () => {
  return (
    <div className='bg-[#FFFFFF]'>
      <div className='mx-4 md:mx-12 lg:mx-24 bg-gray-0'>
        <div className='py-3 flex flex-col justify-center items-center bg-[#001636] text-white gap-2'>
          <h1 className='font-semibold text-3xl'>Our mission is to make your business better through Technology</h1>
          <p className='text-gray-200'>We are sure you will enjoy working with us. Check out our features included.</p>
        </div>
        <div className='flex flex-col justify-center items-center text-center text-gray-800 my-4'>
          <h1 className='font-semibold text-4xl'>Our Services</h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          <div className='cursor-pointer hover:shadow-lg hover:shadow-gray-700 hover:rounded-md duration-500 ease-in-out'>
            <div className='overflow-hidden h-40 text-center flex flex-col justify-center items-center'>
              <img className='object-cover h-full w-auto hover:scale-125 duration-500 ease-in-out' src="https://prabidhienterprises.com/images/services/Website%20design.png" alt="" />
            </div>
            <h1 className='font-semibold text-xl text-gray-700 text-center'>Website Design</h1>
          </div>
          <div className='cursor-pointer hover:shadow-lg hover:shadow-gray-700 hover:rounded-md duration-500 ease-in-out'>
            <div className='overflow-hidden h-40 text-center flex flex-col justify-center items-center'>
              <img className='object-cover h-full w-auto hover:scale-125 duration-500 ease-in-out' src="https://prabidhienterprises.com/images/services/1684137611.png" alt="" />
            </div>
            <h1 className='font-semibold text-xl text-gray-700 text-center'>Digital Marketing</h1>
          </div>
          <div className='cursor-pointer hover:shadow-lg hover:shadow-gray-700 hover:rounded-md duration-500 ease-in-out'>
            <div className='overflow-hidden h-40 text-center flex flex-col justify-center items-center'>
              <img className='object-cover h-full w-auto hover:scale-125 duration-500 ease-in-out' src="https://prabidhienterprises.com/images/services/1684135520.png" alt="" />
            </div>
            <h1 className='font-semibold text-xl text-gray-700 text-center'>Graphic Design</h1>
          </div>
          <div className='cursor-pointer hover:shadow-lg hover:shadow-gray-700 hover:rounded-md duration-500 ease-in-out'>
            <div className='overflow-hidden h-40 text-center flex flex-col justify-center items-center'>
              <img className='object-cover h-full w-auto hover:scale-125 duration-500 ease-in-out' src="https://prabidhienterprises.com/images/services/12083278_Wavy_Bus-11_Single-12.jpg" alt="" />
            </div>
            <h1 className='font-semibold text-xl text-gray-700 text-center'>Search Engine Optimization (SEO)</h1>
          </div>
          <div className='cursor-pointer hover:shadow-lg hover:shadow-gray-700 hover:rounded-md duration-500 ease-in-out'>
            <div className='overflow-hidden h-40 text-center flex flex-col justify-center items-center'>
              <img className='object-cover h-full w-auto hover:scale-125 duration-500 ease-in-out' src="https://prabidhienterprises.com/images/services/1684137561.png" alt="" />
            </div>
            <h1 className='font-semibold text-xl text-gray-700 text-center'>Software Development</h1>
          </div>
          <div className='cursor-pointer hover:shadow-lg hover:shadow-gray-700 hover:rounded-md duration-500 ease-in-out'>
            <div className='overflow-hidden h-40 text-center flex flex-col justify-center items-center'>
              <img className='object-cover h-full w-auto hover:scale-125 duration-500 ease-in-out' src="https://prabidhienterprises.com/images/services/1684137939.png" alt="" />
            </div>
            <h1 className='font-semibold text-xl text-gray-700 text-center '>Website Hosting</h1>
          </div>

        </div>
        </div>
        </div>
  )
}

export default Services