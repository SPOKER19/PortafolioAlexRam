import React, { useCallback, useState } from 'react';

import corazonAs from '../03_Imagenes/poker/corazonAs.png';
import corazonDiez from '../03_Imagenes/poker/corazonDiez.png';
import corazonJota from '../03_Imagenes/poker/corazonJota.png';
import corazonQ from '../03_Imagenes/poker/corazonQ.png';
import corazonK from '../03_Imagenes/poker/corazonK.png';
import trebolAs from '../03_Imagenes/poker/trebolAs.png';
import trebolDiez from '../03_Imagenes/poker/trebolDiez.png';
import trebolJota from '../03_Imagenes/poker/trebolJota.png';
import trebolQ from '../03_Imagenes/poker/trebolQ.png';
import trebolK from '../03_Imagenes/poker/trebolK.png';


export const A002CreacionAleatoriaCartonesBingo = () => {    
   
    const[ mazo, setMazo ] = useState([]);
    const[ boolCrearMazoPrincipal, setBoolCrearMazoPrincipal ] = useState(false);
    const[ mazoAleatorio, setMazoAleatorio ] = useState([]);
      
        
    const fxObtenerImagen = (_nombreImag) => {     
      let srcImagen = "";
      if(_nombreImag === "corazonAs"){
        return srcImagen = corazonAs
      }
      if(_nombreImag === "corazonDiez"){
        return srcImagen = corazonDiez
      }
      if(_nombreImag === "corazonJota"){
        return srcImagen = corazonJota
      }
      if(_nombreImag === "corazonQ"){
        return srcImagen = corazonQ
      }
      if(_nombreImag === "corazonK"){
        return srcImagen = corazonK
      }
      if(_nombreImag === "trebolAs"){
        return srcImagen = trebolAs
      }
      if(_nombreImag === "trebolDiez"){
        return srcImagen = trebolDiez
      }
      if(_nombreImag === "trebolJota"){
        return srcImagen = trebolJota;
      }
      if(_nombreImag === "trebolQ"){
        return srcImagen = trebolQ;
      }
      if(_nombreImag === "trebolK"){
        return srcImagen = trebolK;
      }
      else{
        srcImagen = "";
        return srcImagen;
      }
    }
    
    

    const fxCrearMazoDeCartas = useCallback (() => {
      let barajadecartas = ["corazon", "trebol"];
      let valordecartas = ["As", "Diez", "Jota", "Q", "K"];      
      let nuevoArray = [];
      let cont = 1;
      //primero creamos el mazo con todas las cartas posibles
      barajadecartas.forEach(b =>{
        valordecartas.forEach(v => {
          nuevoArray.push({
            ind: cont++,
            tipocarta: b,
            numCarta: v,
            imag: b+v,
            nombreCarta: v + " de " + b 
          });
        });
        setMazo(nuevoArray);
        setBoolCrearMazoPrincipal(true);
      });
      /* console.log(nuevoArray); */
    }, []);
     

    const fxMostrarEnPantallaMazoDeCartas = () => {       
        if(mazo.length !== 0){
          return mazo.map(item => (
              <div  className="flex flex-wrap items-center justify-around px-2 py-1 "
                    key={item.ind}
              >                                                                
                  <div className='flex flex-col items-center justify-center'>
                      <img    className='h-24 w-14' 
                              alt= {item.imag}
                              src= {fxObtenerImagen(item.imag)}                      
                      />  
                      {/*  {item.nombreCarta} */}
                  </div>
              </div> 
          ));
        }else{
          return    <div className="h-12 font-semibold hover:text-yellow-200 hover:bg-gray-900"
                    > 
                         "NO HA CREADO EL MAZO DE CARTAS"
                    </div>
        }
    }
    
  // FX  CLONAR ARRAY
    const fxClonarArray = (_Array) => {
      return _Array.slice(0);
    }
  
    //ahora tomamos las primeras 10 cartas en orden aleatorio y las pasamos a seleccion ************************************************
  
    const fxCrearMazoDeCartasAleatorio = useCallback (() => {  
      
      let NuevoArray = fxClonarArray(mazo);
      // console.log("Este es el Nuevo Array Clonado = ", NuevoArray);
      // console.log("-------------------------------------------------");

      let nuevoArrayAleatorio = [];     
      for (let i=0; i<10; ++i) {        
        let indice = parseInt(Math.random() * NuevoArray.length);
        // console.log("indice = ", indice);
        nuevoArrayAleatorio.push(NuevoArray[indice]);
        NuevoArray.splice(indice, 1); 
        // console.log("Valor de Nuevo Array = ", nuevoArrayAleatorio);
        // console.log("-------------------------------------------------");        
        // console.log(indice + " " + mazo[indice]); 
      }
      setMazoAleatorio(nuevoArrayAleatorio);      
      /* console.log("Valor Array Mazo = ", mazo);
      console.log("Valor Array NuevoArray = ", NuevoArray);
      console.log("nuevoArrayAleatorio = ", nuevoArrayAleatorio);
      console.log("Valor Array Mazo = ", mazo); */
    }, [mazo]);

           
    const fxMostrarEnPantallaMazoDeCartasAleatorias = () => {       
      if(mazoAleatorio.length !== 0){
        return mazoAleatorio.map((item, index) => (
            <div  className="flex flex-wrap items-center justify-around px-2 py-1"
                  key={index}
            >                                                                
                <div className='flex flex-col items-center justify-center'>
                    <img    className='w-16 h-24' 
                            alt= {item.imag}
                            src= {fxObtenerImagen(item.imag)}                      
                    />  
                    <span className='text-xs'>{item.imag}</span>
                </div>
            </div> 
        ));
      }else{
        return    <div className="h-12 font-semibold hover:text-yellow-200 hover:bg-gray-900"
                  > 
                      "NO HA CREADO EL MAZO DE CARTAS ALEATORIOS O NO HA CREADO LAS CARTAS"
                  </div>
      }
    }
   
  
  return (
        <div className='flex flex-col items-center justify-around h-full w-ful'> 
        <div className='mt-24'></div>
          <div className='flex flex-col items-center justify-center w-full h-full md:flex-row'>
            <div className='flex flex-col items-center justify-center w-full h-full px-4 mt-6 md:w-1/3'>
              <div className='flex flex-col items-center justify-center py-2 text-xs font-bold sm:text-base'>
                <button  className={`${boolCrearMazoPrincipal === true && 'opacity-30 cursor-not-allowed -z-10'}
                                              p-4 bg-blue-600                                        
                                  ` } 
                        disabled={boolCrearMazoPrincipal}
                        onClick={fxCrearMazoDeCartas}
                >
                    CREAR MAZO DE CARTAS
                </button>
              </div>

              <div className='flex flex-col items-center justify-center py-2 text-xs font-bold sm:text-base'>
                <button   className={`${boolCrearMazoPrincipal === false && 'opacity-30 cursor-not-allowed'}
                                        p-4 bg-yellow-300 text-black                                      
                                    ` } 
                        disabled={!boolCrearMazoPrincipal}            
                        onClick={fxCrearMazoDeCartasAleatorio}
                >
                  CREAR MAZO ALEATORIO
                </button>
              </div>
            </div>

            <div className='flex flex-col items-center justify-center flex-1'>
              <p className='hidden py-5 md:flex '>MAZO DE CARTAS ORIGINALES</p>
              <div className='flex-wrap items-center justify-center hidden pt-6 md:flex'>                  
                  {fxMostrarEnPantallaMazoDeCartas()}  
              </div>
              
              <p className='hidden translate-y-12 md:flex'>MAZO DE CARTAS ALEATORIAS</p>
              <div className='flex flex-wrap items-center justify-center py-8 md:py-20'>
                  {fxMostrarEnPantallaMazoDeCartasAleatorias()}  
              </div>
            </div>
          </div>

          {/* <table className="items-center justify-center w-full table-fixed">
              <thead className="">
                  <tr className="text-center bg-green-500">
                      <th className="w-1/4">IR</th>
                  </tr>
              </thead>
              <tfoot className="">
                  <tr className="text-center bg-green-500">
                      <th className="w-1/4">IR</th>
                  </tr>
              </tfoot>
              <tbody className='items-center justify-center text-center'>
                {fxMostrarEnPantallaMazoDeCartas()}
              </tbody>
          </table> */}
           
        </div>
  )
}
