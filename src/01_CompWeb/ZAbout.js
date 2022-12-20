import React from 'react'

export const ZAbout = () => {
  return (
        <div  name="ZAbout" 
            className='w-full h-full text-yellow-200 xs:h-screen bg-gradient-to-b from-black via-black to-gray-900'
        >
            <div className='flex flex-col items-center justify-center h-full max-w-screen-lg px-4 mx-auto pt-28 xs:pt-32'>
               
               <div className='pb-8'>
                    <p className='inline text-2xl font-bold border-b-4 border-gray-500 sm:text-3xl md:text-4xl lg:text-5xl'>
                        About / Acerca
                    </p>
               </div>
               <div className='mt-4 mb-10 text-lg text-justify text-gray-500'>
                    <ul className='mx-3 space-y-5 list-disc sm:mx-10'>
                        <li>
                            Soy una persona organizada que cumple con las labores y requerimientos que se le exigen y soy   capaz de liderar y solucionar problemas rápidamente.
                        </li>
                        <li>
                            Poseo valores como la responsabilidad y el trabajo en equipo.
                        </li>
                        <li>
                            Soy Ingeniero de Sistemas Informáticos, con conocimientos sólidos en Planificación, Control y Gestión.
                        </li>
                        <li>
                            Competente en ámbito técnico, tecnológico y operativo, para analizar, diseñar e implementar cualquier tarea que se me asigne. Así mismo puedo desempeñarme como administrador de plataformas tecnológicas, Con capacidad de brindar soporte técnico y lógico a todo el equipo de trabajo.
                        </li>
                        <li>
                            De buenas relaciones interpersonales y habilidad para trabajar en equipo o individual. Con un alto grado de responsabilidad y se cumplir y respetar las políticas organizacionales de la empresa en la que me desempeñe.                    
                        </li>                        
                    </ul>                     
               </div>

            </div>
        </div>
  )
}
