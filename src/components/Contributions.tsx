import React from 'react';
import '../app/globals.css';

function Contributions() {
  return (
    <div className='flex flex-col justify-center items-center lg:mx-20 xl:mx-40 mx-5 pt-32 md:pt-[280px]'>
        <div className='flex flex-col justify-center items-center gap-[24px] md:mx-20'>
            <h1 className='text-[42px] font-extralight 2xl:text-[80px] text-center'>Our Contribution</h1>
            <p className='font_poppins text-[18px] text-center font-sans font-extralight 2xl:text-[50px]'>Our core offering extends beyond mere profit generation; we emphasize the growth and active involvement of our user community. Collaborating with us represents an investment, rather than a mere expenditure. Our dedication to providing distinctive digital interactions guarantees unparalleled benefits for our clientele.</p>
        </div>
        <div className='flex flex-row flex-wrap justify-center items-center pt-16 md:pt-[100px] gap-16 md:gap-[100px] 2xl:gap-80 2xl:pt-60'>
            <div className='md:w-40 lg:w-44 2xl:w-80 flex flex-col justify-center items-center'>
                <h1 className=' text-[50px] md:text-[50px] font-extralight 2xl:text-[100px]'>5M</h1>
                <p className='text-[25px] md:text-[20px] font-light text-center 2xl:text-[40px]'>Daily User Engagements</p>   
            </div>
            <div className='md:w-40 lg:w-44 2xl:w-80 flex flex-col justify-center items-center'>
                <h1 className=' text-[50px] md:text-[50px] font-extralight 2xl:text-[100px]'>$500K</h1>
                <p className='text-[25px] md:text-[20px] font-light text-center 2xl:text-[40px]'>Revenue Surge for an Platform</p>
            </div>
            <div className='md:w-40 lg:w-44 2xl:w-80 flex flex-col justify-center items-center'>
                <h1 className=' text-[50px] md:text-[50px] font-extralight 2xl:text-[100px]'>10X</h1>
                <p className='text-[25px] md:text-[20px] font-light text-center 2xl:text-[40px]'>ROAS on all our marketing campaigns</p>   
            </div>
        </div>
    </div>
  )
}

export default Contributions