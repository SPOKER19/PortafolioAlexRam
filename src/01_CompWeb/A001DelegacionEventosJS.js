import React from 'react'

export const A001DelegacionEventosJS = () => {   

    const fxSeleccionar = (e) => { 
        //console.log(e);  
        //console.log(e.target);                         
        fxCambiarFondo(e.target);
    }

    const fxCambiarFondo = (_bg) => {   
        _bg.classList.toggle("bg-blue-800");  
    } 



  return (
        <div>
            ESTOY AQUI
            <div className='flex flex-col items-center justify-center'>
                <table id="table" className="items-center justify-center table border-collapse"
                >
                    <thead className="">
                        <tr className="">
                            <th className="p-6 text-2xl font-bold text-black border-2 border-white bg-gradient-to-t from-yellow-300 to-orange-500">B</th>
                            <th className="p-6 text-2xl font-bold text-black border-2 border-white bg-gradient-to-t from-yellow-300 to-orange-500">I</th>
                            <th className="p-6 text-2xl font-bold text-black border-2 border-white bg-gradient-to-t from-yellow-300 to-orange-500">N</th>
                            <th className="p-6 text-2xl font-bold text-black border-2 border-white bg-gradient-to-t from-yellow-300 to-orange-500">G</th>
                            <th className="p-6 text-2xl font-bold text-black border-2 border-white bg-gradient-to-t from-yellow-300 to-orange-500">O</th>
                        </tr>
                    </thead>
                    <tfoot className="bg-gradient-to-t from-yellow-300 to-deep-orange-700">
                        <tr className="">
                            <th className="p-6 text-2xl font-bold text-black border-2 border-white bg-gradient-to-t from-yellow-300 to-orange-500">B</th>
                            <th className="p-6 text-2xl font-bold text-black border-2 border-white bg-gradient-to-t from-yellow-300 to-orange-500">I</th>
                            <th className="p-6 text-2xl font-bold text-black border-2 border-white bg-gradient-to-t from-yellow-300 to-orange-500">N</th>
                            <th className="p-6 text-2xl font-bold text-black border-2 border-white bg-gradient-to-t from-yellow-300 to-orange-500">G</th>
                            <th className="p-6 text-2xl font-bold text-black border-2 border-white bg-gradient-to-t from-yellow-300 to-orange-500">O</th>
                        </tr>
                    </tfoot>
                    <tbody className='items-center justify-center text-center'
                            onClick={(e) => fxSeleccionar(e)}
                    >
                        <tr className="">
                            <td className="p-6 text-2xl font-bold text-gray-200 border-2 border-white"> 1  </td>
                            <td className="p-6 text-2xl font-bold text-gray-200 border-2 border-white"> 19 </td> 
                            <td className="p-6 text-2xl font-bold text-gray-200 border-2 border-white"> 31 </td>
                            <td className="p-6 text-2xl font-bold text-gray-200 border-2 border-white"> 46 </td>
                            <td className="p-6 text-2xl font-bold text-gray-200 border-2 border-white"> 61 </td>                       
                        </tr>      
                        <tr className="">
                            <td className="p-6 text-2xl font-bold text-gray-200 border-2 border-white"> 2  </td>
                            <td className="p-6 text-2xl font-bold text-gray-200 border-2 border-white"> 17 </td> 
                            <td className="p-6 text-2xl font-bold text-gray-200 border-2 border-white"> 35 </td>
                            <td className="p-6 text-2xl font-bold text-gray-200 border-2 border-white"> 49 </td>
                            <td className="p-6 text-2xl font-bold text-gray-200 border-2 border-white"> 63 </td>                          
                        </tr>   
                        <tr className="">
                            <td className="p-6 text-2xl font-bold text-gray-200 border-2 border-white"> 5  </td>
                            <td className="p-6 text-2xl font-bold text-gray-200 border-2 border-white"> 23 </td> 
                            <td className="p-6 text-2xl font-bold text-gray-200 bg-blue-900 border-2 border-white"> L </td>
                            <td className="p-6 text-2xl font-bold text-gray-200 border-2 border-white"> 55 </td>
                            <td className="p-6 text-2xl font-bold text-gray-200 border-2 border-white"> 70 </td>                    
                        </tr>   
                        <tr className="">
                            <td className="p-6 text-2xl font-bold text-gray-200 border-2 border-white"> 8  </td>
                            <td className="p-6 text-2xl font-bold text-gray-200 border-2 border-white"> 29 </td> 
                            <td className="p-6 text-2xl font-bold text-gray-200 border-2 border-white"> 39 </td>
                            <td className="p-6 text-2xl font-bold text-gray-200 border-2 border-white"> 52 </td>
                            <td className="p-6 text-2xl font-bold text-gray-200 border-2 border-white"> 73 </td>                     
                        </tr>   
                        <tr className="">
                            <td className="p-6 text-2xl font-bold text-gray-200 border-2 border-white"> 10  </td>
                            <td className="p-6 text-2xl font-bold text-gray-200 border-2 border-white"> 26 </td> 
                            <td className="p-6 text-2xl font-bold text-gray-200 border-2 border-white"> 37 </td>
                            <td className="p-6 text-2xl font-bold text-gray-200 border-2 border-white"> 59 </td>
                            <td className="p-6 text-2xl font-bold text-gray-200 border-2 border-white"> 75 </td>                        
                        </tr>               
                    </tbody>
                </table>
            </div>
        </div>
  )
}
