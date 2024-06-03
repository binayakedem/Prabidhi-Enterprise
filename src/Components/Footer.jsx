import React from 'react'
import { FaInstagram , FaFacebook,FaTwitter,FaLinkedin, FaPinterest,FaYoutube ,FaSearchLocation  } from "react-icons/fa";
import { IoMailOpenSharp } from "react-icons/io5";
import { PiGreaterThanBold } from "react-icons/pi";
const Footer = () => {
  return (
    <div className='bg-white text-black mt-10'>

    <div className=' mx-4 md:mx-12 lg:mx-24'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
            <div>
                <div className='overflow-hidden h-28'>
                    <img className='h-full w-auto object-cover' src="https://prabidhienterprises.com/images/company-profile/Prabidhi%20Enterprise.png" alt="prabidhi enterprise" />
                </div>
                <div>
                    <h1>Enhancing Experience with enhanced technology.</h1>
                    <a className='text-[#0448AA] font-semibold' href="/about">View More</a>
                    <div className='flex flex-row gap-3 my-4'>
                    <FaInstagram />
                    < FaFacebook />
                    < FaTwitter/>
                    < FaLinkedin />
                    <  FaPinterest  />
                    <  FaYoutube/>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                <div>
                    <h1 className='text-black font-semibold text-lg'>Contact Us</h1>
                    <p className='flex flex-row justify-center gap-2'><FaSearchLocation  size={30}/>Mid Baneshwor (Old Whitehouse building 2nd floor) Kathmandu, Nepal</p>
                    <p className='flex flex-row items-center gap-2 hover:text-blue-600 duration-200 ease-in-out cursor-pointer'><IoMailOpenSharp />info@prabidhienterprises.com.np</p>

                </div>
                <div className='flex flex-col text-blue-600'>
                    <div className='flex flex-row items-center gap-2'>
                    <PiGreaterThanBold /><a href="/portfolio">Portfolio</a>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                    <PiGreaterThanBold /><a href="/service">Service</a>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                    <PiGreaterThanBold /><a href="/contact">Contact Us</a>
                    </div>
                </div>
            </div>

        </div>
        <div className='bg-[#FEE534] my-11 p-3 text-center'>
            <p>© 2024 Copyright Prabidhi enterprises. All Rights Reserved.</p>
        </div>
    </div>
    </div>
  )
}

export default Footer