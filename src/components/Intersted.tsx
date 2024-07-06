import React from 'react';
import '../app/globals.css';

function Intersted() {
  return (
    <div className='flex flex-col justify-center items-center pt-32 md:pt-[280px] gap-[50px] md:mx-20 mx-5 2xl:mx-40'>
        <h1 className=' text-[35px] md:text-[45px] font-light 2xl:text-[80px] text-center 2xl:mx-40'>Interested in delving deeper into the project?</h1>
        <p className='font-light text-white text-center md:mx-10 xl:mx-20 md:text-[28px] text-xl 2xl:text-[40px] 2xl:leading-[80px] 2xl:mx-60'>If you`d like to explore further details about our initiatives or any of our affiliated brands, don`t hesitate to connect. You can reach out to us via email at <span className=' font-medium'>hello@abc.com</span> or give us a call at <span className=' font-medium'>+91 480 20802730</span>.</p>
        <div className='flex flex-row flex-wrap justify-center items-center gap-[36px] pt-5 md:pt-10'>
            <button className='font_poppins bg-black text-white border-[1px] border-white md:w-[400px] w-72 py-[16px] text-[19px] 2xl:text-[30px]'>Ring us on Skype</button>
            <button className='font_poppins bg-white text-black md:w-[400px] w-72 py-[16px] text-[19px] 2xl:text-[30px]'>Contact Us</button>
        </div>
    </div>
  )
}

export default Intersted