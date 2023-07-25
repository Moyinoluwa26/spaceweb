import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Links = [  
    {id: 1, no:'00', to: '/crew/douglas', text: 'Many'},
    {id:2, no : '01', to: '/crew/mark', text: 'Two'}, 
    {id:3, no : '02', to: '/crew/victor', text: 'Three'}];

 function TechNav () {
    return (< div  className="flex ">
    <div className=' flex  justify-center '>
    <ul className='flex  z-10 text-sm  w-18 items-center h-8'>
            {Links.map(({id,to,text}) => { 
                return (
                    <li key={id} className='  px-3 flex  h-3 w-3 '>
                        <NavLink to={to} className={({ isActive }) => isActive ? ' h-full bg-white rounded-full  flex  ' : 'bg-gray-500 flex rounded-full '} >
                        
                             
                            <nav className=' w-5 h-5'>{text}</nav>
                            
                
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