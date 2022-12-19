import React, { useState, useCallback } from 'react';
// import Swal from 'sweetalert2';


export const A005NumeroAleotorioYLetraBingo = () => {

    const [ numeroInicial ] = useState(1);
    const [ numeroFinal ] = useState(75);
    //------------------------------------------------------------
    let arrayDeBolasDeBingo = [];    
    //------------------------------------------------------------
    //const [ ballDrawnNumber, setBallDrawNumber ] = useState([]);
    let ballDrawnNumber = [];
    //const [ ballDrawnLetter, setBallDrawnLetter ] = useState([]);
    // const [ deseaObtenerOtroNumero, setDeseaObtenerOtroNumero ] = useState (true);

    let ArrayDeNumeros = [];
    
    let ArrayDeNumerosQueHanSalido = [];

    let nuevoArrayAleatorio = [];

    const fxCrearBolasDeBingo = useCallback (() => {  
        for (let index = 1; index < 76; index++) {
            arrayDeBolasDeBingo.push(index);           
        }        
    }, []);

    // FX  CLONAR ARRAY
    const fxClonarArray = (_Array) => {
        return _Array.slice(0);
    }
    // FX  ORDENAR ARRAY
    function comparar ( a, b ){ return a - b; }


    const fxTRATANDO = () => {
        let repeat = 0;
        //let numeroRamdom = 0;
         
        let nuevoArrayClonadoBDB = fxClonarArray(arrayDeBolasDeBingo);
        let nuevoARRAY001 = fxClonarArray(nuevoArrayAleatorio.sort());

        let numeroRamdom = Math.floor(Math.random()*(numeroFinal - numeroInicial + 1) + numeroInicial);
        console.log("-------------------------------");
        console.log("numeroRamdom = ", numeroRamdom);

        

        var indice = nuevoArrayAleatorio.indexOf(numeroRamdom);        
        //console.log("nuevoArrayAleatorio.lenght = ", nuevoArrayAleatorio.lenght);        
        console.log("-------------------------------");        

        if(nuevoArrayAleatorio.length < 75){
            
            if(indice === -1){
                nuevoArrayAleatorio.push(numeroRamdom);
            }else{
                //console.log("Valor de Indice DUPLICADO IndexOF = ", indice);
                fxTRATANDO();
            }
        }else{
            alert("YA SE LLENO EL ARRAY CON 75 POSICIONES");
        }
        
        //console.log("Array nuevoArrayAleatorio = ", nuevoArrayAleatorio);
        //console.log("-------------------------------");
        //console.log("Array CLONADO BDB = ", nuevoArrayClonadoBDB);
        // let numeroRamdom = Math.floor(Math.random()*(numeroFinal - numeroInicial + 1) + numeroInicial);
        // console.log("-------------------------------");
        // console.log("numeroRamdom = ", numeroRamdom);
        // console.log("-------------------------------");
        
        /* for (let i = 0; i <= nuevoARRAY001.length; i++) {
            if (nuevoARRAY001[i + 1] === nuevoARRAY001[i]) {
            //   duplicados.push(nuevoARRAY002[i]);
                console.log("DUPLICADOS = ", i)
                nuevoArrayAleatorio.push(nuevoArrayClonadoBDB[numeroRamdom]);
            }else{
                console.log("DUPLICADOS ELSE = ", i)
            }
        }

        nuevoArrayClonadoBDB.splice(numeroRamdom, 1); */

        /* for (let i=1; i<=75; ++i) {        
            //let indice = parseInt(Math.random() * nuevoArrayClonadoBDB.length);            
            if(numeroRamdom === nuevoArrayAleatorio[i]){
                repeat++;
                //console.log("Este es el Numero = ", numeroRamdom);
                console.log("-------------------------");
                console.log("NUMERO ESTA REPETIDO nuevoArrayAleatorio = ", numeroRamdom);
                console.log("-------------------------");
                /* numeroRamdom = Math.floor(Math.random()*(numeroInicial - numeroFinal + 1) + numeroFinal);
                console.log("NUEVO numeroRamdom REPET = ", numeroRamdom);  */               
       /*     }else{
                /* if(indice >= 1 && indice <=15){                
                    //setBallDrawnLetter("B");               
                    nuevoArrayAleatorio.push(nuevoArrayClonadoBDB[indice]);
                }
                else if(indice >= 16 && indice <=30){ 
                    //setBallDrawnLetter("I");
                    nuevoArrayAleatorio.push(nuevoArrayClonadoBDB[indice]);
                }
                else if(indice >= 31 && indice <=45){                
                    //setBallDrawnLetter("N");
                    nuevoArrayAleatorio.push(nuevoArrayClonadoBDB[indice]);
                }
                else if(indice >= 46 && indice <=60){                
                    //setBallDrawnLetter("G");
                    nuevoArrayAleatorio.push(nuevoArrayClonadoBDB[indice]);
                }
                else if (indice >= 61 && indice <=75){                
                    //setBallDrawnLetter("O");
                    nuevoArrayAleatorio.push(nuevoArrayClonadoBDB[indice]);
                }else{
                    console.log("REPETIDO ELSE, = ", i, numeroRamdom);
                }  */
        /*        nuevoArrayAleatorio.push(nuevoArrayClonadoBDB[numeroRamdom]);
            }  

            

            //console.log("indice = ", indice);
            // nuevoArrayAleatorio.push(nuevoArrayClonadoBDB[indice]);   
           /*  if(indice >= 1 && indice <=15){                
                //setBallDrawnLetter("B");               
                nuevoArrayAleatorio.push(nuevoArrayClonadoBDB[indice]);
            }
            else if(indice >= 16 && indice <=30){ 
                //setBallDrawnLetter("I");
                nuevoArrayAleatorio.push(nuevoArrayClonadoBDB[indice]);
            }
            else if(indice >= 31 && indice <=45){                
                //setBallDrawnLetter("N");
                nuevoArrayAleatorio.push(nuevoArrayClonadoBDB[indice]);
            }
            else if(indice >= 46 && indice <=60){                
                //setBallDrawnLetter("G");
                nuevoArrayAleatorio.push(nuevoArrayClonadoBDB[indice]);
            }
            else if (indice >= 61 && indice <=75){                
                //setBallDrawnLetter("O");
                nuevoArrayAleatorio.push(nuevoArrayClonadoBDB[indice]);
            } */
       /*     nuevoArrayClonadoBDB.splice(numeroRamdom, 1); 
            
        } */

        /* if(repeat === 1){
            if(numeroRamdom >= 1 && numeroRamdom <=15){                
                nuevoArrayAleatorio.push(nuevoArrayClonadoBDB[numeroRamdom]);    
            }
            else if(numeroRamdom >= 16 && numeroRamdom <=30){ 
                //setBallDrawnLetter("I");
                nuevoArrayAleatorio.push(nuevoArrayClonadoBDB[numeroRamdom]);
            }
            else if(numeroRamdom >= 31 && numeroRamdom <=45){                
                //setBallDrawnLetter("N");
                nuevoArrayAleatorio.push(nuevoArrayClonadoBDB[numeroRamdom]);
            }
            else if(numeroRamdom >= 46 && numeroRamdom <=60){                
                //setBallDrawnLetter("G");
                nuevoArrayAleatorio.push(nuevoArrayClonadoBDB[numeroRamdom]);
            }
            else if (numeroRamdom >= 61 && numeroRamdom <=75){                
                //setBallDrawnLetter("O");
                nuevoArrayAleatorio.push(nuevoArrayClonadoBDB[numeroRamdom]);
            }else{
                setNumeroAleatorio("NO ESTA DENTRO DEL RANGO");
            }  
        } */

       
        //console.log("Array Original BDB = ", arrayDeBolasDeBingo);
        //console.log("-------------------------------");
        //console.log("Array CLONADO BDB = ", nuevoArrayClonadoBDB);
        //console.log("-------------------------------");
        //console.log("nuevoArrayAleatorio = ", nuevoArrayAleatorio);
        //let nuevoARRAY001 = fxClonarArray(nuevoArrayAleatorio.sort());
        let nuevoARRAY002 = fxClonarArray(nuevoArrayAleatorio.sort(comparar));
        //console.log("-------------------------------");
        //console.log("nuevoARRAY001 = ", nuevoARRAY001);
        //console.log("-------------------------------");
        console.log("nuevoARRAY002 = ", nuevoARRAY002);
        console.log("nuevoArrayAleatorio.lenght = ", nuevoArrayAleatorio.length); 

        /* for (let i = 0; i < nuevoARRAY002.length; i++) {
            if (nuevoARRAY002[i + 1] === nuevoARRAY002[i]) {
            //   duplicados.push(nuevoARRAY002[i]);
                console.log("DUPLICADOS ARRAY002 = ", i)
            }else{
                console.log("NO HAY NUMEROS DUPLICADOS ARRAY002");
            }
          } */
        

    }

    const fxObtenerNumeroAleatorio = () => {
        let repeat = 0;
        //let ballLetter = "";
        let numeroRamdom = Math.floor(Math.random()*(numeroFinal - numeroInicial + 1) + numeroInicial);
        console.log("numeroRamdom SALIDOR = ", numeroRamdom);
        //let numeroRamdom = Math.floor(Math.random()* ArrayDeNumeros.length);
       // let indice = parseInt(Math.random() * NuevoArray.length);
        // nuevoArrayAleatorio.push(NuevoArray[indice]);
        // NuevoArray.splice(indice, 1); 

        for(var index = 0; index <=ArrayDeNumeros.length; index ++){
            if(numeroRamdom === ArrayDeNumerosQueHanSalido[index]){
                repeat++;
                //console.log("Este es el Numero = ", numeroRamdom);
                console.log("-------------------------");
                console.log("repeat = ", repeat);
                console.log("-------------------------");
                numeroRamdom = Math.floor(Math.random()*(numeroInicial - numeroFinal + 1) + numeroFinal);
                console.log("numeroRamdom REPET = ", numeroRamdom);                
            }            
        }

        if(repeat === 0){
            if(numeroRamdom >= 1 && numeroRamdom <=15){                
                //setBallDrawnLetter("B");
                ballDrawnNumber.push(numeroRamdom);
                ArrayDeNumerosQueHanSalido.push(numeroRamdom);
                ArrayDeNumeros.splice((numeroRamdom - 1), 1);

            }
            else if(numeroRamdom >= 16 && numeroRamdom <=30){ 
                //setBallDrawnLetter("I");
                ballDrawnNumber.push(numeroRamdom);
                ArrayDeNumerosQueHanSalido.push(numeroRamdom);
                ArrayDeNumeros.splice(numeroRamdom, 1);
            }
            else if(numeroRamdom >= 31 && numeroRamdom <=45){                
                //setBallDrawnLetter("N");
                ballDrawnNumber.push(numeroRamdom);
                ArrayDeNumerosQueHanSalido.push(numeroRamdom);
                ArrayDeNumeros.splice(numeroRamdom, 1);
            }
            else if(numeroRamdom >= 46 && numeroRamdom <=60){                
                //setBallDrawnLetter("G");
                ballDrawnNumber.push(numeroRamdom);
                ArrayDeNumerosQueHanSalido.push(numeroRamdom);
                ArrayDeNumeros.splice(numeroRamdom, 1);
            }
            else if (numeroRamdom >= 61 && numeroRamdom <=75){                
                //setBallDrawnLetter("O");
                ballDrawnNumber.push(numeroRamdom);
                ArrayDeNumerosQueHanSalido.push(numeroRamdom);
                ArrayDeNumeros.splice(numeroRamdom, 1);
            }else{
                //setNumeroAleatorio("NO ESTA DENTRO DEL RANGO");
            }  
        }else{
            //numeroRamdom = Math.floor(Math.random()*(numeroInicial - numeroFinal + 1) + numeroFinal);
            /* console.log("numeroRamdom REPET = ", numeroRamdom);
            ArrayDeNumerosQueHanSalido.push(numeroRamdom); */
            console.log("ESTOY EN ELSE CUANDO REPET VALE 0 ")
            if(repeat === 1){
                if(numeroRamdom >= 1 && numeroRamdom <=15){                
                    //setBallDrawnLetter("B");
                    ballDrawnNumber.push(numeroRamdom);
                    ArrayDeNumerosQueHanSalido.push(numeroRamdom);
                    ArrayDeNumeros.splice((numeroRamdom - 1), 1);
    
                }
                else if(numeroRamdom >= 16 && numeroRamdom <=30){ 
                    //setBallDrawnLetter("I");
                    ballDrawnNumber.push(numeroRamdom);
                    ArrayDeNumerosQueHanSalido.push(numeroRamdom);
                    ArrayDeNumeros.splice(numeroRamdom, 1);
                }
                else if(numeroRamdom >= 31 && numeroRamdom <=45){                
                    //setBallDrawnLetter("N");
                    ballDrawnNumber.push(numeroRamdom);
                    ArrayDeNumerosQueHanSalido.push(numeroRamdom);
                    ArrayDeNumeros.splice(numeroRamdom, 1);
                }
                else if(numeroRamdom >= 46 && numeroRamdom <=60){                
                    //setBallDrawnLetter("G");
                    ballDrawnNumber.push(numeroRamdom);
                    ArrayDeNumerosQueHanSalido.push(numeroRamdom);
                    ArrayDeNumeros.splice(numeroRamdom, 1);
                }
                else if (numeroRamdom >= 61 && numeroRamdom <=75){                
                    //setBallDrawnLetter("O");
                    ballDrawnNumber.push(numeroRamdom);
                    ArrayDeNumerosQueHanSalido.push(numeroRamdom);
                    ArrayDeNumeros.splice(numeroRamdom, 1);
                }else{
                    //setNumeroAleatorio("NO ESTA DENTRO DEL RANGO");
                }  
            }
        }       
        repeat = 0; 
        // console.log("repeat = ", repeat);
        // console.log("-------------------------");
        console.log("numeroRamdom = ", numeroRamdom);
        // console.log("-------------------------");
        // console.log("-------------------------");
        // console.log("ArrayDeNumeros LONGITUD = ", ArrayDeNumeros.length);
        // console.log("VALOR ArrayDeNumeros = ", ArrayDeNumeros);
        // console.log("-------------------------");
        console.log("-------------------------");
        console.log("ArrayDeNumerosQueHanSalido LONGITUD = ", ArrayDeNumerosQueHanSalido.length);
        console.log("VALOR ArrayDeNumerosQueHanSalido = ", ArrayDeNumerosQueHanSalido);
        console.log("-------------------------");
        console.log("-------------------------");


    }


    //  ESTA VARIABLE FUNCIONO ***************
    /* const fxObtenerNumeroAleatorio = () => {        
            let letra = "";
            let numeroRamdom = Math.floor(Math.random()*(numeroInicial - numeroFinal + 1) + numeroFinal);
            //RANGO LETRA I
            if(numeroRamdom >= 1 && numeroRamdom <=15){                
                letra = "B";
                console.log(letra + "-" + numeroRamdom); 
                setNumeroAleatorio(letra + "-" + numeroRamdom);
            }
            else if(numeroRamdom >= 16 && numeroRamdom <=30){                
                letra = "I";
                console.log(letra + "-" + numeroRamdom); 
                setNumeroAleatorio(letra + "-" + numeroRamdom);
            }
            else if(numeroRamdom >= 31 && numeroRamdom <=45){                
                letra = "N";
                console.log(letra + "-" + numeroRamdom); 
                setNumeroAleatorio(letra + "-" + numeroRamdom);
            }
            else if(numeroRamdom >= 46 && numeroRamdom <=60){                
                letra = "I";
                console.log(letra + "-" + numeroRamdom); 
                setNumeroAleatorio(letra + "-" + numeroRamdom);
            }
            else if (numeroRamdom >= 61 && numeroRamdom <=75){                
                letra = "I";
                console.log(letra + "-" + numeroRamdom); 
                setNumeroAleatorio(letra + "-" + numeroRamdom);
            }else{
                setNumeroAleatorio("NO ESTA DENTRO DEL RANGO");
            }                
    } */

    const fxLimpiarVariables = () => {
        //setNumeroAleatorio(0);        
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
                           { ballDrawnNumber }
                    </span> 
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
