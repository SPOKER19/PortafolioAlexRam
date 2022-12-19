import React from 'react'

export const A002CreacionAleatoriaCartonesBingo = () => {

    let numeros = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
      [17, 18, 19, 20],
    ]

  // const [ datosArray, setDatosArray ] =  useState(null);

 /*  const fxGenerarCartonBingo = (filas, columnas, valor=null) => {
    if(typeof filas !== 'number' || !Number.isInteger(filas)){
      throw TypeError("El Argumento Para las FILAS Debe Ser Un numero Entero")
    }
    if(filas <= 0){
      throw TypeError("El Argumento Para las FILAS Debe Ser Un numero Entero POSITIVO")
    }
    if(typeof columnas !== 'number' || !Number.isInteger(columnas)){
      throw TypeError("El Argumento Para las COLUMNAS Debe Ser Un numero Entero")
    }
    if(columnas <= 0){
      throw TypeError("El Argumento Para las COLUMNAS Debe Ser Un numero Entero POSITIVO")
    }


    //return Array.from({length: filas }).map(()=> Array.from({length: columnas}).fill(valor))
    
                return Array.from({length: filas }).map(function(item, i, array){
                    console.log("item =", item, "i =", i, "array = ", array);
                      Array.from({length: columnas}).map(function(item2, i2, array2){
                        return console.log("item2 =", item2, "i2 =", i2, "array2 = ", array2);
                      })
                })
                 
  } */

  /////////////////////******* */ */  FUNCIONA PERFECTO RECORRIDO DE ARRAY BIDIMENCIONAL ////////////////////******* */ */*/
  /* const fxGenerarNumerosAleatorios = () => {
    numeros.forEach(function(item, i, array) {
      console.log("item =", item, "i =", i, "array = ", array);
      item.forEach(function(item2, i2, array2) {
        console.log("item2 =", item2, "i2 =", i2, "array2 = ", array2);
      });
      console.log("---------------------");
    });
  } */
  /////////////////////******* */ */  FUNCIONA PERFECTO RECORRIDO DE ARRAY BIDIMENCIONAL ////////////////////******* */ */*/

  const fxGenerarNumerosAleatorios = () => {
    return numeros.forEach(function(fila) {      
            fila.forEach(function(colum, index) {                      
                  <tr key={index}
                            className="h-12 font-semibold hover:text-yellow-200 hover:bg-gray-900"
                        >
                          <td className="">
                              {colum}
                          </td>
                        </tr>
            })                   
    })
  }

  /* console.log(fxGenerarCartonBingo(3,5,"Rosa")); */
  
  return (
        <div className='flex flex-col items-center justify-center'>
          <div>
            <button className='p-4 bg-blue-600'
                    onClick={() => fxGenerarNumerosAleatorios()}
            >
               CLICK
            </button>
          </div>
           <table id="table" className="items-center justify-center table border-collapse"
            >
              {/* console.log("index =", index, "colum =", colum); */}
              <tbody className='items-center justify-center text-center'>
                  {fxGenerarNumerosAleatorios()};
                  {/*{linksModelos.map(({id, irAPag, description}) => {
                    return    <tr key={id}
                                  className="h-12 font-semibold hover:text-yellow-200 hover:bg-gray-900"
                              >
                                  <td className=""> {id} </td>
                                  <td className="">
                                      {description}
                                  </td>
                                  <td className="">
                                      <Link   to={irAPag}
                                              className=""
                                      >
                                          Ir a:
                                      </Link>
                                  </td>
                              </tr>
                  })}   */} 
              </tbody>  
                {/* <thead className="">
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
                </tfoot> */}
               {/*  <tbody className='items-center justify-center text-center'>
                    {fxGenerarCartonBingo()}
                </tbody> */}
                
                {/* <tbody className='items-center justify-center text-center'
                        // onClick={(e) => fxSeleccionar(e)}
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
                </tbody> */}
            </table>
        </div>
  )
}
