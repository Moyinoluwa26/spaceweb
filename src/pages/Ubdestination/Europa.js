import React from 'react';
import EuroImg from './image-europa.png'

/*{
    "name": "Europa",
    "images": {
      "png": "./assets/destination/image-europa.png",
      "webp": "./assets/destination/image-europa.webp"
    },
    "description": "",
    "distance": "",
    "travel": "3 years"
  }*/

function Europa () {
    return ( <div><div className=' flex  w-full jutify-center '>
    <div className='flex w-1/2 justify-center items-center '>
      <img src={EuroImg} alt='moon' className='w-64'/></div>
    <div className='ml-10 flex w-5/12 flex-col justify-center items-center  '>

      <div className='flex text-8xl mb-5 '>Europa</div>
      < span className='w-3/4 mb-5 '>
      The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream.
      With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.</span> 
      <hr width="90%" className='mx-auto border-gray-500 my-2' ></hr>
      
      < div className='flex flex-row justify-between'>
      <div className='mr-10 '>
        <p className='text-sm text-gray-500'>AVG.DISTANCE</p>
        <p className='pl-2 pt-2'>628 mil. km</p>
      </div>
      <div className='ml-10  flex flex-col'>
        <p className='text-sm text-gray-500'>EST.TRAVEL TIME</p>
        <p className='mx-auto pt-2'>3 years</p>
      </div>
      </div>


    </div>
</div></div> );
}

export default Europa ;