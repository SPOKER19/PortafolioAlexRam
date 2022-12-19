import React, { useState } from 'react';
import { Link } from "react-router-dom";

export const NavBar = () => {

    const [ nav, setNav ] = useState (false);

    const links = [
        { id: 1, titulo: "home", link:"/"},
        { id: 2, titulo: "about", link:"/ZAbout"},
        { id: 3, titulo: "portafolio", link:"/ZComponentesRealizados"},
        { id: 4, titulo: "experience", link:"/ZTecnologiasAprendidas"},
        { id: 5, titulo: "contact", link:"/ZContact"},
    ]

    const fxmostrarLinks = () => {
        return  links.map(items => (
            <li key={items.id}
                className='px-4 pt-5 mr-3 font-medium text-gray-500 capitalize duration-200 cursor-pointer hover:scale-110 hover:text-yellow-200'
            >
               <Link to={items.link}>
                    {items.titulo}
                </Link>               
            </li>
        ))
         
    }

    const fxmostrarLinksMovil = () => {
        return  links.map(items => (
            <li key={items.id}
                className='w-full px-4 py-6 text-3xl text-center capitalize cursor-pointer hover:bg-black hover:text-yellow-400'
            >
                <Link   to={items.link}
                        onClick={() => setNav(!nav) }
                >
                    {items.titulo}
                </Link>
            </li>            
        ))
         
    }


  return (
        <div className='fixed flex justify-between w-full h-20 px-4 py-2 text-white bg-black'>
            <div className=''>
                <h1 className='ml-1 text-xl xs:text-2xl md:text-3xl lg:text-5xl'>Alexander Ramirez</h1>
                <div className='flex flex-row'>
                    <div className='w-4 h-4 pt-5 mt-1 bg-yellow-300 rounded-full sm:bg-green-400 md:bg-purple-500 lg:bg-pink-300 xl:bg-lime-600'>                        
                    </div>
                    <h4 className='ml-3 text-lg'>Developer</h4>
                </div>
            </div>

            <ul className='hidden md:flex'>
                {fxmostrarLinks()}                           
            </ul>

            <div    className='z-50 pt-2 cursor-pointer hover:text-yellow-200 md:hidden'
                    onClick={() => setNav(!nav)}
            >
                {(nav)
                    ?   <span className='text-4xl'>
                            <ion-icon name="close-outline"></ion-icon>
                        </span>
                    :   <span className='text-4xl'>
                            <ion-icon name="reorder-four-outline"></ion-icon> 
                        </span>
                }
                
            </div>

            {nav && (
                <ul className='absolute top-0 left-0 z-30 flex flex-col items-center justify-center w-full h-screen bg-gradient-to-t from-blue-gray-800 via-blue-gray-800 to-gray-900'>
                    {fxmostrarLinksMovil()}                
                </ul>
            )}

            
        </div>
  )
}
