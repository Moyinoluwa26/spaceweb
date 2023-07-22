import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

function Navigation () {

    const Links = [  
        {id: 1, no:'00', to: '/destination/moon', text: 'MOON'},
        {id:2, no : '01', to: '/destination/mars', text: 'MAR'}, 
        {id:3, no : '02', to: '/destination/europa', text: 'EUROPA'},
    {id:4, no: '03', to: '/destination/titans', text:'TITANS'}];

    return ( < div  className="flex mt-40 w-2/5 ml-36">
        <div className=' flex  justify-center '>
        <ul className='flex  z-10 text-sm   items-center h-12'>
                {Links.map(({id,to,text}) => { 
                    return (
                        <li key={id} className='  px-5 flex text-gray-200 h-full '>
                            <NavLink to={to} className={({ isActive }) => isActive ? 'text-white pt-5 flex h-full border-b-2 border-white border-solid ' : 'text-white flex pt-5  h-full '} >
                            
                                 
                                <nav className='text-gray-500'>{text}</nav>
                    
                            </NavLink>

                            
                        </li>
                    )
                })}
            </ul>
        </div>

        <Outlet/>
    </div> );
}

export default Navigation ;