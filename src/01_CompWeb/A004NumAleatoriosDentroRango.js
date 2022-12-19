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
                    <div className='flex flex-col items-center justify-center w-full'>
                        <div className="flex flex-col items-center justify-center form-control">
                            <label className="label">
                                <span className="font-bold text-black label-text">Rango de Numeros</span>
                            </label>
                            <div className='flex flex-col items-center justify-center w-full'>
                                <label className="input-group">
                                    <span  className='bg-deep-orange-300'>Desde:</span>
                                    <input  type="number" 
                                            placeholder="Desde"                                                                                     
                                            onKeyDown={filtroPrimerNumero}
                                            onChange={fxHandlerPrimerNumero} 
                                            value={primerNumero}
                                            disabled={boolBloquearInputNumber}
                                            className="font-extrabold input input-bordered bg-blue-gray-300 hover:bg-white"                                     
                                    />
                                </label> 
                                <label className="label">
                                    <span className="font-bold text-black label-text">---------------------------</span>
                                </label>
                                <label className="input-group">
                                    <span  className='bg-deep-orange-300'> Hasta : </span>
                                    <input  type="number" 
                                            placeholder="Hasta"                                             
                                            onKeyDown={filtroSegundoNumero}
                                            onChange={fxHandleSegundoNumero} 
                                            value={segundoNumero}
                                            disabled={boolBloquearInputNumber}
                                            className="font-extrabold input input-bordered bg-blue-gray-300 hover:bg-white"                                     
                                    />                                    
                                </label> 
                            </div>
                        </div>
                        {textoValoresCorrecto}
                    </div>
                    <div className='flex flex-col items-center justify-center w-full text-white'>
                        <button className='flex flex-col items-center justify-center px-3 py-4 font-semibold bg-blue-800 rounded-2xl hover:bg-brown-900 hover:text-yellow-300'
                                onClick={fxGenerarNumeroAleatorio}
                        >
                            Generar Numero Aleatorio
                        </button>
                    </div>
                    <div className='flex flex-col items-center justify-center w-full text-white'>
                        <button className='flex flex-col items-center justify-center px-3 py-4 font-semibold bg-red-600 rounded-2xl hover:bg-red-300 text-black'
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
                        <span> DESDE = { primerNumero } </span>
                        <span>----------------------------------------------</span>
                        <span> HASTA  = { segundoNumero } </span>
                        <span>----------------------------------------------</span>
                    </div>
                    <div className='flex flex-col items-center justify-center pt-6'>
                       <span className='text-4xl font-bold bg-red-600 text-white rounded-full p-6'>
                            { numeroAleatorio }
                       </span> 
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

 