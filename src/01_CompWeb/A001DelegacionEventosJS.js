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
       
            <div className='flex flex-col items-center justify-center pt-28 pb-14'>
                <table id="table" className="items-center justify-center table border-collapse"
                >
                    <thead className="">
                        <tr className="">
                            <th className="p-3 font-bold text-black border-2 border-white md:text-2xl md:p-4 bg-gradient-to-t from-yellow-300 to-orange-500">B</th>
                            <th className="p-3 font-bold text-black border-2 border-white md:text-2xl md:p-4 bg-gradient-to-t from-yellow-300 to-orange-500">I</th>
                            <th className="p-3 font-bold text-black border-2 border-white md:text-2xl md:p-4 bg-gradient-to-t from-yellow-300 to-orange-500">N</th>
                            <th className="p-3 font-bold text-black border-2 border-white md:text-2xl md:p-4 bg-gradient-to-t from-yellow-300 to-orange-500">G</th>
                            <th className="p-3 font-bold text-black border-2 border-white md:text-2xl md:p-4 bg-gradient-to-t from-yellow-300 to-orange-500">O</th>
                        </tr>
                    </thead>
                    <tfoot className="bg-gradient-to-t from-yellow-300 to-deep-orange-700">
                        <tr className="">
                            <th className="p-3 font-bold text-black border-2 border-white md:p-4 md:text-2xl bg-gradient-to-t from-yellow-300 to-orange-500">B</th>
                            <th className="p-3 font-bold text-black border-2 border-white md:p-4 md:text-2xl bg-gradient-to-t from-yellow-300 to-orange-500">I</th>
                            <th className="p-3 font-bold text-black border-2 border-white md:p-4 md:text-2xl bg-gradient-to-t from-yellow-300 to-orange-500">N</th>
                            <th className="p-3 font-bold text-black border-2 border-white md:p-4 md:text-2xl bg-gradient-to-t from-yellow-300 to-orange-500">G</th>
                            <th className="p-3 font-bold text-black border-2 border-white md:p-4 md:text-2xl bg-gradient-to-t from-yellow-300 to-orange-500">O</th>
                        </tr>
                    </tfoot>
                    <tbody className='items-center justify-center text-center'
                            onClick={(e) => fxSeleccionar(e)}
                    >
                        <tr className="">
                            <td className="p-3 font-bold text-gray-200 border-2 border-white md:p-4 md:text-2xl"> 1  </td>
                            <td className="p-3 font-bold text-gray-200 border-2 border-white md:p-4 md:text-2xl"> 19 </td> 
                            <td className="p-3 font-bold text-gray-200 border-2 border-white md:p-4 md:text-2xl"> 31 </td>
                            <td className="p-3 font-bold text-gray-200 border-2 border-white md:p-4 md:text-2xl"> 46 </td>
                            <td className="p-3 font-bold text-gray-200 border-2 border-white md:p-4 md:text-2xl"> 61 </td>                       
                        </tr>      
                        <tr className="">
                            <td className="p-3 font-bold text-gray-200 border-2 border-white md:p-4 md:text-2xl"> 2  </td>
                            <td className="p-3 font-bold text-gray-200 border-2 border-white md:p-4 md:text-2xl"> 17 </td> 
                            <td className="p-3 font-bold text-gray-200 border-2 border-white md:p-4 md:text-2xl"> 35 </td>
                            <td className="p-3 font-bold text-gray-200 border-2 border-white md:p-4 md:text-2xl"> 49 </td>
                            <td className="p-3 font-bold text-gray-200 border-2 border-white md:p-4 md:text-2xl"> 63 </td>                          
                        </tr>   
                        <tr className="">
                            <td className="p-3 font-bold text-gray-200 border-2 border-white md:p-4 md:text-2xl"> 5  </td>
                            <td className="p-3 font-bold text-gray-200 border-2 border-white md:p-4 md:text-2xl"> 23 </td> 
                            <td className="p-3 font-bold text-gray-200 bg-blue-900 border-2 border-white md:p-4 md:text-2xl"> L </td>
                            <td className="p-3 font-bold text-gray-200 border-2 border-white md:p-4 md:text-2xl"> 55 </td>
                            <td className="p-3 font-bold text-gray-200 border-2 border-white md:p-4 md:text-2xl"> 70 </td>                    
                        </tr>   
                        <tr className="">
                            <td className="p-3 font-bold text-gray-200 border-2 border-white md:p-4 md:text-2xl"> 8  </td>
                            <td className="p-3 font-bold text-gray-200 border-2 border-white md:p-4 md:text-2xl"> 29 </td> 
                            <td className="p-3 font-bold text-gray-200 border-2 border-white md:p-4 md:text-2xl"> 39 </td>
                            <td className="p-3 font-bold text-gray-200 border-2 border-white md:p-4 md:text-2xl"> 52 </td>
                            <td className="p-3 font-bold text-gray-200 border-2 border-white md:p-4 md:text-2xl"> 73 </td>                     
                        </tr>   
                        <tr className="">
                            <td className="p-3 font-bold text-gray-200 border-2 border-white md:p-4 md:text-2xl"> 10  </td>
                            <td className="p-3 font-bold text-gray-200 border-2 border-white md:p-4 md:text-2xl"> 26 </td> 
                            <td className="p-3 font-bold text-gray-200 border-2 border-white md:p-4 md:text-2xl"> 37 </td>
                            <td className="p-3 font-bold text-gray-200 border-2 border-white md:p-4 md:text-2xl"> 59 </td>
                            <td className="p-3 font-bold text-gray-200 border-2 border-white md:p-4 md:text-2xl"> 75 </td>                        
                        </tr>               
                    </tbody>
                </table>
            </div>
       
  )
}
