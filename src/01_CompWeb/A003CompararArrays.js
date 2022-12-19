import React from 'react';
import { Buffer } from 'buffer';



export const A003CompararArrays = () => {
     
    let array1 = [1, 2, 3, 4, 6, 7, 8]
    let array2 = array1;
    let array3 = [1, 2, 3]
    let array4 = [1, 2, 8]
    let array5 = [1, 2, 3, 4, 6, 7, 8]

    const buf1 = Buffer.from(array1);
    const buf2 = Buffer.from(array2);
    const buf3 = Buffer.from(array3);
    const buf4 = Buffer.from(array4);
    const buf5 = Buffer.from(array5);

    const fxCompararArrays = () => {
      console.log("PREGUNTA = el Array 1 y 2 Son IGUALES = ", buf1.equals(buf2));
      console.log("PREGUNTA = el Array 1 y 3 Son IGUALES = ", buf1.equals(buf3));
      console.log("PREGUNTA = el Array 1 y 4 Son IGUALES = ", buf1.equals(buf4));
      console.log("PREGUNTA = el Array 1 y 5 Son IGUALES = ", buf1.equals(buf5));
      console.log("PREGUNTA = el Array 1 y 1 Son IGUALES = ", buf1.equals(buf1));
      console.log("--------------------------------------------------------------");
      console.log("PREGUNTA = el Array 3 y 1 Son IGUALES = ", buf3.equals(buf1));
      console.log("PREGUNTA = el Array 3 y 4 Son IGUALES = ", buf3.equals(buf4));
      console.log("PREGUNTA = el Array 3 y 5 Son IGUALES = ", buf3.equals(buf5));
      console.log("--------------------------------------------------------------");
      console.log("PREGUNTA = el Array 4 y 1 Son IGUALES = ", buf4.equals(buf1));
      console.log("PREGUNTA = el Array 4 y 5 Son IGUALES = ", buf4.equals(buf5));
      console.log("--------------------------------------------------------------");
      console.log("PREGUNTA = el Array 5 y 1 Son IGUALES = ", buf5.equals(buf1));
      console.log("PREGUNTA = el Array 5 y 2 Son IGUALES = ", buf5.equals(buf2));
      console.log("PREGUNTA = el Array 5 y 3 Son IGUALES = ", buf5.equals(buf3));
      console.log("PREGUNTA = el Array 5 y 4 Son IGUALES = ", buf5.equals(buf4));
      console.log("PREGUNTA = el Array 5 y 5 Son IGUALES = ", buf5.equals(buf5));
      console.log("--------------------------------------------------------------");
    }
  
    
  
  return (
        <div className='flex flex-col items-center justify-around'>
          <div className='flex flex-col items-center justify-center pt-5'>
            <button className='p-4 bg-blue-600'
                    onClick={fxCompararArrays}
            >
                COMPARAR ARRAYS
            </button>
          </div>          
        </div>
  )
}
