import React from 'react';
import ImagReactJs from "../03_Imagenes/perfil/TeconogiasAprendidas/001_ReactJs.png"
import ImagHtmlCss from "../03_Imagenes/perfil/TeconogiasAprendidas/002_HtmlYCss.png"
import ImagJs from "../03_Imagenes/perfil/TeconogiasAprendidas/003_Js.png"
import ImagTailwind from "../03_Imagenes/perfil/TeconogiasAprendidas/004_TailwindCss.png"
import ImagSolidity from "../03_Imagenes/perfil/TeconogiasAprendidas/005_Solidity.png"
import ImagMoralis from "../03_Imagenes/perfil/TeconogiasAprendidas/006_Moralis.png"
import ImagNodeNpm from "../03_Imagenes/perfil/TeconogiasAprendidas/007_NodeNpm.png"
import ImagGitHub from "../03_Imagenes/perfil/TeconogiasAprendidas/008_GitHub.png"
import ImagFirebase from "../03_Imagenes/perfil/TeconogiasAprendidas/009_Firebase.png"
import ImagGitBook from "../03_Imagenes/perfil/TeconogiasAprendidas/010_GitBook.png"
import ImagPhotoShop from "../03_Imagenes/perfil/TeconogiasAprendidas/011_PhotoShop.png"
import ImagMQL4 from "../03_Imagenes/perfil/TeconogiasAprendidas/012_Mql4.png"


export const ZTecnologiasAprendidas = () => {    

    const TecnologiasDominadas = [
        { id: 1, src: ImagReactJs, titulo: "React Js", style: "shadow-blue-500" },
        { id: 2, src: ImagHtmlCss, titulo: "Html & Css", style: "shadow-orange-500" },
        { id: 3, src: ImagJs, titulo: "Javascript", style: "shadow-yellow-300" },
        { id: 4, src: ImagTailwind, titulo: "TailwindCss", style: "shadow-teal-400" },
        { id: 5, src: ImagSolidity, titulo: "Solidity", style: "shadow-gray-500" },
        { id: 6, src: ImagMoralis, titulo: "Moralis", style: "shadow-green-400" },
        { id: 7, src: ImagNodeNpm, titulo: "Node & Npm", style: "shadow-red-600" },
        { id: 8, src: ImagGitHub, titulo: "Git Hub", style: "shadow-blue-gray-700" },
        { id: 9, src: ImagFirebase, titulo: "Firebase", style: "shadow-cyan-300" },
        { id: 10, src: ImagGitBook, titulo: "Git Book", style: "shadow-light-blue-800" },
        { id: 11, src: ImagPhotoShop, titulo: "PhotoShop", style: "shadow-blue-700" },
        { id: 12, src: ImagMQL4, titulo: "MQL4", style: "shadow-amber-900" },       
    ]

    const fxMostrarTecnologiasAprendidas = () => {
        return  TecnologiasDominadas.map(tecnologias => (            
            <div    key={tecnologias.id}
                    className={`${tecnologias.style} items-center justify-center w-full h-full px-5 duration-500 rounded-lg shadow-md hover:scale-105`}                      
            >
                <img src={tecnologias.src} alt={tecnologias.titulo} className='items-center justify-center w-48 h-32 p-2 rounded-md' />
                <div className='flex items-center justify-center'>
                    <p>{tecnologias.titulo}</p>
                </div>
            </div>            
        ))     
         
    }
    

  return (
        <div  name="ZTecnologiasAprendidas" 
            className='w-full h-full text-yellow-200 bg-gradient-to-b from-black via-black to-gray-900'
        >
            <div className='flex flex-col items-center justify-center h-full max-w-screen-lg px-4 mx-auto text-center pt-28 xs:pt-32'>        
                <div className='pb-8'>
                        <p className='inline text-lg font-bold border-b-4 border-gray-500 xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>
                            Experiencia
                        </p>
                        <p className='py-6 text-sm font-bold xs:text-base sm:text-lg md:text-xl'>
                            Tecnologias con las que he trabajado
                        </p>
                </div>
                <div    className='grid items-center justify-center gap-8 mb-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
                >                
                    {fxMostrarTecnologiasAprendidas()}
                </div>
            
            
            </div>
        </div>
  )
}

