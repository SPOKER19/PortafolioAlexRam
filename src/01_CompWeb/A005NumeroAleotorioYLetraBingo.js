import React, { useState } from 'react';
import Swal from 'sweetalert2';


export const A005NumeroAleotorioYLetraBingo = () => {
    

    const [ numeroInicial ] = useState(1);
    const [ numeroFinal ] = useState(75);
    const [ nuevoArrayAleatorio, setArrayFinalAleatorio ] = useState([]);
    const [ numeroActual, setNumeroActual ] = useState(0);    
    let faltanPorSalir = numeroFinal - nuevoArrayAleatorio.length
    //------------------------------------------------------------  
    
    /* const fxCrearBolasDeBingo = useCallback (() => { 
        let arrayDeBolasDeBingo = [];  // Array que crea las 75 Bolas de Bingo  
        for (let index = 1; index < 76; index++) {
            arrayDeBolasDeBingo.push(index);           
        }        
    }, []); */

    // FX  CLONAR ARRAY
    /* const fxClonarArray = (_Array) => {
        return _Array.slice(0);
    } */

    // FX  ORDENAR ARRAY
    //function fxOrdenarArray ( a, b ){ return a.numeroBola > b.numeroBola; }  //(a,b) => a.proveedor > b.proveedor)

    // FX VALIDAR SI EXISTE DATO EN ARRAY TIPO OBJETO
    function fxValidarDatoEnArrayObjet (_valorABuscar) {         
        let valor = nuevoArrayAleatorio.findIndex((item) => item.numeroBola === _valorABuscar);
        if(valor === -1){            
            return false;
        }else{
            return true;
        }       
    }

    // FX PARA COMPLETAR CON CEROS A LA IZQUIERDAS LOS NUMEROS QUE NO TENGAN UNA LONGITUD DE 2
    function PadLeft(value) {
        let largoDelNum = 2;
        return (value.toString().length < largoDelNum) ? PadLeft("0" + value) : value;
    }

    // FX PARA OBTENER UN NUMERO ALEATORIO
    const fxObtenerNumAleatorioDeBingo = () => {            

        if(nuevoArrayAleatorio.length < 75){ 
            let numeroRamdom = PadLeft(Math.floor(Math.random()*(numeroFinal - numeroInicial + 1) + numeroInicial));
            // console.log("numeroRamdom = ", numeroRamdom);
    
            var indice = fxValidarDatoEnArrayObjet(numeroRamdom);
            //console.log("indice = ", indice);        
                            
            if(indice === false){  
                //console.log("Valor Ramdom = ", numeroRamdom);          
                switch (true) {                    
                    case numeroRamdom >= 1 && numeroRamdom <=15 : 
                        setNumeroActual("B-" + numeroRamdom);                        
                        setArrayFinalAleatorio([...nuevoArrayAleatorio, {
                            letra: "B",
                            numeroBola: numeroRamdom,                        
                            NombreBola: "B-"+numeroRamdom
                        }]);                      
                    break  
                    case numeroRamdom >= 16 && numeroRamdom <=30 :
                        setNumeroActual("I-" + numeroRamdom);                        
                        setArrayFinalAleatorio([...nuevoArrayAleatorio, {
                            letra: "I",
                            numeroBola: numeroRamdom,                        
                            NombreBola: "I-"+numeroRamdom
                        }]);                        
                    break
                    case numeroRamdom >= 31 && numeroRamdom <=45 :
                        setNumeroActual("N-" + numeroRamdom);                        
                        setArrayFinalAleatorio([...nuevoArrayAleatorio, {
                            letra: "N",
                            numeroBola: numeroRamdom,                        
                            NombreBola: "N-"+numeroRamdom
                        }]);                       
                    break  
                    case numeroRamdom >= 46 && numeroRamdom <=60 :
                        setNumeroActual("G-" + numeroRamdom);                       
                        setArrayFinalAleatorio([...nuevoArrayAleatorio, {
                            letra: "G",
                            numeroBola: numeroRamdom,                        
                            NombreBola: "G-"+numeroRamdom
                        }]);                      
                    break
                    default :
                        setNumeroActual("O-" + numeroRamdom);                        
                        setArrayFinalAleatorio([...nuevoArrayAleatorio, {
                            letra: "O",
                            numeroBola: numeroRamdom,                        
                            NombreBola: "O-"+numeroRamdom
                        }]);                        
                    break
                } 
               /*  if(numeroRamdom >= 1 && numeroRamdom <=15){ 
                    let letraNumero = "B-" + numeroRamdom; 
                    setArrayFinalAleatorio([...nuevoArrayAleatorio, {
                        letra: "B",
                        numeroBola: numeroRamdom,                        
                        NombreBola: "B-"+numeroRamdom
                    }]);    
                    setNumeroActual(letraNumero); 
                }
                else if(numeroRamdom >= 16 && numeroRamdom <=30){  
                    let letraNumero = "I-" + numeroRamdom; 
                    setArrayFinalAleatorio([...nuevoArrayAleatorio, {
                        letra: "I",
                        numeroBola: numeroRamdom,                        
                        NombreBola: "I-"+numeroRamdom
                    }]);  
                    setNumeroActual(letraNumero);                                     
                }
                else if(numeroRamdom >= 31 && numeroRamdom <=45){  
                    let letraNumero = "N-" + numeroRamdom;                 
                    setArrayFinalAleatorio([...nuevoArrayAleatorio, {
                        letra: "N",
                        numeroBola: numeroRamdom,                        
                        NombreBola: "N-"+numeroRamdom
                    }]);    
                    setNumeroActual(letraNumero);                                
                }
                else if(numeroRamdom >= 46 && numeroRamdom <=60){ 
                    let letraNumero = "G-" + numeroRamdom; 
                    setArrayFinalAleatorio([...nuevoArrayAleatorio, {
                        letra: "G",
                        numeroBola: numeroRamdom,                        
                        NombreBola: "G-"+numeroRamdom
                    }]);       
                    setNumeroActual(letraNumero);      
                }
                else if (numeroRamdom >= 61 && numeroRamdom <=75){ 
                    let letraNumero = "O-" + numeroRamdom;
                    setArrayFinalAleatorio([...nuevoArrayAleatorio, {
                        letra: "O",
                        numeroBola: numeroRamdom,                        
                        NombreBola: "O-"+numeroRamdom
                    }]);    
                    setNumeroActual(letraNumero);                                
                }else{
                    console.log("NO ESTA DENTRO DEL RANGO");
                } */
                fxSearchTable(numeroRamdom);
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

    const fxLimpiarVariables = () => {
        setArrayFinalAleatorio([]);
        setNumeroActual(0);
        fxResetFondoTable();
    }
        

    const fxSearchTable = (e) => {
        // Obtener el valor de búsqueda de la celda de entrada
        //var searchValue = document.getElementById("inputSearch").value;
        //var searchValue = e.toLowerCase();
        var searchValue = e.toString();
        //console.log("Este es el Valor a Buscar = ", searchValue);
      
        // Obtener todas las filas de la tabla
        var rows = document.getElementById("MyTable2").getElementsByTagName("tr");
        //console.log("rows = ", rows);

       /*  const styleCelda1 = { color: 'white', backgroundColor: 'blue' }
        var ID01 = document.getElementById("01").classList.contains
        console.log("ID01 = ", ID01); */

        // var cells_deFilas = rows[0].getElementsByTagName("td").classList;
        // console.log("cells_deFilas = ", cells_deFilas);

        //  var found_00 = rows[0].getElementsByTagName("td")[0].id;
        // console.log("found_ID = ", found_00);

        // var found_0 = rows[0].getElementsByTagName("td")[0].className;
        // console.log("found_0 = ", found_0);

        // var found_1 = rows[0].getElementsByTagName("td")[0].textContent;
        // console.log("found_0 = ", found_1);

        /*var found_1 = rows[0].getElementsByTagName("td")[1].textContent;
        console.log("found_1 = ", found_1);
        var found_2 = rows[0].getElementsByTagName("td")[2].textContent;
        console.log("found_2 = ", found_2);       
        var found_3 = rows[1].getElementsByTagName("td")[0].textContent;
        console.log("found_3 = ", found_3);
        var found_4 = rows[1].getElementsByTagName("td")[1].textContent;
        console.log("found_4 = ", found_4);
        var found_5 = rows[1].getElementsByTagName("td")[2].textContent;
        console.log("found_5 = ", found_5);
        var found_6 = rows[2].getElementsByTagName("td")[0].textContent;
        console.log("found_6 = ", found_6);
        var found_7 = rows[2].getElementsByTagName("td")[1].textContent;
        console.log("found_7 = ", found_7);
        var found_8 = rows[2].getElementsByTagName("td")[2].textContent;
        console.log("found_8 = ", found_8); */
        

      
        // Recorrer todas las filas y ocultar aquellas que no contengan el valor de búsqueda
        for (var i = 0; i < rows.length; i++) {
            // Obtener cada celda de la tabla de acuerdo a las filas que tenga.
            var cells = rows[i].getElementsByTagName("td");
            // Variable que indica que el numero Encontrado es Falso.
            var numberfound = false;
            let styleCelda = "bg-red-600";
            
                // Realizamos un recorrido de todas las celdas que contiene cada fila, y mientras el numero encontrado sea true 
                for (var j = 0; j < cells.length && !numberfound; j++) {
                        var celda = cells[j];
                        //console.log("cells[j].textContent =", cells[j].textContent)                       
                        if (celda.textContent.includes(searchValue)) {
                            rows[i].getElementsByTagName("td")[j].classList.toggle(styleCelda); 
                            //rows[i].getElementsByTagName("td")[j].classList.toggle(styleCelda);                             
                            numberfound = true;
                        } 

                       /*  var celda = cells[j];
                        if (celda.textContent.toLowerCase().indexOf(searchValue) > -1) {
                            rows[i].getElementsByTagName("td")[j].classList.toggle("bg-yellow-300");
                            numberfound = true;
                        } */
                    }
                    /* if (numberfound) {
                        rows[i].classList.toggle("bg-yellow-300");
                    } else {
                        rows[i].classList.toggle("bg-blue-800");
                    } */
                } 
    }

    const fxResetFondoTable = () => {        
        var rows = document.getElementById("MyTable2").getElementsByTagName("tr");  
            //console.log("rows = ", rows);
        for (var i = 0; i < rows.length; i++) {
            var cells = rows[i].getElementsByTagName("td");
            let styleCeldaReset = "bg-red-600";
            //console.log("cells = ", cells);
             for (var j = 0; j < cells.length; j++) {
                        rows[i].getElementsByTagName("td")[j].classList.remove(styleCeldaReset);
                        //rows[i].getElementsByTagName("td")[j].classList.add("bg-green-400")
                }
        } 
    }
    
    return (
        <div className='flex flex-col items-center justify-center w-full h-full text-black '>
            <div className='mt-24 '></div>
            <div className='flex flex-col items-center justify-center w-full h-full p-1 xs:flex-row'>
                <div className='flex flex-col items-center w-full h-full p-1 overflow-hidden bg-gradient-to-b from-yellow-200 via-light-blue-900 to-yellow-500 md:justify-around'>                
                    {/* ----------------------------------------- */}
                    <div className='flex flex-row items-center justify-center w-full mb-3'>
                        <div className='flex flex-col items-center justify-center w-full h-full'>
                            <div className='flex items-center justify-center w-full h-full'>
                                <div className='flex flex-col items-center justify-center w-full'>
                                    <div className='p-3 text-xl font-bold text-white bg-red-600 rounded-full sm:text-2xl md:text-3xl lg:text-4xl'>
                                        { numeroActual }
                                    </div> 
                                </div>
                            </div>
                            <div className='flex flex-col items-center justify-center w-full h-full mt-7 lg:flex-row '>
                                <div className='flex flex-col items-center justify-center object-cover w-full bg-center bg-cover'>
                                    <button className='flex flex-col items-center justify-center px-3 py-3 text-xs font-semibold text-white bg-blue-800 rounded-2xl hover:bg-black hover:text-yellow-300'
                                            onClick={fxObtenerNumAleatorioDeBingo}
                                    >
                                        OBTENER #
                                    </button>                                             
                                </div>
                                <div className='flex flex-col items-center justify-center object-cover w-full pt-4 bg-center bg-cover lg:pt-0'>
                                    <button className='flex flex-col items-center justify-center px-6 py-3 text-xs font-semibold text-white bg-red-600 rounded-2xl hover:bg-red-300'
                                            onClick={fxLimpiarVariables}
                                    >
                                        RESET
                                    </button>                                             
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col items-center justify-center w-full h-full'>
                            <div className='flex items-center justify-center w-full h-full'>
                                <div className='flex flex-col items-center justify-center w-full h-32'>
                                    <div className='flex flex-col items-center justify-center text-center text-centers'>
                                        <span className='text-sm font-bold md:text-lg'>RANGO ALEATORIO </span>                                        
                                        <span className='text-xs md:text-base'> DESDE = <span className='px-2 text-lg font-bold'> { numeroInicial }</span> </span>                                      
                                        <span className='text-xs md:text-base'> HASTA  = <span className='px-2 text-lg font-bold'> { numeroFinal }</span> </span>
                                       
                                    </div>                                            
                                </div>
                            </div>
                            <div className='flex flex-col items-center justify-center w-full h-full sm:flex-row'>
                                <div className='flex flex-col items-center justify-center w-full h-full text-center '>
                                    <div className='text-xs md:text-base'> HAN SALIDO</div>
                                    <div className='px-2 text-lg font-bold'> { nuevoArrayAleatorio.length }</div> 
                                    <div className='text-xs md:text-base'>NUMEROS</div>                                          
                                </div>
                                <div className='flex flex-col items-center justify-center w-full h-full text-center '>
                                    <div className='text-xs md:text-base'> FALTAN POR SALIR</div>
                                    <div className='px-2 text-lg font-bold'> { faltanPorSalir }</div> 
                                    <div className='text-xs md:text-base'>NUMEROS</div>                                       
                                </div>
                            </div>
                        </div>  
                    </div>
                    {/* ----------------------------------------- */}                    
                    <div className='flex items-center self-stretch justify-center w-full bg-gradient-to-tr from-indigo-900 to-teal-900 hover:bg-blue-gray-800'>
                        <div className='flex flex-col items-center justify-center w-full py-5'>                        
                            <table id="myTable" className="items-center justify-center table border-collapse"
                            >   
                                <thead className="">
                                    <tr className="">
                                        <th className="p-3 font-bold text-black border-2 border-white  bg-gradient-to-t from-light-blue-400 to-amber-800">B</th>
                                        <th className="p-3 font-bold text-black border-2 border-white  bg-gradient-to-t from-light-blue-400 to-amber-800">I</th>
                                        <th className="p-3 font-bold text-black border-2 border-white  bg-gradient-to-t from-light-blue-400 to-amber-800">N</th>
                                        <th className="p-3 font-bold text-black border-2 border-white  bg-gradient-to-t from-light-blue-400 to-amber-800">G</th>
                                        <th className="p-3 font-bold text-black border-2 border-white  bg-gradient-to-t from-light-blue-400 to-amber-800">O</th>
                                    </tr>
                                </thead>
                                <tfoot className="bg-gradient-to-t from-yellow-300 to-deep-orange-700">
                                    <tr className="">
                                        <th className="p-3 font-bold text-black border-2 border-white  bg-gradient-to-t from-light-blue-400 to-amber-800">B</th>
                                        <th className="p-3 font-bold text-black border-2 border-white  bg-gradient-to-t from-light-blue-400 to-amber-800">I</th>
                                        <th className="p-3 font-bold text-black border-2 border-white  bg-gradient-to-t from-light-blue-400 to-amber-800">N</th>
                                        <th className="p-3 font-bold text-black border-2 border-white  bg-gradient-to-t from-light-blue-400 to-amber-800">G</th>
                                        <th className="p-3 font-bold text-black border-2 border-white  bg-gradient-to-t from-light-blue-400 to-amber-800">O</th>
                                    </tr>
                                </tfoot>
                                <tbody  id='MyTable2'
                                        className='items-center justify-center text-center'
                                        //onClick={(e) => fxSeleccionar(e)}
                                >
                                    <tr className="">
                                        <td id ="01" className="p-3 font-bold text-gray-200 border-2 border-white "> 01 </td>
                                        <td id ="02" className="p-3 font-bold text-gray-200 border-2 border-white "> 16 </td> 
                                        <td id ="03" className="p-3 font-bold text-gray-200 border-2 border-white "> 31 </td>
                                        <td id ="04" className="p-3 font-bold text-gray-200 border-2 border-white "> 46 </td>
                                        <td id ="05" className="p-3 font-bold text-gray-200 border-2 border-white "> 61 </td>                       
                                    </tr>      
                                    <tr className="">
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white "> 02 </td>
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white "> 17 </td> 
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white "> 32 </td>
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white "> 47 </td>
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white "> 62 </td>                          
                                    </tr>   
                                    <tr className="">
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white "> 03 </td>
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white "> 18 </td> 
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white "> 33 </td> 
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white "> 48 </td>
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white "> 63 </td>                    
                                    </tr>   
                                    <tr className="">
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white "> 04 </td>
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white "> 19 </td> 
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white "> 34 </td>
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white "> 49 </td>
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white "> 64 </td>                     
                                    </tr>   
                                    <tr className="">
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white "> 05 </td>
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white "> 20 </td> 
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white "> 35 </td>
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white "> 50 </td>
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white "> 65 </td>                        
                                    </tr>       
                                    <tr className="">
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white "> 06 </td>
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white "> 21 </td> 
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white "> 36 </td>
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white "> 51 </td>
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white "> 66 </td>                       
                                    </tr>      
                                    <tr className="">
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white "> 07 </td>
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white "> 22 </td> 
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white "> 37 </td>
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white "> 52 </td>
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white "> 67 </td>                          
                                    </tr>   
                                    <tr className="">
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white "> 08 </td>
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white "> 23 </td> 
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white "> 38 </td> 
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white "> 53 </td>
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white "> 68 </td>                    
                                    </tr>   
                                    <tr className="">
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white "> 09 </td>
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white "> 24 </td> 
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white "> 39 </td>
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white "> 54 </td>
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white "> 69 </td>                     
                                    </tr>   
                                    <tr className="">
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white "> 10  </td>
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white "> 25 </td> 
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white "> 40 </td>
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white "> 55 </td>
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white "> 70 </td>                        
                                    </tr> 
                                    <tr className="">
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white "> 11  </td>
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white "> 26 </td> 
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white "> 41 </td>
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white "> 56 </td>
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white "> 71 </td>                       
                                    </tr>      
                                    <tr className="">
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white "> 12  </td>
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white "> 27 </td> 
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white "> 42 </td>
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white "> 57 </td>
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white "> 72 </td>                          
                                    </tr>   
                                    <tr className="">
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white "> 13  </td>
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white "> 28 </td> 
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white "> 43 </td> 
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white "> 58 </td>
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white "> 73 </td>                    
                                    </tr>   
                                    <tr className="">
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white "> 14  </td>
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white "> 29 </td> 
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white "> 44 </td>
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white "> 59 </td>
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white "> 74 </td>                     
                                    </tr>   
                                    <tr className="">
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white "> 15  </td>
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white "> 30 </td> 
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white "> 45 </td>
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white "> 60 </td>
                                        <td className="p-3 font-bold text-gray-200 border-2 border-white "> 75 </td>                        
                                    </tr>         
                                </tbody>
                            </table>                                             
                        </div>

                        {/* MODO PC */}                        
                        {/* <div className='flex-col items-center justify-center hidden w-full px-2 py-3 md:flex'>
                            <table id="table" className="items-center justify-center table border-collapse"
                            >                                
                                <tbody  id='MyTable3'
                                        className='items-center justify-center text-center'
                                        //onClick={(e) => fxSeleccionar(e)}
                                >
                                    <tr className="">
                                        <th className="p-2 font-bold text-black border-2 border-white lg:p-3  bg-gradient-to-t from-light-blue-400 to-amber-800">B</th>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 01  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 02  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 03  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 04  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 05  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 06  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 07  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 08  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 09  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 10  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 11 </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 12  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 13  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 14  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 15  </td>
                                    </tr> 
                                    <tr className="">                                        
                                        <th className="p-2 font-bold text-black border-2 border-white lg:p-3  bg-gradient-to-t from-light-blue-400 to-amber-800">I</th>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 16  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 17  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 18  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 19  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 20  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 21  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 22  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 23  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 24  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 25  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 26 </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 27  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 28  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 29  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 30  </td>
                                    </tr>  
                                    <tr className="">                                        
                                        <th className="p-2 font-bold text-black border-2 border-white lg:p-3  bg-gradient-to-t from-light-blue-400 to-amber-800">N</th>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 31  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 32  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 33  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 34  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 35  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 36  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 37  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 38  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 39  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 40  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 41 </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 42  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 43  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 44  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 45  </td>
                                    </tr>   
                                    <tr className="">                                        
                                        <th className="p-2 font-bold text-black border-2 border-white lg:p-3  bg-gradient-to-t from-light-blue-400 to-amber-800">G</th>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 46  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 47  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 48  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 49  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 50  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 51  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 52  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 53  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 54  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 55  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 56 </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 57  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 58  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 59  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 60  </td>
                                    </tr>  
                                    <tr className="">                                        
                                        <th className="p-2 font-bold text-black border-2 border-white lg:p-3  bg-gradient-to-t from-light-blue-400 to-amber-800">O</th>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 61  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 62  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 63  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 64  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 65  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 66  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 67  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 68  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 69  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 70  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 71 </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 72  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 73  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 74  </td>
                                        <td className="p-2 font-bold text-gray-200 border-2 border-white lg:p-3 md:text-2xl"> 75  </td>
                                    </tr>          
                                        
                                </tbody>
                            </table>                                             
                        </div> */}


                    </div>                                         
                </div>                 
            </div>
        </div>
    )
}
