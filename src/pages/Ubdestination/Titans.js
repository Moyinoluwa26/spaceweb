import React from 'react';
import TitImg from './image-titan.png';


/*"name": "Titan",
      "images": {
        "png": "./assets/destination/image-titan.png",
        "webp": "./assets/destination/image-titan.webp"
      },
      "description": "",
      "distance": "",
      "travel": "7 years"*/

function Titans() {
    return (<div><div className=' flex md:flex-row flex-col w-full jutify-center '>
    <div className='flex md:w-1/2 justify-center items-center '>
      <img src={TitImg} alt='moon' className='w-64'/></div>
    <div className='ml-10 flex mt-12 md:mt-0 md:w-5/12 flex-col justify-center items-center  '>

      <div className='flex text-8xl mb-5 '>Titans</div>
      < span className='w-3/4 mb-5 '>
      The only moon known to have a dense atmosphere other than Earth, 
      Titan is a home away from home (just a few hundred degrees colder!). 
      As a bonus, you get striking views of the Rings of Saturn.
      </span> 
      <hr width="90%" className='mx-auto border-gray-500 my-2' ></hr>
      
      < div className='flex flex-row justify-between'>
      <div className='mr-10 '>
        <p className='text-sm text-gray-500'>AVG.DISTANCE</p>
        <p className='pl-2 pt-2'>1.6 bil. km</p>
      </div>
      <div className='ml-10  flex flex-col'>
        <p className='text-sm text-gray-500'>EST.TRAVEL TIME</p>
        <p className='mx-auto pt-2'>7 years</p>
      </div>
      </div>


    </div>
</div></div> 
    
     );
}

export default Titans;