import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Links = [  
    {id: 1, no:'00', to: '/technology/Launch', text: 1},
    {id:2, no : '01', to: '/technology/SpaceCap', text: 2}, 
    {id:3, no : '02', to: '/technology/Sport', text: 3}];

 function TechNav () {
    return (< div  className="flex ">
    <div className=' flex  justify-cente '>
    <ul className='flex mt-12 ml-24 w-36 z-10 text-sm  items-center  justify-between md:flex-col flex-row'>
            {Links.map(({id,to,text}) => { 
                return (
                    <li key={id} className=' md:my-4 my-8 md:mx-0 mx-4'>
                        <NavLink to={to} className={({ isActive }) => isActive ? ' h-full border-solid border-white rounded- bg-white rounded-full text-black border-2  flex ' : ' flex rounded-full  border-solid border-white border-2 '} >
                        
                             
                            <nav className='w-12 h-12 md:w-20 md:h-20 flex justify-center items-center text-2xl'>{text}</nav>
                            
                
                        </NavLink>

                        
                    </li>
                )
            })}
        </ul>
    </div>
    
    <Outlet/>
    </div>
);
 }
 
 export default TechNav ;