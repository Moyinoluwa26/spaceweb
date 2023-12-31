import React from 'react';
import AnImg from './image-anousheh-ansari.webp';


/*{
    "name": "",
    "images": {
      "png": "./assets/crew/image-anousheh-ansari.png",
      "webp": "./assets/crew/image-anousheh-ansari.webp"
    },
    "role": "Flight Engineer",
    "bio": ""
  }*/


  function Anouseh() {
    return ( <div className='flex md:flex-row flex-col-reverse w-9/12 mr-9  md:mt-0 mt-8'>
    <div className='md:w-1/2 flex flex-col'>
      <h1 className='py-2 text-3xl text-gray-500 mx-auto md:mx-0'>Flight Engineer</h1>
      <span className='py-2 text-4xl my-3 mx-auto md:mx-0'>Anousheh Ansari</span>
      <p className='text-lg'>Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.</p>
    </div>
    <div className='flex mx-auto'><img src={AnImg} alt='Douglas' className=  ' mx-auto  h-96 md:mb-0 mb-10'  /></div>
  </div>  );
  }
  
  export default Anouseh;