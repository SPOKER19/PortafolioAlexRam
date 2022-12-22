import React, { useState } from 'react'

export const A004NumAleatoriosDentroRango = () => {

    const [ numeroAleatorio, setNumeroAleatorio ] = useState(0);
    const [ primerNumero, setPrimerNumero ] = useState(0);
    const [ segundoNumero, setSegundoNumero ] = useState(0);
    const [ textoValoresCorrecto, setTextoValoresCorrectos ] = useState("");
    const [ boolBloquearInputNumber, setBoolBloquearInputNumber ] = useState(false);

    const fxHandlerPrimerNumero = (e) => {
        let priNum = e.target.value;          
        setPrimerNumero(priNum);
        //console.log(priNum);
    }

    const fxHandleSegundoNumero = (e) => {
        let segNum = e.target.value;  
        setSegundoNumero(segNum);
        //console.log(segNum);
    }
    
    const filtroPrimerNumero = (e) => {
        let tecla = e.key; 
         if (['-', '+', ',', '.','e', 'E'].includes(tecla))
            e.preventDefault();                    
        //console.log("Valor tecla = ", tecla);
        //console.log("Valor e = ", e);
    }

    const filtroSegundoNumero = (e) => {
        let tecla = e.key;         
        if (['-', '+', ',', '.','e', 'E'].includes(tecla))
            e.preventDefault();                       
        //console.log("Valor tecla = ", tecla);
        //console.log("Valor e = ", e.target.value);
    }

    const fxGenerarNumeroAleatorio = () => {
        // console.log("valor de Numero 1 = ", primerNumero);
        // console.log("valor de Numero 2 = ", segundoNumero);
        fxNumberRamdon(parseInt(primerNumero), parseInt(segundoNumero))       
    }

    const fxNumberRamdon = (_inicio, _fin) => {
        let numeroRamdom = Math.floor(Math.random()*(_fin - _inicio + 1) + _inicio);
        //console.log("Este es el Numero RANDOM = ", numeroRamdom);
        setNumeroAleatorio(numeroRamdom);
    }

    const fxLimpiarVariables = () => {
        setNumeroAleatorio(0);
        setPrimerNumero(0);
        setSegundoNumero(0);
        setTextoValoresCorrectos("");
        setBoolBloquearInputNumber(false);
    }

    return (
        <div className='flex flex-col items-center justify-center w-full h-full text-black'>
            <div className='mt-24'></div>
            <div className='flex flex-col items-center justify-center w-full h-full mt-5 bg-yellow-200 md:mt-10 xs:flex-row'>
                <div className='flex flex-col items-center justify-center w-full h-auto space-y-2 sm:w-1/2'>
                    <div className='flex flex-col items-center justify-center w-full text-center'>
                        <span className='text-sm font-bold sm:text-lg lg:text-2xl xl:text-3xl '>
                            NUMEROS ALEATORIOS
                        </span>
                        <span className='text-sm font-bold sm:text-lg lg:text-2xl xl:text-3xl '>
                            Dentro de un Rango
                        </span>
                    </div>                    
                    <div className='flex flex-col items-center justify-center w-full'>
                        <div className="flex flex-col items-center justify-center form-control">
                            <label className="label">
                                <span className="text-base font-bold text-black label-text">Rango de Numeros</span>
                            </label>
                            <div className='flex flex-col items-center justify-center w-full'>
                                <label className="flex justify-center item-center input-group">
                                    <span  className='px-2 pt-3 text-sm'>Desde:</span>
                                    <input  type="number" 
                                            placeholder="Desde"                                                                                     
                                            onKeyDown={filtroPrimerNumero}
                                            onChange={fxHandlerPrimerNumero} 
                                            value={primerNumero}
                                            disabled={boolBloquearInputNumber}
                                            className="flex w-1/2 font-extrabold input input-bordered bg-blue-gray-300 hover:bg-white"                                     
                                    />
                                </label> 
                                <label className="label">
                                    <span className="font-bold text-black label-text">---------------------------</span>
                                </label>
                                <label className="flex justify-center item-center input-group">
                                    <span  className='px-2 pt-3 text-sm'> Hasta : </span>
                                    <input  type="number" 
                                            placeholder="Hasta"                                             
                                            onKeyDown={filtroSegundoNumero}
                                            onChange={fxHandleSegundoNumero} 
                                            value={segundoNumero}
                                            disabled={boolBloquearInputNumber}
                                            className="flex w-1/2 font-extrabold input input-bordered bg-blue-gray-300 hover:bg-white"                                     
                                    />                                    
                                </label> 
                            </div>
                        </div>
                        {textoValoresCorrecto}
                    </div>
                    <div className='flex flex-row items-center justify-center w-full py-5'>
                        <div className='flex flex-col items-center justify-center w-full text-white'>
                            <button className='flex flex-col items-center justify-center px-2 py-3 font-semibold bg-blue-800 rounded-2xl hover:bg-brown-900 hover:text-yellow-300'
                                    onClick={fxGenerarNumeroAleatorio}
                            >
                                Generar #
                            </button>
                        </div>
                        <div className='flex flex-col items-center justify-center w-full text-white'>
                            <button className='flex flex-col items-center justify-center px-2 py-3 font-semibold text-white bg-red-600 rounded-2xl hover:bg-red-300'
                                    onClick={fxLimpiarVariables}
                            >
                                Resetear
                            </button>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center w-full h-auto py-5 bg-green-400 sm:w-1/2'>
                    <div className='flex flex-col items-center justify-center text-sm text-center'>
                        <span className='font-semibold md:text-lg'>Obtendra Numeros Aleatorios dentro de Estos RANGOS </span>

                        <div className='flex flex-row items-center justify-center pt-5 text-lg text-center'>
                            <div className='mr-4 font-bold'> DESDE = { primerNumero } </div>                            
                            <div className='font-bold'> HASTA  = { segundoNumero } </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-center pt-3'>
                       <span className='p-6 text-2xl font-bold text-white bg-red-600 rounded-full md:text-4xl'>
                            { numeroAleatorio }
                       </span> 
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

 