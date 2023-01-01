import React, { useState } from 'react';
import { Label, Radio } from 'flowbite-react';

export const A006GenerarCartonesDeBingo = () => {


    const [ arrayMatrixBINGO, setArrayMatrixBINGO ] = useState([]);      

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
            // console.log("carton = ", carton); 
        }             
    }

    //console.log("arrayMatrixBINGO = ", arrayMatrixBINGO);
    
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

   /*  const fxCapturarCheck = () => {
        console.log
    } */

    return (
        <div className='flex flex-col items-center justify-center w-full h-full'>
            <div className='mt-24'></div>
            <div className='flex flex-col items-center justify-center'>GENERAR CARTONES DE BINGO ALEATORIOS</div>
            <div className='flex flex-col sm:flex-row  items-center justify-center pt-5 border-2 w-full'>                
                <div className='flex flex-col justify-center items-center w-full sm:w-1/2 py-10'>
                    <fieldset
                        className="flex flex-col gap-4 border-2 bg-orange-900 p-3"
                        id="radio"
                        //onChange={fxCapturarCheck}
                    >
                        <legend className=''>
                            Cantidad
                        </legend>
                        <div className="flex items-center justify-around gap-2">
                            <div className='hover:bg-light-green-900'>
                                <Radio
                                    id="1"
                                    name="cartones"
                                    value="1"
                                    defaultChecked={true}
                                />
                                <Label  htmlFor="1" >
                                    <span  className='text-white'> 1 </span>                       
                                </Label>                                
                            </div>
                            <div className='hover:bg-light-green-900'>
                                <Radio
                                    id="2"
                                    name="cartones"
                                    value="2"                                    
                                />
                                <Label  htmlFor="2" >
                                    <span  className='text-white'> 2 </span>                       
                                </Label>
                            </div> 
                            <div className='hover:bg-light-green-900'>
                                <Radio
                                    id="3"
                                    name="cartones"
                                    value="3"   
                                />
                                <Label  htmlFor="3" >
                                    <span  className='text-white'> 3 </span>                       
                                </Label>
                            </div>
                            <div className='hover:bg-light-green-900'>
                                <Radio
                                    id="4"
                                    name="cartones"
                                    value="4"   
                                />
                                <Label  htmlFor="4" >
                                    <span  className='text-white'> 4 </span>                       
                                </Label>
                            </div>
                            <div className='hover:bg-light-green-900'>
                                <Radio
                                    id="5"
                                    name="cartones"
                                    value="5"   
                                />
                                <Label  htmlFor="5" >
                                    <span  className='text-white'> 5 </span>                       
                                </Label>
                            </div>
                        </div>
                        <div className="flex items-center justify-around gap-2">
                            <div className='hover:bg-light-green-900'>
                                <Radio
                                    id="6"
                                    name="cartones"
                                    value="6"   
                                />
                                <Label  htmlFor="6" >
                                    <span  className='text-white'> 6 </span>                       
                                </Label>
                            </div>
                            <div className='hover:bg-light-green-900'>
                                <Radio
                                    id="7"
                                    name="cartones"
                                    value="7"   
                                />
                                <Label  htmlFor="7" >
                                    <span  className='text-white'> 7 </span>                       
                                </Label>
                            </div>
                            <div className='hover:bg-light-green-900'>
                                <Radio
                                    id="8"
                                    name="cartones"
                                    value="8"   
                                />
                                <Label  htmlFor="8" >
                                    <span  className='text-white'> 8 </span>                       
                                </Label>
                            </div>
                            <div className='hover:bg-light-green-900'>
                                <Radio
                                    id="9"
                                    name="cartones"
                                    value="9"   
                                />
                                <Label  htmlFor="9" >
                                    <span  className='text-white'> 9 </span>                       
                                </Label>
                            </div>                       
                        </div>   
                        <div className="flex items-center justify-around gap-2">
                            <div className='hover:bg-light-green-900'>
                                <Radio
                                    id="10"
                                    name="cartones"
                                    value="10"   
                                />
                                <Label  htmlFor="10" >
                                    <span  className='text-white'> 10 </span>                       
                                </Label>
                            </div>
                            <div className='hover:bg-light-green-900'>
                                <Radio
                                    id="12"
                                    name="cartones"
                                    value="12"   
                                />
                                <Label  htmlFor="12" >
                                    <span  className='text-white'> 12 </span>                       
                                </Label>
                            </div>
                            <div className='hover:bg-light-green-900'>
                                <Radio
                                    id="15"
                                    name="cartones"
                                    value="15"   
                                />
                                <Label  htmlFor="15" >
                                    <span  className='text-white'> 15 </span>                       
                                </Label>
                            </div>
                            <div className='hover:bg-light-green-900'>
                                <Radio
                                    id="20"
                                    name="cartones"
                                    value="20"   
                                />
                                <Label  htmlFor="20" >
                                    <span  className='text-white'> 20 </span>                       
                                </Label>
                            </div>                       
                        </div>   
                        <div className="flex items-center justify-around gap-2">
                            <div className='hover:bg-light-green-900'>
                                <Radio
                                    id="30"
                                    name="cartones"
                                    value="30"   
                                />
                                <Label  htmlFor="30" >
                                    <span  className='text-white'> 30 </span>                       
                                </Label>
                            </div>
                            <div className='hover:bg-light-green-900'>
                                <Radio
                                    id="40"
                                    name="cartones"
                                    value="40"   
                                />
                                <Label  htmlFor="40" >
                                    <span  className='text-white'> 40 </span>                       
                                </Label>
                            </div>
                            <div className='hover:bg-light-green-900'>
                                <Radio
                                    id="50"
                                    name="cartones"
                                    value="50"   
                                />
                                <Label  htmlFor="50" >
                                    <span  className='text-white'> 50 </span>                       
                                </Label>
                            </div>
                            <div className='hover:bg-light-green-900'>
                                <Radio
                                    id="100"
                                    name="cartones"
                                    value="100"   
                                />
                                <Label  htmlFor="100" >
                                    <span  className='text-white'> 100 </span>                       
                                </Label>
                            </div>                       
                        </div>                    
                    </fieldset>
                    
                </div>
                
                <div className='flex flex-col justify-center items-center w-full sm:w-1/2'>
                    <button className='p-4 bg-blue-600'
                            onClick={() => fxGenerarCartonesDeBINGO(2)}
                            //onClick={fxGenerarMatrixBINGO}
                    >
                        GENERAR MATRIX
                    </button>
                </div>
            </div>    
            <div className='flex flex-wrap items-center justify-around w-full px-2 border-2 border-yellow-300 py-14'>
                { fxMostrarCartonesDeBingos()}
            </div>         
        </div>
    )
}

 