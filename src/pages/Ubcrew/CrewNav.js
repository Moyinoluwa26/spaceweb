import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

 export default function CrewNav () {

    const Links = [  
        {id: 1, no:'00', to: '/crew/douglas', text: ''},
        {id:2, no : '01', to: '/crew/mark', text: ''}, 
        {id:3, no : '02', to: '/crew/victor', text: ''},
    {id:4, no: '03', to: '/crew/anouseh', text:''}];

    return ( < div  className="flex ">
        <div className=' flex  justify-center '>
        <ul className='flex  z-10 text-sm  w-18 items-center h-8'>
                {Links.map(({id,to}) => { 
                    return (
                        <li key={id} className='  px-3 flex  h-3 w-3 '>
                            <NavLink to={to} className={({ isActive }) => isActive ? ' h-full bg-white rounded-full  flex  ' : 'bg-gray-500 flex rounded-full '} >
                            
                                 
                                <nav className=' w-3 h-3 '></nav>
                    
                            </NavLink>

                            
                        </li>
                    )
                })}
            </ul>
        </div>

        <Outlet/>
    </div> );
}
