import React from 'react'

export const A006EstructuraDivisoriaPagWeb = () => {
  return (
        <div className='flex flex-col items-center justify-center w-full h-full'>
            <div className='z-0 flex flex-wrap items-center w-full h-96 p-1 overflow-hidden lg:justify-around'>                
                <div className='flex items-center self-stretch justify-center w-full sm:w-1/2 bg-gradient-to-tr from-deep-orange-400 to-teal-600 hover:bg-blue-gray-800 xl:flex-1 '>
                    <div className='flex flex-col items-center justify-center object-cover w-full bg-center bg-cover'>
                    CUADRO 01                                             
                    </div>
                </div>
                <div className='flex items-center self-stretch justify-center w-full sm:w-1/2 bg-gradient-to-tr from-deep-orange-400 to-teal-600 hover:bg-blue-gray-800 xl:flex-1 '>
                    <div className='flex flex-col items-center justify-center object-cover w-full bg-center bg-cover'>
                        CUADRO 02                                             
                    </div>
                </div>
                <div className='flex items-center self-stretch justify-center w-full sm:w-1/2 bg-gradient-to-tr from-deep-orange-400 to-teal-600 hover:bg-blue-gray-800 xl:flex-1 '>
                    <div className='flex flex-col items-center justify-center object-cover w-full bg-center bg-cover'>
                        CUADRO 03                                            
                    </div>
                </div>
                <div className='flex items-center self-stretch justify-center w-full sm:w-1/2 bg-gradient-to-tr from-deep-orange-400 to-teal-600 hover:bg-blue-gray-800 xl:flex-1 '>
                    <div className='flex flex-col items-center justify-center object-cover w-full bg-center bg-cover'>
                        CUADRO 04                                             
                    </div>
                </div>            
            </div>            
        </div>
  )
}

 