import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import logo from './logo.svg';
import { FaBars, FaTimes } from 'react-icons/fa';


 export default function Navbar() {

    

    const Links = [  
     {id: 1, no:'00', to: '/home', text: 'HOME'},
     {id:2, no : '01', to: '/destination', text: 'DESCRIPTION'}, 
     {id:3, no : '02', to: '/crew', text: 'CREW'},
     {id:4, no: '03', to: '/technology', text:'TECHNOLOGY'}];

     const [Nav,setNav] = useState(false);
const ChNav = () => {
    return setNav(!Nav)
}    

    return ( 
        <div className='md:absolute fixed top-9 w-full '>
        <div className='Nav flex justify-between w-full  '>

            <NavLink to='/' className='mx-10 my-auto text-white '>
                <img src={logo} alt='logo.svg' />
            </NavLink>

            <hr width="37%" className='2lg:grid absolute border-1 opacity-100 z-50 left-36 top-7 hidden' ></hr>

            <ul className='hidden md:flex bg-gray-500 bg-opacity-25 z-10 h-16 text-sm pr-24 pl-16'>
                {Links.map(({id,to,no,text}) => { 
                    return (
                        <li key={id} className='  px-5 flex text-gray-200 h-full '>
                            <NavLink to={to} className={({ isActive }) => isActive ? 'text-white pt-5 flex h-full border-b-2 border-white border-solid ' : 'text-white flex pt-5  h-full '} >
                                <span className='mx-2 '>
                                {no}
                                </span>
                                 
                                <nav className='text-gray-500'>{text}</nav>
                    
                            </NavLink>

                            
                        </li>
                    )
                })}
            </ul>

            <div className=' md:hidden mx-10 my-auto text-white flex-row' onClick={ChNav}>
                {!Nav && /*? <FaTimes size={30} /> :*/ <FaBars size={30}/>}</div>

{Nav && <div className='fixed right-0 top-10'><ul className='  z-10 h-16  text-sm flex-col '>
                {Links.map(({id,to,text}) => { 
                    return (
                        <li key={id} className='bg-gray-500 bg-opacity-25 px-5 flex text-gray-200 h-full w-full justify-center'>
                            <NavLink to={to} className={({ isActive }) => isActive ? 'text-white pt-5 flex h-full border-b-2 border-white border-solid ' : 'text-white flex pt-5  h-full '} >
                            
                                 
                                <nav className='text-gray-500'>{text}</nav>
                    
                            </NavLink>

                            
                        </li>

                        
                    )
                })}
                   <div className='flex justify-center bg-gray-500 bg-opacity-25' onClick={ChNav}><FaTimes size={30} className='my-4'/></div>         
            </ul>
            
</div>}
            </div>
            
        
             
             
        </div>
    )}