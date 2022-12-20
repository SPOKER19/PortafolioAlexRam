import React from 'react';
import { Link } from 'react-router-dom';
import imag01 from "../03_Imagenes/perfil/ManejoTecnologia/imag_001.png";
import imag02 from "../03_Imagenes/perfil/ManejoTecnologia/imag_002.png";
import imag03 from "../03_Imagenes/perfil/ManejoTecnologia/imag_003.png";
import imag04 from "../03_Imagenes/perfil/ManejoTecnologia/imag_004.png";
import imag05 from "../03_Imagenes/perfil/ManejoTecnologia/imag_005.png";
import imag06 from "../03_Imagenes/perfil/ManejoTecnologia/imag_006.png";
import imag07 from "../03_Imagenes/perfil/ManejoTecnologia/imag_007.png";
import imag08 from "../03_Imagenes/perfil/ManejoTecnologia/imag_008.png";


export const ZComponentesRealizados = () => {

    const TrabajosRealizados = [
        { id: 1, src: imag01, titulo: "Click en Carton de Bingo", link: "/A001DelegacionEventosJS", },
        { id: 2, src: imag02, titulo: "Mi Imagen 2" },
        { id: 3, src: imag03, titulo: "Mi Imagen 3" },
        { id: 4, src: imag04, titulo: "Mi Imagen 4" },
        { id: 5, src: imag05, titulo: "Mi Imagen 5" },
        { id: 6, src: imag06, titulo: "Mi Imagen 6" },
        { id: 7, src: imag07, titulo: "Mi Imagen 7" },
        { id: 8, src: imag08, titulo: "Mi Imagen 8" },
    ]

    const fxMostrarTrabajosRealizados = () => {
        return  TrabajosRealizados.map(trabajos => (            
            <Link   key={trabajos.id}
                    className='items-center justify-center w-full h-full px-4 py-2 rounded-lg shadow-md cursor-pointer shadow-gray-500 hover:bg-green-900'  
                    to={trabajos.link}
            >
                <div className='flex flex-col items-center justify-center w-full h-32 text-center duration-200 rounded-md hover:scale-105'>
                    {trabajos.titulo}
                </div>                    
                {/* <img src={trabajos.src} alt={trabajos.titulo} className='items-center justify-center h-32 duration-200 rounded-md w-60 hover:scale-105' /> */}
                <div className='flex items-center justify-center hover:bg-gray-900'>
                    <div   className='py-3 duration-200 hover:scale-105'                            
                    >
                        VER
                    </div>                    
                </div>
            </Link>            
        ))     
         
    }

  return (
    <div  name="ZComponentesRealizados" 
        className='w-full h-full text-yellow-200 bg-gradient-to-b from-black via-black to-gray-900'
    >
        <div className='flex flex-col items-center justify-center h-full max-w-screen-lg px-4 mx-auto pt-28 xs:pt-32'>        
            <div className='pb-8'>
                    <p className='inline text-2xl font-bold border-b-4 border-gray-500 xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>
                        COMPONENTES REALIZADOS
                    </p>
                    <p className='py-6 text-sm font-bold xs:text-base sm:text-lg md:text-xl'>
                        Dale un Vistazo a mis trabajos
                    </p>
            </div>
            <div    className='grid items-center justify-center gap-8 mb-20 text-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
            >
            {/* <div> */}
                {fxMostrarTrabajosRealizados()}
            </div>
           
           
        </div>
    </div>
  )
}

 