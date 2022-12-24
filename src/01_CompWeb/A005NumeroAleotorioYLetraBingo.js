import React, { useState } from 'react';
import Swal from 'sweetalert2';


export const A005NumeroAleotorioYLetraBingo = () => {
    

    const [ numeroInicial ] = useState(1);
    const [ numeroFinal ] = useState(75);
    const [ nuevoArrayAleatorio, setArrayFinalAleatorio ] = useState([]);
    const [ numeroActual, setNumeroActual ] = useState(0);
    let faltanPorSalir = numeroFinal - nuevoArrayAleatorio.length
    //------------------------------------------------------------  
    
    /* const fxCrearBolasDeBingo = useCallback (() => { 
        let arrayDeBolasDeBingo = [];  // Array que crea las 75 Bolas de Bingo  
        for (let index = 1; index < 76; index++) {
            arrayDeBolasDeBingo.push(index);           
        }        
    }, []); */

    // FX  CLONAR ARRAY
    /* const fxClonarArray = (_Array) => {
        return _Array.slice(0);
    } */

    // FX  ORDENAR ARRAY
    //function fxOrdenarArray ( a, b ){ return a.numeroBola > b.numeroBola; }  //(a,b) => a.proveedor > b.proveedor)

    // FX VALIDAR SI EXISTE DATO EN ARRAY TIPO OBJETO
    function fxValidarDatoEnArrayObjet (_valorABuscar) {         
        let valor = nuevoArrayAleatorio.findIndex((item) => item.numeroBola === _valorABuscar);
        if(valor === -1){            
            return false;
        }else{
            return true;
        }       
    }


    const fxObtenerNumAleatorioDeBingo = () => {            

        if(nuevoArrayAleatorio.length < 75){ 
            let numeroRamdom = Math.floor(Math.random()*(numeroFinal - numeroInicial + 1) + numeroInicial);
            // console.log("numeroRamdom = ", numeroRamdom);
    
            var indice = fxValidarDatoEnArrayObjet(numeroRamdom);
            //console.log("indice = ", indice);        
                            
            if(indice === false){  
                //console.log("Valor Ramdom = ", numeroRamdom);          
                switch (true) {                    
                    case numeroRamdom >= 1 && numeroRamdom <=15 : 
                        setNumeroActual("B-" + numeroRamdom); 
                        setArrayFinalAleatorio([...nuevoArrayAleatorio, {
                            letra: "B",
                            numeroBola: numeroRamdom,                        
                            NombreBola: "B-"+numeroRamdom
                        }]);                      
                    break  
                    case numeroRamdom >= 16 && numeroRamdom <=30 :
                        setNumeroActual("I-" + numeroRamdom); 
                        setArrayFinalAleatorio([...nuevoArrayAleatorio, {
                            letra: "I",
                            numeroBola: numeroRamdom,                        
                            NombreBola: "I-"+numeroRamdom
                        }]);                        
                    break
                    case numeroRamdom >= 31 && numeroRamdom <=45 :
                        setNumeroActual("N-" + numeroRamdom); 
                        setArrayFinalAleatorio([...nuevoArrayAleatorio, {
                            letra: "N",
                            numeroBola: numeroRamdom,                        
                            NombreBola: "N-"+numeroRamdom
                        }]);                       
                    break  
                    case numeroRamdom >= 46 && numeroRamdom <=60 :
                        setNumeroActual("G-" + numeroRamdom); 
                        setArrayFinalAleatorio([...nuevoArrayAleatorio, {
                            letra: "G",
                            numeroBola: numeroRamdom,                        
                            NombreBola: "G-"+numeroRamdom
                        }]);                      
                    break
                    default :
                        setNumeroActual("O-" + numeroRamdom); 
                        setArrayFinalAleatorio([...nuevoArrayAleatorio, {
                            letra: "O",
                            numeroBola: numeroRamdom,                        
                            NombreBola: "O-"+numeroRamdom
                        }]);                        
                    break
                } 
               /*  if(numeroRamdom >= 1 && numeroRamdom <=15){ 
                    let letraNumero = "B-" + numeroRamdom; 
                    setArrayFinalAleatorio([...nuevoArrayAleatorio, {
                        letra: "B",
                        numeroBola: numeroRamdom,                        
                        NombreBola: "B-"+numeroRamdom
                    }]);    
                    setNumeroActual(letraNumero); 
                }
                else if(numeroRamdom >= 16 && numeroRamdom <=30){  
                    let letraNumero = "I-" + numeroRamdom; 
                    setArrayFinalAleatorio([...nuevoArrayAleatorio, {
                        letra: "I",
                        numeroBola: numeroRamdom,                        
                        NombreBola: "I-"+numeroRamdom
                    }]);  
                    setNumeroActual(letraNumero);                                     
                }
                else if(numeroRamdom >= 31 && numeroRamdom <=45){  
                    let letraNumero = "N-" + numeroRamdom;                 
                    setArrayFinalAleatorio([...nuevoArrayAleatorio, {
                        letra: "N",
                        numeroBola: numeroRamdom,                        
                        NombreBola: "N-"+numeroRamdom
                    }]);    
                    setNumeroActual(letraNumero);                                
                }
                else if(numeroRamdom >= 46 && numeroRamdom <=60){ 
                    let letraNumero = "G-" + numeroRamdom; 
                    setArrayFinalAleatorio([...nuevoArrayAleatorio, {
                        letra: "G",
                        numeroBola: numeroRamdom,                        
                        NombreBola: "G-"+numeroRamdom
                    }]);       
                    setNumeroActual(letraNumero);      
                }
                else if (numeroRamdom >= 61 && numeroRamdom <=75){ 
                    let letraNumero = "O-" + numeroRamdom;
                    setArrayFinalAleatorio([...nuevoArrayAleatorio, {
                        letra: "O",
                        numeroBola: numeroRamdom,                        
                        NombreBola: "O-"+numeroRamdom
                    }]);    
                    setNumeroActual(letraNumero);                                
                }else{
                    console.log("NO ESTA DENTRO DEL RANGO");
                } */
                 
            }else{
                //console.log("Valor de Indice DUPLICADO IndexOF = ", indice);
                fxObtenerNumAleatorioDeBingo();
            }
        }else{
            // alert("YA SE LLENO EL ARRAY CON 75 POSICIONES");
            Swal.fire({
                title: 'Los 75 Numeros ya Salieron',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              })
        }             
    }

    const fxLimpiarVariables = () => {
        setArrayFinalAleatorio([]);
        setNumeroActual(0);
    }
        
    
    return (
        <div className='flex flex-col items-center justify-center w-full h-full text-black'>
            <div className='mt-24'></div>
            <div className='flex flex-col items-center justify-center w-full h-full p-1 xs:flex-row'>
                <div className='flex flex-wrap items-center w-full h-full p-1 overflow-hidden bg-gradient-to-b from-yellow-200 via-light-blue-900 to-yellow-500 md:justify-around'>                
                    {/* ----------------------------------------- */}
                    <div className='flex flex-row items-center justify-center w-full mb-3'>
                        <div className='flex flex-col items-center justify-center w-full h-full'>
                            <div className='flex items-center justify-center w-full h-full'>
                                <div className='flex flex-col items-center justify-center w-full'>
                                    <div className='p-3 text-xl font-bold text-white bg-red-600 rounded-full sm:text-2xl md:text-3xl lg:text-4xl'>
                                        { numeroActual }
                                    </div> 
                                </div>
                            </div>
                            <div className='flex flex-col items-center justify-center w-full h-full mt-7 lg:flex-row '>
                                <div className='flex flex-col items-center justify-center object-cover w-full bg-center bg-cover'>
                                    <button className='flex flex-col items-center justify-center px-3 py-3 text-xs font-semibold text-white bg-blue-800 rounded-2xl hover:bg-black hover:text-yellow-300'
                                            onClick={fxObtenerNumAleatorioDeBingo}
                                    >
                                        OBTENER #
                                    </button>                                             
                                </div>
                                <div className='flex flex-col items-center justify-center object-cover w-full pt-4 bg-center bg-cover lg:pt-0'>
                                    <button className='flex flex-col items-center justify-center px-6 py-3 text-xs font-semibold text-white bg-red-600 rounded-2xl hover:bg-red-300'
                                            onClick={fxLimpiarVariables}
                                    >
                                        RESET
                                    </button>                                             
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col items-center justify-center w-full h-full'>
                            <div className='flex items-center justify-center w-full h-full'>
                                <div className='flex flex-col items-center justify-center w-full h-32'>
                                    <div className='flex flex-col items-center justify-center text-center text-centers'>
                                        <span className='text-sm font-bold md:text-lg'>RANGO ALEATORIO </span>                                        
                                        <span className='text-xs md:text-base'> DESDE = <span className='px-2 text-lg font-bold'> { numeroInicial }</span> </span>                                      
                                        <span className='text-xs md:text-base'> HASTA  = <span className='px-2 text-lg font-bold'> { numeroFinal }</span> </span>
                                       
                                    </div>                                            
                                </div>
                            </div>
                            <div className='flex flex-col items-center justify-center w-full h-full sm:flex-row'>
                                <div className='flex flex-col items-center justify-center w-full h-full text-center '>
                                    <div className='text-xs md:text-base'> HAN SALIDO</div>
                                    <div className='px-2 text-lg font-bold'> { nuevoArrayAleatorio.length }</div> 
                                    <div className='text-xs md:text-base'>NUMEROS</div>                                          
                                </div>
                                <div className='flex flex-col items-center justify-center w-full h-full text-center '>
                                    <div className='text-xs md:text-base'> FALTAN POR SALIR</div>
                                    <div className='px-2 text-lg font-bold'> { faltanPorSalir }</div> 
                                    <div className='text-xs md:text-base'>NUMEROS</div>                                       
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ----------------------------------------- */}                    
                    <div className='flex items-center self-stretch justify-center w-full bg-gradient-to-tr from-indigo-900 to-teal-900 hover:bg-blue-gray-800'>
                        <div className='flex flex-col items-center justify-center w-full py-5 md:hidden'>
                            <table id="table" className="items-center justify-center table border-collapse"
                            >
                                <thead className="">
                                    <tr className="">
                                        <th className="p-3 font-bold text-black border-2 border-white md:text-2xl md:p-4 bg-gradient-to-t from-light-blue-400 to-amber-800">B</th>
                                        <th className="p-3 font-bold text-black border-2 border-white md:text-2xl md:p-4 bg-gradient-to-t from-light-blue-400 to-amber-800">I</th>
                                        <th className="p-3 font-bold text-black border-2 border-white md:text-2xl md:p-4 bg-gradient-to-t from-light-blue-400 to-amber-800">N</th>
                                        <th className="p-3 font-bold text-black border-2 border-white md:text-2xl md:p-4 bg-gradient-to-t from-light-blue-400 to-amber-800">G</th>
                                        <th className="p-3 font-bold text-black border-2 border-white md:text-2xl md:p-4 bg-gradient-to-t from-light-blue-400 to-amber-800">O</th>
                                    </tr>
                                </thead>
                                <tfoot className="bg-gradient-to-t from-yellow-300 to-deep-orange-700">
                                    <tr className="">
                                        <th className="p-3 font-bold text-black border-2 border-white md:p-4 md:text-2xl bg-gradient-to-t from-light-blue-400 to-amber-800">B</th>
                                        <th className="p-3 font-bold text-black border-2 border-white md:p-4 md:text-2xl bg-gradient-to-t from-light-blue-400 to-amber-800">I</th>
                                        <th className="p-3 font-bold text-black border-2 border-white md:p-4 md:text-2xl bg-gradient-to-t from-light-blue-400 to-amber-800">N</th>
                                        <th className="p-3 font-bold text-black border-2 border-white md:p-4 md:text-2xl bg-gradient-to-t from-light-blue-400 to-amber-800">G</th>
                                        <th className="p-3 font-bold text-black border-2 border-white md:p-4 md:text-2xl bg-gradient-to-t from-light-blue-400 to-amber-800">O</th>
                                    </tr>
                                </tfoot>
                                <tbody className='items-center justify-center text-center'
                                        //onClick={(e) => fxSeleccionar(e)}
                                >
                                    <tr className="">
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white md:p-4 md:text-2xl"> 1  </td>
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white md:p-4 md:text-2xl"> 16 </td> 
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white md:p-4 md:text-2xl"> 31 </td>
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white md:p-4 md:text-2xl"> 46 </td>
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white md:p-4 md:text-2xl"> 61 </td>                       
                                    </tr>      
                                    <tr className="">
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white md:p-4 md:text-2xl"> 2  </td>
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white md:p-4 md:text-2xl"> 17 </td> 
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white md:p-4 md:text-2xl"> 32 </td>
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white md:p-4 md:text-2xl"> 47 </td>
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white md:p-4 md:text-2xl"> 62 </td>                          
                                    </tr>   
                                    <tr className="">
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white md:p-4 md:text-2xl"> 3  </td>
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white md:p-4 md:text-2xl"> 18 </td> 
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white md:p-4 md:text-2xl"> 33 </td> 
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white md:p-4 md:text-2xl"> 48 </td>
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white md:p-4 md:text-2xl"> 63 </td>                    
                                    </tr>   
                                    <tr className="">
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white md:p-4 md:text-2xl"> 4  </td>
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white md:p-4 md:text-2xl"> 19 </td> 
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white md:p-4 md:text-2xl"> 34 </td>
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white md:p-4 md:text-2xl"> 49 </td>
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white md:p-4 md:text-2xl"> 64 </td>                     
                                    </tr>   
                                    <tr className="">
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white md:p-4 md:text-2xl"> 5  </td>
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white md:p-4 md:text-2xl"> 20 </td> 
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white md:p-4 md:text-2xl"> 35 </td>
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white md:p-4 md:text-2xl"> 50 </td>
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white md:p-4 md:text-2xl"> 65 </td>                        
                                    </tr>       
                                    <tr className="">
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white md:p-4 md:text-2xl"> 6  </td>
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white md:p-4 md:text-2xl"> 21 </td> 
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white md:p-4 md:text-2xl"> 36 </td>
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white md:p-4 md:text-2xl"> 51 </td>
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white md:p-4 md:text-2xl"> 66 </td>                       
                                    </tr>      
                                    <tr className="">
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white md:p-4 md:text-2xl"> 7  </td>
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white md:p-4 md:text-2xl"> 22 </td> 
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white md:p-4 md:text-2xl"> 37 </td>
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white md:p-4 md:text-2xl"> 52 </td>
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white md:p-4 md:text-2xl"> 67 </td>                          
                                    </tr>   
                                    <tr className="">
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white md:p-4 md:text-2xl"> 8  </td>
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white md:p-4 md:text-2xl"> 23 </td> 
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white md:p-4 md:text-2xl"> 38 </td> 
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white md:p-4 md:text-2xl"> 53 </td>
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white md:p-4 md:text-2xl"> 68 </td>                    
                                    </tr>   
                                    <tr className="">
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white md:p-4 md:text-2xl"> 9  </td>
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white md:p-4 md:text-2xl"> 24 </td> 
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white md:p-4 md:text-2xl"> 39 </td>
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white md:p-4 md:text-2xl"> 54 </td>
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white md:p-4 md:text-2xl"> 69 </td>                     
                                    </tr>   
                                    <tr className="">
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white md:p-4 md:text-2xl"> 10  </td>
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white md:p-4 md:text-2xl"> 25 </td> 
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white md:p-4 md:text-2xl"> 40 </td>
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white md:p-4 md:text-2xl"> 55 </td>
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white md:p-4 md:text-2xl"> 70 </td>                        
                                    </tr> 
                                    <tr className="">
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white md:p-4 md:text-2xl"> 11  </td>
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white md:p-4 md:text-2xl"> 26 </td> 
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white md:p-4 md:text-2xl"> 41 </td>
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white md:p-4 md:text-2xl"> 56 </td>
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white md:p-4 md:text-2xl"> 71 </td>                       
                                    </tr>      
                                    <tr className="">
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white md:p-4 md:text-2xl"> 12  </td>
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white md:p-4 md:text-2xl"> 27 </td> 
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white md:p-4 md:text-2xl"> 42 </td>
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white md:p-4 md:text-2xl"> 57 </td>
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white md:p-4 md:text-2xl"> 72 </td>                          
                                    </tr>   
                                    <tr className="">
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white md:p-4 md:text-2xl"> 13  </td>
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white md:p-4 md:text-2xl"> 28 </td> 
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white md:p-4 md:text-2xl"> 43 </td> 
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white md:p-4 md:text-2xl"> 58 </td>
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white md:p-4 md:text-2xl"> 73 </td>                    
                                    </tr>   
                                    <tr className="">
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white md:p-4 md:text-2xl"> 14  </td>
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white md:p-4 md:text-2xl"> 29 </td> 
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white md:p-4 md:text-2xl"> 44 </td>
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white md:p-4 md:text-2xl"> 59 </td>
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white md:p-4 md:text-2xl"> 74 </td>                     
                                    </tr>   
                                    <tr className="">
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white md:p-4 md:text-2xl"> 15  </td>
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white md:p-4 md:text-2xl"> 30 </td> 
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white md:p-4 md:text-2xl"> 45 </td>
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white md:p-4 md:text-2xl"> 60 </td>
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white md:p-4 md:text-2xl"> 75 </td>                        
                                    </tr>         
                                </tbody>
                            </table>                                             
                        </div>

                        {/* MODO PC */}                        
                        <div className='flex-col items-center justify-center hidden w-full px-2 py-3 md:flex'>
                            <table id="table" className="items-center justify-center table border-collapse"
                            >                                
                                <tbody className='items-center justify-center text-center'
                                        //onClick={(e) => fxSeleccionar(e)}
                                >
                                    <tr className="">
                                        <th className="p-2 font-bold text-black border-2 border-white lg:p-3 md:p-4 md:text-2xl bg-gradient-to-t from-light-blue-400 to-amber-800">B</th>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 1  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 2  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 3  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 4  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 5  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 6  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 7  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 8  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 9  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 10  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 11 </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 12  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 13  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 14  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 15  </td>
                                    </tr> 
                                    <tr className="">                                        
                                        <th className="p-2 font-bold text-black border-2 border-white lg:p-3 md:p-4 md:text-2xl bg-gradient-to-t from-light-blue-400 to-amber-800">I</th>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 16  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 17  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 18  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 19  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 20  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 21  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 22  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 23  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 24  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 25  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 26 </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 27  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 28  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 29  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 30  </td>
                                    </tr>  
                                    <tr className="">                                        
                                        <th className="p-2 font-bold text-black border-2 border-white lg:p-3 md:p-4 md:text-2xl bg-gradient-to-t from-light-blue-400 to-amber-800">N</th>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 31  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 32  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 33  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 34  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 35  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 36  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 37  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 38  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 39  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 40  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 41 </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 52  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 43  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 44  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 65  </td>
                                    </tr>   
                                    <tr className="">                                        
                                        <th className="p-2 font-bold text-black border-2 border-white lg:p-3 md:p-4 md:text-2xl bg-gradient-to-t from-light-blue-400 to-amber-800">G</th>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 46  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 47  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 48  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 49  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 50  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 51  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 52  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 53  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 54  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 55  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 56 </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 57  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 58  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 59  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 60  </td>
                                    </tr>  
                                    <tr className="">                                        
                                        <th className="p-2 font-bold text-black border-2 border-white lg:p-3 md:p-4 md:text-2xl bg-gradient-to-t from-light-blue-400 to-amber-800">O</th>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 61  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 62  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 63  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 64  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 65  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 66  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 67  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 68  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 69  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 70  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 71 </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 72  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 73  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 74  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 75  </td>
                                    </tr>          
                                        
                                </tbody>
                            </table>                                             
                        </div>


                    </div>                                         
                </div>                 
            </div>
        </div>
    )
}
