import React from 'react'

function Cards() {
  return (
    <div className='flex flex-row justify-center flex-wrap gap-[51px] pt-[200px]'>
        <div className='w-[300px] 2xl:w-[600px]'>
            <div className='h-[300px] w-[300px] bg-white 2xl:w-[600px] 2xl:h-[600px]'>
                <img className='2xl:w-[600px] 2xl:h-[600px]' src='/img1.png' alt='img1'/>
            </div>
            <h3 className='text-center text-[19px] capitalize font-[200] pt-[33px] 2xl:text-[30px]'>Explore large, destructible environments where no two games are ever the same.</h3>
        </div>
        <div className='w-[300px] 2xl:w-[600px]'>
            <div className='h-[300px] w-[300px] bg-white 2xl:w-[600px] 2xl:h-[600px]'>
                <img className='2xl:w-[600px] 2xl:h-[600px]' src='/img2.png' alt='img2'/>
            </div>
            <h3 className='text-center text-[19px] capitalize font-[200] pt-[33px] 2xl:text-[30px]'>Team up with friends by sprinting, climbing and smashing your way to earn your Victory Royale</h3>
        </div>
        <div className='w-[300px] 2xl:w-[600px]'>
            <div className='h-[300px] w-[300px] bg-white 2xl:w-[600px] 2xl:h-[600px]'>
                <img className='2xl:w-[600px] 2xl:h-[600px]' src='/img3.png' alt='img3'/>
            </div>
            <h3 className='text-center text-[19px] capitalize font-[200] pt-[33px] 2xl:text-[30px]'>Discover even more ways to play across thousands of creator-made game genres</h3>
        </div>
    </div>
  )
}

export default Cards