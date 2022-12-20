import React from 'react';
import { Link } from "react-router-dom";
import  fotoPortada  from "../03_Imagenes/perfil/home1.png";

export const PortafolioAlex = () => {
  return (
        <div  name="home" 
              className='w-full text-yellow-200 md:h-screen bg-gradient-to-b from-black via-black to-gray-900'
        >
          <div className='flex flex-col items-center justify-center h-full max-w-screen-lg px-4 pt-24 mx-auto md:pt-24 md:flex-row'>
              <div className='flex flex-col justify-center h-full mx-2'>
                <div className='mt-10'>
                  <h2 className='text-4xl font-bold sm:text-5xl lg:text-6xl'>
                    I´m Full Stack Developer
                  </h2>
                  <p className='max-w-md py-4 text-justify text-gray-500'>
                    <span>■</span><span className='ml-2'>Tengo mas de 3 Años de Experiencia como Desarrollador Web.</span>  <br/>
                    <br/>
                    <span>■</span><span className='ml-2'>Actualmente me especializo en el manejo de Contratos Inteligentes bajo el Ambiente Solidity - Ethereum. </span><br/>
                    <br/>
                    <span>■</span><span className='ml-2'>Mi aplicaciones estan basadas en React-js.</span> <br/>
                  </p>
                </div>
                <div className=''>
                  <Link to={"/ZComponentesRealizados"}
                        className='flex items-center px-6 py-3 my-6 text-white rounded-md cursor-pointer group bg-gradient-to-r from-cyan-500 to-blue-800 w-fit'>
                      Portafolio
                      <span className='duration-300 group-hover:rotate-90'>
                        <ion-icon name="chevron-forward-outline"></ion-icon>
                      </span>
                  </Link>
                </div>
              </div>
              <div className='py-4'>
                  <img  src={fotoPortada} 
                        alt="Foto Portada" 
                        className='w-2/3 mx-auto lg:w-3/4 rounded-2xl'
                  /> 
              </div>
          </div>           
        </div>
  )
}

 