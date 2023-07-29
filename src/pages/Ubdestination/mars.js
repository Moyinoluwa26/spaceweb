import React from 'react';
import MarImg from './image-mars.png';

/*[
    
    {
      "name": "Mars",
      "images": {
        "png": "./assets/destination/image-mars.png",
        "webp": "./assets/destination/image-mars.webp"
      },
      "description": "",
      "distance": "",
      "travel": "9 months"
    },*/

function Mars() {
    return ( <div className=' flex md:flex-row flex-col w-full jutify-center '>
    <div className='flex md:w-1/2 justify-center items-center '>
      <img src={MarImg} alt='moon' className='w-64'/></div>
    <div className='ml-10 flex mt-12 md:mt-0 md:w-5/12 flex-col justify-center items-center  '>

      <div className='flex text-8xl mb-5 '>Mars</div>
      < span className='w-3/4 mb-5 '>
      Don’t forget to pack your hiking boots. 
      You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. 
      It’s two and a half times the size of <span className='mx-auto'>Everest!</span></span> 
      <hr width="90%" className='mx-auto border-gray-500 my-2' ></hr>
      
      < div className='flex flex-row justify-between'>
      <div className='mr-10 '>
        <p className='text-sm text-gray-500'>AVG.DISTANCE</p>
        <p className='pl-2 pt-2'>225 mil. km</p>
      </div>
      <div className='ml-10  flex flex-col'>
        <p className='text-sm text-gray-500'>EST.TRAVEL TIME</p>
        <p className='mx-auto pt-2'>9 months</p>
      </div>
      </div>


    </div>
</div> );
}

export default Mars;