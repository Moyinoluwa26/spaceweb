import React from 'react';
import spotImg from './image-spaceport-portrait.jpg';
/*"name": "Spaceport",
      "images": {
        "portrait": "./assets/technology/image-spaceport-portrait.jpg",
        "landscape": "./assets/technology/image-spaceport-landscape.jpg"
      },
      "description": ""
    },*/

 function Sport() {
    return (  <div className='flex w-full justify-between md:ml-14 md:flex-row flex-col-reverse'>
    <div className='my-16 md:ml-0 ml-8'>
       <h1 className='text-sm text-gray-500'>THE TERMINOLOGY.....</h1>
       <h2 className='text-6xl text-white my-4 '>Spaceport</h2>
       <h1 className=' text-white md:mr-48'>A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.</h1>

    </div>
    
    <img src={spotImg} alt='launch' className='flex h-96 md:mx-0 mx-auto'/>

  </div>);
 }
 
 export default Sport;