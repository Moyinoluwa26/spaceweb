import React from 'react';
import LunchImg from './image-launch-vehicle-portrait.jpg';

/*
   "name": "",
   "images": {
     "portrait": "./assets/technology/image-launch-vehicle-portrait.jpg",
     "landscape": "./assets/technology/image-launch-vehicle-landscape.jpg"
   },
   "description": ""
*/

 function Launch () {
    return (  <div className='flex w-full justify-between ml-14'>
      <div className='my-16 '>
         <h1 className='text-sm text-gray-500'>THE TERMINOLOGY.....</h1>
         <h2 className='text-6xl text-white my-4 '>Launch vehicle</h2>
         <h1 className=' text-white mr-48'>A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!</h1>

      </div>
      
      <img src={LunchImg} alt='launch' className='flex h-96'/>

    </div>);
 }

 export default Launch ;