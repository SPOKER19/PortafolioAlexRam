import React, { useCallback, useState } from 'react';
// import Swal from 'sweetalert2';


export const A005NumeroAleotorioYLetraBingo = () => {

    const [ numeroInicial ] = useState(1);
    const [ numeroFinal ] = useState(75);
    const [ numeroActual, setNumeroActual ] = useState("");
    //------------------------------------------------------------
    
    let arrayDeNumerosIndexados = [];  // Este Array me permite verificar si hay algun numero repetido
    let nuevoArrayAleatorio = [];  // Aqui Organizamos en Secciones (x Letras) los Numeros que salgan 
   

    const fxCrearBolasDeBingo = useCallback (() => { 
        let arrayDeBolasDeBingo = [];  // Array que crea las 75 Bolas de Bingo  
        for (let index = 1; index < 76; index++) {
            arrayDeBolasDeBingo.push(index);           
        }        
    }, []);

    // FX  CLONAR ARRAY
    const fxClonarArray = (_Array) => {
        return _Array.slice(0);
    }

    // FX  ORDENAR ARRAY
    function comparar ( a, b ){ return a.numeroBola > b.numeroBola; }  //(a,b) => a.proveedor > b.proveedor)

    // FX VALIDAR SI EXISTE DATO EN ARRAY TIPO OBJETO
    function fxValidarDatoEnArrayObjet (_valorABuscar) {         
        let valor = nuevoArrayAleatorio.findIndex((item) => item.numeroBola === _valorABuscar);
        if(valor === -1){            
            return false;
        }else{
            return true;
        }       
    }

    const fxMostrarBolaActual = () => {
        if(!nuevoArrayAleatorio.length){
            console.log("nuevoArrayAleatorio ESTA VACIO ********* = ");
        }else{
            let ultimoNumero = nuevoArrayAleatorio[nuevoArrayAleatorio.length - 1].NombreBola;
            console.log("ultimoNumero ******* = ", ultimoNumero);
            //setNumeroActual(ultimoNumero);   
        }
    }


    const fxTRATANDO = () => {            

        if(nuevoArrayAleatorio.length < 75){ 
            let numeroRamdom = Math.floor(Math.random()*(numeroFinal - numeroInicial + 1) + numeroInicial);
            // console.log("-------------------------------");
            // console.log("numeroRamdom = ", numeroRamdom);        
    
            var indice = fxValidarDatoEnArrayObjet(numeroRamdom);
            //var indice = nuevoArrayAleatorio.indexOf(numeroRamdom);        
            //console.log("indice = ", indice);        
            // console.log("-------------------------------");       
            
            if(indice === false){  
                console.log("Valor Ramdom = ", numeroRamdom);          
                if(numeroRamdom >= 1 && numeroRamdom <=15){ 
                    nuevoArrayAleatorio.push({
                        letra: "B",
                        numeroBola: numeroRamdom,                        
                        NombreBola: "B-"+numeroRamdom
                      });   
                                   
                }
                else if(numeroRamdom >= 16 && numeroRamdom <=30){  
                    nuevoArrayAleatorio.push({
                        letra: "I",
                        numeroBola: numeroRamdom,                        
                        NombreBola: "I-"+numeroRamdom 
                    });  
                                    
                }
                else if(numeroRamdom >= 31 && numeroRamdom <=45){                    
                    nuevoArrayAleatorio.push({
                        letra: "N",
                        numeroBola: numeroRamdom,                        
                        NombreBola: "N-"+numeroRamdom 
                    });  
                                  
                }
                else if(numeroRamdom >= 46 && numeroRamdom <=60){ 
                    nuevoArrayAleatorio.push({
                        letra: "G",
                        numeroBola: numeroRamdom,                        
                        NombreBola: "G-"+numeroRamdom  
                    });   
                                    
                }
                else if (numeroRamdom >= 61 && numeroRamdom <=75){ 
                    nuevoArrayAleatorio.push({
                        letra: "O",
                        numeroBola: numeroRamdom,                        
                        NombreBola: "0-"+numeroRamdom  
                    });  
                                  
                }else{
                    console.log("NO ESTA DENTRO DEL RANGO");
                }
                
            }else{
                //console.log("Valor de Indice DUPLICADO IndexOF = ", indice);
                fxTRATANDO();
            }
        }else{
            alert("YA SE LLENO EL ARRAY CON 75 POSICIONES");
        }        
       
        let nuevoARRAY002 = fxClonarArray(nuevoArrayAleatorio.sort(comparar));
        console.log("nuevoARRAY002 = ", nuevoARRAY002);
        console.log("nuevoArrayAleatorio.lenght = ", nuevoArrayAleatorio.length);  
        arrayDeNumerosIndexados = nuevoArrayAleatorio[nuevoArrayAleatorio.length - 1].NombreBola;
        //console.log("arrayDeNumerosIndexados = ", arrayDeNumerosIndexados);
        //setNumeroActual("ultimoNumero");     

    }

    

    const fxLimpiarVariables = () => {
        //setNumeroAleatorio(0);        
    }
    
    console.log("arrayDeNumerosIndexados = ", arrayDeNumerosIndexados);
    
    

    
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
                    <div className='flex flex-col items-center justify-center w-full text-white'>
                        <button className='flex flex-col items-center justify-center px-3 py-4 font-semibold bg-blue-800 rounded-2xl hover:bg-brown-900 hover:text-yellow-300'
                                onClick={fxCrearBolasDeBingo}
                        >
                            Generar BOLAS DE BINGO
                        </button>
                    </div>                    
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
                    <div className='flex flex-col items-center justify-center'>
                        <span>Obtendra Numeros Aleatorios dentro de Estos RANGOS </span>
                        <span>----------------------------------------------</span>
                        <span> DESDE = { numeroInicial } </span>
                        <span>----------------------------------------------</span>
                        <span> HASTA  = { numeroFinal } </span>
                        <span>----------------------------------------------</span>
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
