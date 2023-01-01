import React, { useState } from 'react';
import { Label, Radio } from 'flowbite-react';

export const A006GenerarCartonesDeBingo = () => {


    const [ arrayMatrixBINGO, setArrayMatrixBINGO ] = useState([]);   
    const [ cartonesAImprimir, setCartonesAImprimir ] = useState(0);   
    const [ boolBotonGenerarCartones, setBoolBotonGenerarCartones ] = useState(false);  

    const matrixCantidadDeCartones = [
        { id: 1, name: "Cartones", value: 1, ItemChecked: false },
        { id: 2, name: "Cartones", value: 2, ItemChecked: false },
        { id: 3, name: "Cartones", value: 3, ItemChecked: false },
        { id: 4, name: "Cartones", value: 4, ItemChecked: false },
        { id: 5, name: "Cartones", value: 5, ItemChecked: false },
        { id: 6, name: "Cartones", value: 6, ItemChecked: false },
        { id: 7, name: "Cartones", value: 7, ItemChecked: false },
        { id: 8, name: "Cartones", value: 8, ItemChecked: false },
        { id: 9, name: "Cartones", value: 9, ItemChecked: false },
        { id: 10, name: "Cartones", value: 10, ItemChecked: false },        
        { id: 15, name: "Cartones", value: 15, ItemChecked: false },
        { id: 20, name: "Cartones", value: 20, ItemChecked: false },
        { id: 30, name: "Cartones", value: 30, ItemChecked: false },
        { id: 40, name: "Cartones", value: 40, ItemChecked: false },
        { id: 50, name: "Cartones", value: 50, ItemChecked: false },
        { id: 100, name: "Cartones", value: 100, ItemChecked: false },        
    ]


    /* const fxGenerarMatrixBINGO = () => {
        let numB = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
        let numI = [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
        let numN = [31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45];
        let numG = [46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60];
        let numO = [61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75];
        let b = [];
        let i = [];
        let n = [];
        let g = [];
        let o = [];

        for(let a =0; a < 5; a++){              
            let indiceNumeroRamdomB = Math.floor(Math.random() * numB.length);            
            let indiceNumeroRamdomI = Math.floor(Math.random() * numI.length); 
            let indiceNumeroRamdomN = Math.floor(Math.random() * numN.length); 
            let indiceNumeroRamdomG = Math.floor(Math.random() * numG.length); 
            let indiceNumeroRamdomO = Math.floor(Math.random() * numO.length); 

            // Numeros Aleatorios LETRA B
            b.push(numB[indiceNumeroRamdomB]);
            numB.splice(indiceNumeroRamdomB, 1); 
            // Numeros Aleatorios LETRA I
            i.push(numI[indiceNumeroRamdomI]);
            numI.splice(indiceNumeroRamdomI, 1); 
            // Numeros Aleatorios LETRA N
            n.push(numN[indiceNumeroRamdomN]);
            numN.splice(indiceNumeroRamdomN, 1); 
            // Numeros Aleatorios LETRA G
            g.push(numG[indiceNumeroRamdomG]);
            numG.splice(indiceNumeroRamdomG, 1); 
            // Numeros Aleatorios LETRA O
            o.push(numO[indiceNumeroRamdomO]);
            numO.splice(indiceNumeroRamdomO, 1);

            //console.log("numB FIN = ", numB);               
        }
        setArrayMatrixBINGO([...arrayMatrixBINGO, {
            letraB: b,
            letraI: i,                        
            letraN: n,
            letraG: g,
            letraO: o,
        }]);  
        //console.log("ARRAY B = ", b);    
    }
    */
   
    const fxGenerarCartonesDeBINGO = (_NroCartones) => {        
        let numeroCartonesAImprimir = _NroCartones
        let carton = [];
        for(let ciclos = 1; ciclos <= numeroCartonesAImprimir; ciclos++){           
            let numB = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
            let numI = [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
            let numN = [31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45];
            let numG = [46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60];
            let numO = [61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75];      
            let b = [];
            let i = [];
            let n = [];
            let g = [];
            let o = [];  
            
            for(let a = 1; a <= 5; a++){  
                let indiceNumeroRamdomB = Math.floor(Math.random() * numB.length);            
                let indiceNumeroRamdomI = Math.floor(Math.random() * numI.length); 
                let indiceNumeroRamdomN = Math.floor(Math.random() * numN.length); 
                let indiceNumeroRamdomG = Math.floor(Math.random() * numG.length); 
                let indiceNumeroRamdomO = Math.floor(Math.random() * numO.length);     
                // Numeros Aleatorios LETRA B
                b.push(numB[indiceNumeroRamdomB]);
                numB.splice(indiceNumeroRamdomB, 1); 
                // Numeros Aleatorios LETRA I
                i.push(numI[indiceNumeroRamdomI]);
                numI.splice(indiceNumeroRamdomI, 1); 
                // Numeros Aleatorios LETRA N
                n.push(numN[indiceNumeroRamdomN]);
                numN.splice(indiceNumeroRamdomN, 1); 
                // Numeros Aleatorios LETRA G
                g.push(numG[indiceNumeroRamdomG]);
                numG.splice(indiceNumeroRamdomG, 1); 
                // Numeros Aleatorios LETRA O
                o.push(numO[indiceNumeroRamdomO]);
                numO.splice(indiceNumeroRamdomO, 1);                             
            }              
            carton.push({
                letraB: b,
                letraI: i,                        
                letraN: n,
                letraG: g,
                letraO: o,
            });
            setArrayMatrixBINGO([...arrayMatrixBINGO, carton]);   
            setCartonesAImprimir(0);
            // console.log("carton = ", carton); 
        }             
    }   
    
    const fxMostrarCartonesDeBingos = () => {   

        return  arrayMatrixBINGO.map((indiceCartones) => (
                indiceCartones.map((digitosDobles, index) => (
                    <table  key={index}
                            className="items-center justify-center table m-2"  
                    >
                        <thead className="">
                            <tr className="">                                
                                <th className="p-3 font-bold text-black border-2 border-white bg-gradient-to-t from-yellow-300 to-orange-500">B</th>
                                <th className="p-3 font-bold text-black border-2 border-white bg-gradient-to-t from-yellow-300 to-orange-500">I</th>
                                <th className="p-3 font-bold text-black border-2 border-white bg-gradient-to-t from-yellow-300 to-orange-500">N</th>
                                <th className="p-3 font-bold text-black border-2 border-white bg-gradient-to-t from-yellow-300 to-orange-500">G</th>
                                <th className="p-3 font-bold text-black border-2 border-white bg-gradient-to-t from-yellow-300 to-orange-500">O</th>                                                                    
                            </tr>
                        </thead>
                        <tbody  className='items-center justify-center text-center'
                                //onClick={(e) => fxSeleccionar(e)}
                        >
                            <tr className="">
                                <td className="p-3 font-bold text-gray-200 border-2 border-white "> {digitosDobles.letraB[0]}  </td>
                                <td className="p-3 font-bold text-gray-200 border-2 border-white "> {digitosDobles.letraI[0]}  </td>
                                <td className="p-3 font-bold text-gray-200 border-2 border-white "> {digitosDobles.letraN[0]}  </td>
                                <td className="p-3 font-bold text-gray-200 border-2 border-white "> {digitosDobles.letraG[0]}  </td>
                                <td className="p-3 font-bold text-gray-200 border-2 border-white "> {digitosDobles.letraO[0]}  </td>
                            </tr>
                            <tr className="">
                                <td className="p-3 font-bold text-gray-200 border-2 border-white "> {digitosDobles.letraB[1]}  </td>
                                <td className="p-3 font-bold text-gray-200 border-2 border-white "> {digitosDobles.letraI[1]}  </td>
                                <td className="p-3 font-bold text-gray-200 border-2 border-white "> {digitosDobles.letraN[1]}  </td>
                                <td className="p-3 font-bold text-gray-200 border-2 border-white "> {digitosDobles.letraG[1]}  </td>
                                <td className="p-3 font-bold text-gray-200 border-2 border-white "> {digitosDobles.letraO[1]}  </td>
                            </tr>
                            <tr className="">
                                <td className="p-3 font-bold text-gray-200 border-2 border-white "> {digitosDobles.letraB[2]}  </td>
                                <td className="p-3 font-bold text-gray-200 border-2 border-white "> {digitosDobles.letraI[2]}  </td>
                                <td className="p-3 font-bold text-gray-200 border-2 border-white "> {digitosDobles.letraN[2]}  </td>
                                <td className="p-3 font-bold text-gray-200 border-2 border-white "> {digitosDobles.letraG[2]}  </td>
                                <td className="p-3 font-bold text-gray-200 border-2 border-white "> {digitosDobles.letraO[2]}  </td>
                            </tr>
                            <tr className="">
                                <td className="p-3 font-bold text-gray-200 border-2 border-white "> {digitosDobles.letraB[3]}  </td>
                                <td className="p-3 font-bold text-gray-200 border-2 border-white "> {digitosDobles.letraI[3]}  </td>
                                <td className="p-3 font-bold text-gray-200 border-2 border-white "> {digitosDobles.letraN[3]}  </td>
                                <td className="p-3 font-bold text-gray-200 border-2 border-white "> {digitosDobles.letraG[3]}  </td>
                                <td className="p-3 font-bold text-gray-200 border-2 border-white "> {digitosDobles.letraO[3]}  </td>
                            </tr>
                            <tr className="">
                                <td className="p-3 font-bold text-gray-200 border-2 border-white "> {digitosDobles.letraB[4]}  </td>
                                <td className="p-3 font-bold text-gray-200 border-2 border-white "> {digitosDobles.letraI[4]}  </td>
                                <td className="p-3 font-bold text-gray-200 border-2 border-white "> {digitosDobles.letraN[4]}  </td>
                                <td className="p-3 font-bold text-gray-200 border-2 border-white "> {digitosDobles.letraG[4]}  </td>
                                <td className="p-3 font-bold text-gray-200 border-2 border-white "> {digitosDobles.letraO[4]}  </td>
                            </tr>
                        </tbody>                        
                    </table> 
                ))
            ));   
    }

    const fxCapturarCheck = (e) => {
        setArrayMatrixBINGO([]);
        setBoolBotonGenerarCartones(false);        
        setCartonesAImprimir(e);
    } 

    const fxHandledCartonesDeBingo = () => {  
        setBoolBotonGenerarCartones(true);      
        setArrayMatrixBINGO([]);        
        fxGenerarCartonesDeBINGO(cartonesAImprimir);
    } 

   
    const fxMostrarMatrixCartones = () => {
        return  matrixCantidadDeCartones.map(({ id, name, value, Checked }, index) => (            
            <div    key={index}
                    //className='hover:bg-light-green-900 border-2'
                    className='flex flex-col items-center justify-center text-center w-1/5 md:w-8 hover:bg-light-green-900'
            >
                <Radio
                    id={id}
                    name={name}
                    value={value}
                    defaultChecked={Checked}
                    onChange={() => fxCapturarCheck(value)}
                />
                <Label  htmlFor={value}>
                    <span  className='text-white'> {value} </span>                       
                </Label>                                
            </div>           
        ))     
         
    }

    const fxResetVariables = () => {
        setArrayMatrixBINGO([]);        
    }

    return (
        <div className='flex flex-col items-center justify-center w-full h-full'>
            <div className='mt-24'></div>
            <div className='flex flex-col items-center justify-center text-center pt-2'>
                GENERAR CARTONES DE BINGO ALEATORIOS
            </div>
            <div className='flex flex-col sm:flex-row  items-center justify-center w-full'>                
                <div className='flex flex-col justify-center items-center w-full sm:w-1/2 py-10'>
                    <div className='flex flex-col items-center justify-center w-60 md:w-3/4'>
                        <fieldset
                            className="flex flex-col gap-4 border-2 bg-orange-900 p-3"
                            id="radio"                                               
                        >
                            <legend className=''>
                                Cantidad de Cartones
                            </legend>
                            <div className="flex flex-wrap items-center justify-around gap-2">
                                { fxMostrarMatrixCartones() }
                            </div>                                          
                        </fieldset>
                    </div>
                    
                </div>
                
                <div className='flex flex-col md:flex-row justify-center items-center w-full sm:w-1/2'>
                    <button    className={`${boolBotonGenerarCartones === true && 'opacity-30 cursor-not-allowed'}
                                            p-4 bg-blue-600 md:mr-8 mb-8 md:mb-0                                          
                                        `}                                
                                disabled={boolBotonGenerarCartones}
                                onClick={fxHandledCartonesDeBingo}
                    >
                        GENERAR MATRIX
                    </button>
                    <button className='p-4 bg-red-600'
                            onClick={fxResetVariables}                            
                    >
                        RESET
                    </button>
                </div>
            </div>    
            <div className='flex flex-wrap items-center justify-around w-full px-2  py-14'>
                { fxMostrarCartonesDeBingos()}
            </div>         
        </div>
    )
}

 