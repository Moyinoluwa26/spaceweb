import React from 'react';
import MoonImg from './image-moon.png';

export default function Moon () {
/*{
        "name": "Moon",
        "images": {
          "png": "./assets/destination/image-moon.png",
          "webp": "./assets/destination/image-moon.webp"
        },
        "description": ",
        "distance": "",
        "travel": "3 days"
      },
*/
    return (
        <div className=' flex md:flex-row w-full jutify-center flex-col '>
            <div className='flex md:w-1/2 justify-center items-center '>
              <img src={MoonImg} alt='moon' className='w-64'/></div>
            <div className='ml-10 flex md:w-5/12 flex-col justify-center items-center mt-12 md:mt-0  '>

              <div className='flex text-8xl mb-5 '>Moon</div>
              < span className='w-3/4 mb-5'>
              See our planet as you’ve never seen it before. <br/> 
              A perfect relaxing trip away to help regain perspective and come back refreshed. <br/>
              While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.
              </span> 
              <hr width="90%" className='mx-auto border-gray-500 my-2' ></hr>
              
              < div className='flex flex-row justify-between'>
              <div className='mr-10 '>
                <p className='text-sm text-gray-500'>AVG.DISTANCE</p>
                <p className='pl-2 pt-2'>384,400 km</p>
              </div>
              <div className='ml-10  flex flex-col'>
                <p className='text-sm text-gray-500'>EST.TRAVEL TIME</p>
                <p className='mx-auto pt-2'>3 days</p>
              </div>
              </div>


            </div>
        </div>
    )
} 