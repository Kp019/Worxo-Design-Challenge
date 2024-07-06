import React from 'react';
import '../app/globals.css';

function Hero() {
  return (
    <div className='flex flex-col justify-center items-center md:mx-20'>
        <div className='flex flex-col justify-center items-start w-full lg:mx-40'>
          <div className='flex flex-col justify-center items-center gap-10 w-full'>
            <h3 className=' text-[30px] md:text-[45px] capitalize font-[100] text-left md:text-center leading-[35px] md:leading-[48px] lg:mx-40 mx-5 2xl:text-[80px] 2xl:leading-[90px]'>Epic Games : An American video game and software developer and publisher based in Cary, North Carolina.</h3>
            <div className='flex flex-col lg:mx-20 md:h-[300px] lg:h-[300px] xl:h-[500px] 2xl:h-[700px] overflow-hidden'>
                <img className='w-full' src='/bg.jpeg' alt='bg'/>
            </div>
            <h3 className='font_poppins text-center text-[14px] md:text-[18px] font-[400] lg:mx-40 md:mx-10 mx-5 2xl:text-[40px]'>Create, play, and battle with friends for free in Fortnite. Be the last player standing in Battle Royale and Zero Build, experience a concert or live event, or discover over a million creator made games, including racing, parkour, zombie survival, and more. Each Fortnite island has an individual age rating so you can find the one that is right for you and your friends. Find it all in Fortnite ... Drop In.</h3>
          </div>
          <div className='flex flex-col justify-center items-center pt-[55px] w-full'>
            <button className='font_poppins bg-white text-black w-[250px] lg:w-[400px] py-[16px] text-[15px] lg:text-[19px] 2xl:text-[30px]'>Visit Website</button>
          </div>
        </div>
    </div>
  )
}

export default Hero