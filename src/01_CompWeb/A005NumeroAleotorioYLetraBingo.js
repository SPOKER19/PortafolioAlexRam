import React, { useState } from 'react';
// import Swal from 'sweetalert2';


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


    const fxTRATANDO = () => {            

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
                fxTRATANDO();
            }
        }else{
            alert("YA SE LLENO EL ARRAY CON 75 POSICIONES");
        }             
    }

    const fxLimpiarVariables = () => {
        setArrayFinalAleatorio([]);
        setNumeroActual(0);
    }
        
    
    return (
        <div className='flex flex-col items-center justify-around w-full h-full text-black border-2'>
            <div className='flex flex-col items-center justify-center w-full px-3 py-6 bg-yellow-200 xs:flex-row'>
                <div className='flex flex-col items-center justify-center w-full space-y-2 bg-green-400 border-2 h-96 sm:w-1/2'>
                    <div className='flex flex-col items-center justify-center w-full text-center'>
                        <span className='text-sm font-bold sm:text-lg lg:text-2xl xl:text-3xl '>
                            NUMEROS ALEATORIOS EN JAVASCRITPS
                        </span>
                    </div>
                    <div className='flex flex-col items-center justify-center w-full text-center'>
                        <span className='text-sm font-bold sm:text-lg lg:text-2xl xl:text-3xl '>
                            Dentro de un Rango Especifico
                        </span>
                    </div> 
                    {/* <div className='flex flex-col items-center justify-center w-full text-white'>
                        <button className='flex flex-col items-center justify-center px-3 py-4 font-semibold bg-blue-800 rounded-2xl hover:bg-brown-900 hover:text-yellow-300'
                                onClick={fxCrearBolasDeBingo}
                        >
                            Generar BOLAS DE BINGO
                        </button>
                    </div>    */}                 
                    <div className='flex flex-col items-center justify-center w-full text-white'>
                        <button className='flex flex-col items-center justify-center px-3 py-4 font-semibold bg-blue-800 rounded-2xl hover:bg-brown-900 hover:text-yellow-300'
                                onClick={fxTRATANDO}
                        >
                            Generar Numero Aleatorio
                        </button>
                    </div>  
                    <div className='flex flex-col items-center justify-center w-full text-white'>
                        <button className='flex flex-col items-center justify-center px-3 py-4 font-semibold text-black bg-red-600 rounded-2xl hover:bg-red-300'
                                onClick={fxLimpiarVariables}
                        >
                            Resetear
                        </button>
                    </div>                 
                </div>
                <div className='flex flex-col items-center justify-center w-full bg-green-400 border-2 h-96 sm:w-1/2'>
                    <div className='flex flex-col xs:flex-row items-center justify-center'>
                        <div className='flex flex-col items-center justify-center p-4 border-2 border-black'>
                            <span>Obtendra Numeros Aleatorios dentro de Estos RANGOS </span>
                            <span>----------------------------------------------</span>
                            <span> DESDE = <span className='text-2xl font-bold px-2'> { numeroInicial }</span> </span>
                            <span>----------------------------------------------</span>
                            <span> HASTA  = <span className='text-2xl font-bold px-2'> { numeroFinal }</span> </span>
                            <span>----------------------------------------------</span>
                        </div>
                        <div className='flex flex-col items-center justify-center p-4 border-2 border-black'>
                            <span>Distribucion de Numeros </span>
                            <span>----------------------------------------------</span>
                            <span> HAN SALIDO = <span className='text-2xl font-bold px-2'> { nuevoArrayAleatorio.length }</span> NUMEROS.</span>
                            <span>----------------------------------------------</span>
                            <span> FALTAN POR SALIR  = <span className='text-2xl font-bold px-2'> { faltanPorSalir }</span> NUMEROS. </span>
                            <span>----------------------------------------------</span>
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-center pt-6'>
                    <span className='p-6 text-4xl font-bold text-white bg-red-600 rounded-full'>
                        { numeroActual }
                    </span> 
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
