import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { Label, Radio } from 'flowbite-react';

export const A007BingoAutomatizado = () => {


    const [ arrayMatrixBINGO, setArrayMatrixBINGO ] = useState([]);   
    const [ cartonesAImprimir, setCartonesAImprimir ] = useState(0);   
    const [ boolBotonGenerarCartones, setBoolBotonGenerarCartones ] = useState(false);  
    //  ------------------------------------------------------------  ////
    const [ numeroInicial ] = useState(1);
    const [ numeroFinal ] = useState(75);
    const [ arrayObjetoNumerosAleatorio, setArrayObjetoNumerosAleatorio ] = useState([]);
    const [ numeroActual, setNumeroActual ] = useState(0);  
    let faltanPorSalir = numeroFinal - arrayObjetoNumerosAleatorio.length
    //  ------------------------------------------------------------  ////

    const matrixCantidadDeCartones = [
        { id: 1, name: "Cartones", value: 1, ItemChecked: false },
        { id: 2, name: "Cartones", value: 2, ItemChecked: false },
        { id: 3, name: "Cartones", value: 3, ItemChecked: false },  
        { id: 10, name: "Cartones", value: 10, ItemChecked: false },        
        { id: 15, name: "Cartones", value: 15, ItemChecked: false },
        { id: 20, name: "Cartones", value: 20, ItemChecked: false },                 
    ]  
    
    // FX VALIDAR SI EXISTE DATO EN ARRAY TIPO OBJETO
    function fxValidarDatoEnArrayObjet (_valorABuscar) {         
        let valor = arrayObjetoNumerosAleatorio.findIndex((item) => item.numeroBola === _valorABuscar);
        if(valor === -1){            
            return false;
        }else{
            return true;
        }       
    }

    // FX PARA COMPLETAR CON CEROS A LA IZQUIERDAS LOS NUMEROS QUE NO TENGAN UNA LONGITUD DE 2
    function PadLeft(value) {
        let largoDelNum = 2;
        return (value.toString().length < largoDelNum) ? PadLeft("0" + value) : value.toString();
    }
   
    // FX PARA OBTENER UN NUMERO ALEATORIO
    const fxObtenerNumAleatorioDeBingo = () => {   

        if(arrayObjetoNumerosAleatorio.length < 75){ 
            let numeroRamdom = PadLeft(Math.floor(Math.random()*(numeroFinal - numeroInicial + 1) + numeroInicial));
            //console.log("numeroRamdom = ", numeroRamdom);    
            var indice = fxValidarDatoEnArrayObjet(numeroRamdom);
            //console.log("indice = ", indice);        
                            
            if(indice === false){  
                //console.log("Valor Ramdom = ", numeroRamdom);          
                switch (true) {                    
                    case numeroRamdom >= 1 && numeroRamdom <=15 : 
                        setNumeroActual("B-" + numeroRamdom);                        
                        setArrayObjetoNumerosAleatorio([...arrayObjetoNumerosAleatorio, {
                            letra: "B",
                            numeroBola: numeroRamdom,                        
                            NombreBola: "B-"+numeroRamdom
                        }]);                      
                    break  
                    case numeroRamdom >= 16 && numeroRamdom <=30 :
                        setNumeroActual("I-" + numeroRamdom);                        
                        setArrayObjetoNumerosAleatorio([...arrayObjetoNumerosAleatorio, {
                            letra: "I",
                            numeroBola: numeroRamdom,                        
                            NombreBola: "I-"+numeroRamdom
                        }]);                        
                    break
                    case numeroRamdom >= 31 && numeroRamdom <=45 :
                        setNumeroActual("N-" + numeroRamdom);                        
                        setArrayObjetoNumerosAleatorio([...arrayObjetoNumerosAleatorio, {
                            letra: "N",
                            numeroBola: numeroRamdom,                        
                            NombreBola: "N-"+numeroRamdom
                        }]);                       
                    break  
                    case numeroRamdom >= 46 && numeroRamdom <=60 :
                        setNumeroActual("G-" + numeroRamdom);                       
                        setArrayObjetoNumerosAleatorio([...arrayObjetoNumerosAleatorio, {
                            letra: "G",
                            numeroBola: numeroRamdom,                        
                            NombreBola: "G-"+numeroRamdom
                        }]);                      
                    break
                    default :
                        setNumeroActual("O-" + numeroRamdom);                        
                        setArrayObjetoNumerosAleatorio([...arrayObjetoNumerosAleatorio, {
                            letra: "O",
                            numeroBola: numeroRamdom,                        
                            NombreBola: "O-"+numeroRamdom
                        }]);                        
                    break
                } 

                fxMarcarNumeroEnCarton(numeroRamdom);                

            }else{
                //console.log("Valor de Indice DUPLICADO IndexOF = ", indice);
                fxObtenerNumAleatorioDeBingo();
            }
        }else{
            // alert("YA SE LLENO EL ARRAY CON 75 POSICIONES");
            Swal.fire({
                title: 'Los 75 Numeros ya Salieron',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              })
        }           
    }


    const fxGenerarCartonesDeBINGO = (_NroCartones) => {        
        let numeroCartonesAImprimir = _NroCartones
        let carton = [];
        for(let ciclos = 1; ciclos <= numeroCartonesAImprimir; ciclos++){           
            let numB = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15"];
            let numI = ["16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"];
            let numN = ["31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45"];
            let numG = ["46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60"];
            let numO = ["61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75"];      
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

    const fxMarcarNumeroEnCarton = (e) => {  
        let CambiarColorCelda = "bg-red-600";  
        console.log("-------------------------------------------------");
        console.log("Cantidad de Cartones a Imprimir = ", arrayMatrixBINGO[0].length);        
        var searchValue = e.toString();
        console.log("Numero a Buscar dentro del Carton = ", searchValue); 
        
        
        for (var i = 0; i < arrayMatrixBINGO[0].length; i++) {
            var Obtener_Data_Cartones_SegunID = (document.getElementById("carton-"+[i]))
            //console.log("VALOR1 = ", VALOR1, " ", "En el Carton con Indice = ", i);  
            //var ID_CARTON = Obtener_Data_Cartones_SegunID.id
            //console.log("ID_CARTON =", ID_CARTON);
            
            for (var j = 0; j < 25; j++) {
                var Obtener_Data_Filas_Carton = (Obtener_Data_Cartones_SegunID.getElementsByTagName("td")[j])            
                //console.log("VALOR2 = ", VALOR2, " ", "En el Carton con Indice = ", i , j); 
                var Varlor_Celda = Obtener_Data_Filas_Carton.id
                //console.log("rows2 =", rows2); 
                if(Varlor_Celda === searchValue){
                    Obtener_Data_Filas_Carton.classList.toggle(CambiarColorCelda);
                    console.log("El numero =", searchValue, " ", "Si Existe en el ", " Carton-",(i+1), " ", "En la Celda Nro. = ", (j+1));                    
                }else{}
            } 
        }
    }

    const fxMostrarCartonesDeBingos = () => {   
        /* console.log("indiceCartones = ", indiceCartones, " ","index1 = ", index1, " ", "digitosDobles = ", digitosDobles, " ", "index =", index) */
        return  arrayMatrixBINGO.map((indiceCartones, index1) => (  
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
                        <tbody  id={"carton-"+index}
                                className='items-center justify-center text-center'
                                //onClick={(e) => fxSeleccionar(e)}
                        >
                            <tr className="">
                                <td id={digitosDobles.letraB[0]} className="p-3 font-bold text-gray-200 border-2 border-white "> {digitosDobles.letraB[0]}  </td>
                                <td id={digitosDobles.letraI[0]} className="p-3 font-bold text-gray-200 border-2 border-white "> {digitosDobles.letraI[0]}  </td>
                                <td id={digitosDobles.letraN[0]} className="p-3 font-bold text-gray-200 border-2 border-white "> {digitosDobles.letraN[0]}  </td>
                                <td id={digitosDobles.letraG[0]} className="p-3 font-bold text-gray-200 border-2 border-white "> {digitosDobles.letraG[0]}  </td>
                                <td id={digitosDobles.letraO[0]} className="p-3 font-bold text-gray-200 border-2 border-white "> {digitosDobles.letraO[0]}  </td>
                            </tr> 
                            <tr className="">
                                <td id={digitosDobles.letraB[1]} className="p-3 font-bold text-gray-200 border-2 border-white "> {digitosDobles.letraB[1]}  </td>
                                <td id={digitosDobles.letraI[1]} className="p-3 font-bold text-gray-200 border-2 border-white "> {digitosDobles.letraI[1]}  </td>
                                <td id={digitosDobles.letraN[1]} className="p-3 font-bold text-gray-200 border-2 border-white "> {digitosDobles.letraN[1]}  </td>
                                <td id={digitosDobles.letraG[1]} className="p-3 font-bold text-gray-200 border-2 border-white "> {digitosDobles.letraG[1]}  </td>
                                <td id={digitosDobles.letraO[1]} className="p-3 font-bold text-gray-200 border-2 border-white "> {digitosDobles.letraO[1]}  </td>
                            </tr>
                            <tr className="">
                                <td id={digitosDobles.letraB[2]} className="p-3 font-bold text-gray-200 border-2 border-white "> {digitosDobles.letraB[2]}  </td>
                                <td id={digitosDobles.letraI[2]} className="p-3 font-bold text-gray-200 border-2 border-white "> {digitosDobles.letraI[2]}  </td>
                                <td id={digitosDobles.letraN[2]} className="p-3 font-bold text-gray-200 border-2 border-white "> {digitosDobles.letraN[2]}  </td>
                                <td id={digitosDobles.letraG[2]} className="p-3 font-bold text-gray-200 border-2 border-white "> {digitosDobles.letraG[2]}  </td>
                                <td id={digitosDobles.letraO[2]} className="p-3 font-bold text-gray-200 border-2 border-white "> {digitosDobles.letraO[2]}  </td>
                            </tr>
                            <tr className="">
                                <td id={digitosDobles.letraB[3]} className="p-3 font-bold text-gray-200 border-2 border-white "> {digitosDobles.letraB[3]}  </td>
                                <td id={digitosDobles.letraI[3]} className="p-3 font-bold text-gray-200 border-2 border-white "> {digitosDobles.letraI[3]}  </td>
                                <td id={digitosDobles.letraN[3]} className="p-3 font-bold text-gray-200 border-2 border-white "> {digitosDobles.letraN[3]}  </td>
                                <td id={digitosDobles.letraG[3]} className="p-3 font-bold text-gray-200 border-2 border-white "> {digitosDobles.letraG[3]}  </td>
                                <td id={digitosDobles.letraO[3]} className="p-3 font-bold text-gray-200 border-2 border-white "> {digitosDobles.letraO[3]}  </td>
                            </tr>
                            <tr className="">
                                <td id={digitosDobles.letraB[4]} className="p-3 font-bold text-gray-200 border-2 border-white "> {digitosDobles.letraB[4]}  </td>
                                <td id={digitosDobles.letraI[4]} className="p-3 font-bold text-gray-200 border-2 border-white "> {digitosDobles.letraI[4]}  </td>
                                <td id={digitosDobles.letraN[4]} className="p-3 font-bold text-gray-200 border-2 border-white "> {digitosDobles.letraN[4]}  </td>
                                <td id={digitosDobles.letraG[4]} className="p-3 font-bold text-gray-200 border-2 border-white "> {digitosDobles.letraG[4]}  </td>
                                <td id={digitosDobles.letraO[4]} className="p-3 font-bold text-gray-200 border-2 border-white "> {digitosDobles.letraO[4]}  </td>
                            </tr>                           
                        </tbody>  
                                                
                    </table>
                ))  
            ));   
    }    

    const fxCapturarCheck = (e) => {
        fxResetVariables();
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
        setArrayObjetoNumerosAleatorio([]);
        setNumeroActual(0); 
        setBoolBotonGenerarCartones(false);      
    }

    return (
        <div className='flex flex-col items-center justify-center w-full h-full'>
            <div className='mt-24'></div>
            <div className='flex flex-col items-center justify-center text-center pt-2 lg:pt-0 w-full'>
                <span className='text-xl sm:text-2xl md:text-3xl font-semibold underline'>BINGO AUTOMATIZADO</span>
            </div>
            <div className='flex flex-col sm:flex-row  items-center justify-center w-full'>                
                <div className='flex flex-col justify-center items-center w-full sm:w-1/2 py-4'>
                    <div className='flex flex-col items-center justify-center w-60 md:w-3/4 '>
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
                        <div className='flex flex-row justify-center items-center w-full mt-5'>
                            <button    className={`${boolBotonGenerarCartones === true && 'opacity-30 cursor-not-allowed'}
                                                    px-3 py-2 bg-blue-600 mr-8 rounded-md w-28                                         
                                                `}                                
                                        disabled={boolBotonGenerarCartones}
                                        onClick={fxHandledCartonesDeBingo}
                            >
                                <span className='text-xs'> Imprimir Cart. </span> 
                            </button>
                            <button className='px-3 py-2 bg-red-600 rounded-md w-28'
                                    onClick={fxResetVariables}                            
                            >
                               <span className='text-xs'> Reset All </span>  
                            </button>
                        </div>
                    </div>                    
                </div>
                
                <div className='flex flex-row justify-center items-center w-full sm:w-1/2'>
                    <div className='flex flex-row items-center justify-center w-60 md:w-full border-y-4 pt-5'>                       
                        <div className='flex flex-row justify-around items-center w-full md:w-1/2 mb-5 '>
                            <div className='flex flex-col items-center justify-center w-1/2'>
                                <button     className={`${boolBotonGenerarCartones === false && 'opacity-30 cursor-not-allowed'}
                                                        px-3 py-2 bg-lime-700 rounded-md lg:w-28 text-black                                        
                                            `}                                             
                                            disabled={!boolBotonGenerarCartones}
                                            onClick={fxObtenerNumAleatorioDeBingo}
                                >
                                    <span className='text-xs'>Nvo. Numero</span>
                                </button>
                            </div>
                            <div className='flex flex-col items-center justify-center text-center w-1/2'>
                                <span className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold border-2 w-3/4 p-4 rounded-full bg-green-400 border-blue-500 text-brown-800'
                                > 
                                    { numeroActual } 
                                </span>
                            </div>
                        </div>
                        <div className='hidden lg:flex flex-col justify-center items-center mb-5 w-1/2 border-2 border-red-500'>
                            <div className='flex flex-row items-center justify-around text-center w-full border-2 border-yellow-300'>
                                <div className='text-lg  w-2/5'> Han Salido:</div>
                                <div className='px-2 text-xl font-bold w-1/5'> { arrayObjetoNumerosAleatorio.length }</div> 
                                <div className='text-lg w-2/5'>Numeros</div>  
                            </div>
                            <div className='flex flex-row items-center justify-around text-center w-full border-2 border-yellow-300'>
                                <div className='text-lg  w-2/5'> Faltan:</div>
                                <div className='px-2 text-xl font-bold w-1/5'> { faltanPorSalir }</div> 
                                <div className='text-lg w-2/5'>Numeros</div>  
                            </div>
                        </div>
                    </div>         
                </div>
            </div>    
            <div className='flex flex-wrap items-center justify-around w-full px-2  pb-2'>
                {fxMostrarCartonesDeBingos()}
            </div>         
        </div>
    )
}

 