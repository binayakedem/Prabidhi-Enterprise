import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { FaInstagram , FaFacebook,FaTwitter,FaLinkedin, FaPinterest,FaYoutube ,FaSearchLocation  } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
const Contact = () => {
  return (
    <div >
      <div className=' bg-[#0849A8] text-center flex flex-col h-60 w-full justify-center items-center'>
        <h1 className='font-bold text-3xl text-white'>Let us be your
             </h1>
             <h1 className='text-[#FFCD03] font-bold text-3xl'> innovation partner!</h1>
      </div>
      <div className='mx-4 md:mx-12 lg:mx-24 my-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-14'>
          <div className='flex flex-col gap-5'>
            <h1 className='mt-6 flex flex-row justify-start items-center gap-2 font-bold text-2xl text-[#0047A9] '>Fill Details</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
              <input className='border rounded-md p-2' type="text" placeholder='First Name' />
              <input className='border rounded-md p-2' type="text" placeholder='Last  Name' />
            </div>
            <input className='border rounded-md p-2' type="email" placeholder='Email' />
            <input className='border rounded-md p-2' type="number" placeholder='Phone' />
            <input className='border rounded-md p-6' type="textarea" placeholder='Your message' />
            <button className='px-2 rounded-md p-2 font-semibold py-1 bg-[#0047A9] text-white hover:bg-[#FFCD03] hover:text-black duration-300 ease-in-out'>Send</button>
          </div>
            <div className='text-gray-700'>
          <div className=' my-6 flex flex-row justify-start items-center gap-2 font-bold text-2xl text-[#0047A9] mt-5'>
          <FaLocationDot /> <h1>Our Details</h1>
          </div>
          <hr className='w-full border border-black my-4'/>
          <div>
            <div className='flex flex-row gap-3 items-center'>
            <FaLocationDot /> <p>Mid Baneshwor (Old Whitehouse building 2nd floor) Kathmandu, Nepal</p>
            </div>
            <div className='flex flex-row gap-3 items-center my-1'>
            <MdAttachEmail />
              <p>info@prabidhienterprises.com.np</p>
            </div>
            <div className='flex flex-row gap-3 my-2'>
            <FaInstagram />
                    < FaFacebook />
                    < FaTwitter/>
                    < FaLinkedin />
                    <  FaPinterest  />
                    <  FaYoutube/>
            </div>
            <div className='overflow-hidden h-80 my-4'>
            <div className="w-full h-screen">
      <iframe
        title="Google Map"
        className="w-full h-full"
        loading="lazy"
        allowFullScreen
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.087978919928!2d85.33516631506063!3d27.694699032640687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1917e6a75f1f%3A0xed5fad0bc56ff354!2sPrabidhi%20Enterprises!5e0!3m2!1sen!2snp!4v1620495686404!5m2!1sen!2snp"
      ></iframe>
    </div>
            </div>

          </div>
          
        </div>


          <div>
          </div>
        </div>
      </div>
  
    </div>
  );
};

export default Contact;
