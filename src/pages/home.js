import React from 'react';
import lapview from "../home/background-home-desktop.jpg";
/*import tabview from '../home/background-home-tablet.jpg';
import mobview from '../home/background-home-mobile.jpg';*/

export default function Homp() {
    
    return (
        <div className='w-full md:h-screen  flex  md:flex-row flex-col-reverse items-center text-white' style={{ backgroundImage: `url(${lapview})` }}>
            <div className='h-full w-3/5  flex justify-center items-center  '>
                <div className='flex justify-center flex-col mx-auto'>
              <h1 className='mt-20'> SO, YOU WANT TO TRAVEL TO </h1>
              <h1 className='text-8xl my-5'>SPACE</h1>
              <h3>let's face it: if you want to go to space , you might as well <br/>
                  genuinely go to outer space and not hover kind of on the <br/>
                  edge of it . Well sit back and relax because wee'll give you <br/>
                  a truly out of this world experience! </h3>
                </div>
            </div>
            <div className='flex justify-center items-center h-full  w-2/5  ' > 
                <div className='h-36 w-36 bg-white text-black flex items-center justify-center rounded-full mt-36'>EXPLORE</div>
            </div>
        </div>
    )};

