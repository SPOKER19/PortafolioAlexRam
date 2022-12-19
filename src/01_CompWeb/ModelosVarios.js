import React from 'react';
import { Link } from 'react-router-dom';

export const ModelosVarios = () => {

    const linksModelos = [
        {   id:   1, irAPag: "./A001DelegacionEventosJS",  
            description:    "Delegacion de Eventos en Javascript // Ejemplo Click en Carton de Bingo",              
        },
        {   id:   2, irAPag: "./A002CreacionAleatoriaCartonesBingo",
            description:    "Creacion Aleatoria de Cartones de Bingo",              
        },
        {   id:   3, irAPag: "./A003CompararArrays",
            description:    "COMPARAR ARRAYS 4 METODOS EQUALS()  +  ARRAYS.EQUALS()  +  ARRAYS.COMPARE()  +  ARRAYS.MISMATCH",              
        },
        {   id:   4, irAPag: "./A004NumAleatoriosDentroRango",
            description:    "GENERAR NUMEROS ALEATORIOS DENTRO DE UN RANGO ESPECIFICO",              
        },
        {   id:   5, irAPag: "./A005NumeroAleotorioYLetraBingo",
            description:    "GENERAR NUMEROS ALEATORIOS Y LA LETRA JUEGO BINGO",              
        },
        {   id:   6, irAPag: "./A006EstructuraDivisoriaPagWeb",
            description:    "ESTRUCTURA DIVISIBLE PARA UN COMPONENTE REACT JS",              
        }
    ]

  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-indigo-800 border-2">
                
        <div className="flex flex-col items-center justify-center w-full p-5 bg-gradient-to-l from-yellow-300 via-teal-400 to-green-500">
            <h1 className="text-2xl font-bold text-black">
                Desarrollo Profesional de Componentes Webs¡¡¡¡¡
            </h1>            
        </div>
       

        <table className="items-center justify-center w-full table-fixed">
            <thead className="">
                <tr className="text-center bg-green-500">
                    <th className="w-1/4"># Ejercicio</th>
                    <th className="w-1/2">Descripcion</th>
                    <th className="w-1/4">IR</th>
                </tr>
            </thead>
            <tfoot className="">
                <tr className="text-center bg-green-500">
                    <th className="w-1/4"># Ejercicio</th>
                    <th className="w-1/2">Descripcion</th>
                    <th className="w-1/4">IR</th>
                </tr>
            </tfoot>
            <tbody className='items-center justify-center text-center'>
                {linksModelos.map(({id, irAPag, description}) => {
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
                })}   
            </tbody>
        </table>
    </div>
  )
      
};

 