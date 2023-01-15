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
    const [ indicarCartonesConBingo, setIndicarCartonesConBingo ] = useState([]);

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
                    fxChequearBingoEnCarton();
                }else{}
            } 
        }
    }

    const fxChequearBingoEnCarton = () => {  
        console.log("CHEQUEANDO CARTON....");
        let ColorDeFondoREDCadaCelda = [];
        let CartonesConBingo = [];
        let candado = false;

        for (var i = 0; i < arrayMatrixBINGO[0].length; i++) {
            var Obtener_Data_Cartones_SegunID_FX = (document.getElementById("carton-"+[i]))
            //let Obtener_Data_Filas_Carton_FX = (Obtener_Data_Cartones_SegunID_FX.getElementsByTagName("td")[j]).classList.contains("bg-red-600") 
            //console.log("VALOR1 = ", VALOR1, " ", "En el Carton con Indice = ", i);  
            //var ID_CARTON = Obtener_Data_Cartones_SegunID.id
            //console.log("ID_CARTON =", ID_CARTON);

            let celda01 = ({IDCarton: "carton-"+[i], Celda: 1, FondoRed: (Obtener_Data_Cartones_SegunID_FX.getElementsByTagName("td")[0]).classList.contains("bg-red-600")});
            let celda02 = ({IDCarton: "carton-"+[i], Celda: 2, FondoRed: (Obtener_Data_Cartones_SegunID_FX.getElementsByTagName("td")[1]).classList.contains("bg-red-600")});
            let celda03 = ({IDCarton: "carton-"+[i], Celda: 3, FondoRed: (Obtener_Data_Cartones_SegunID_FX.getElementsByTagName("td")[2]).classList.contains("bg-red-600")});
            let celda04 = ({IDCarton: "carton-"+[i], Celda: 4, FondoRed: (Obtener_Data_Cartones_SegunID_FX.getElementsByTagName("td")[3]).classList.contains("bg-red-600")});
            let celda05 = ({IDCarton: "carton-"+[i], Celda: 5, FondoRed: (Obtener_Data_Cartones_SegunID_FX.getElementsByTagName("td")[4]).classList.contains("bg-red-600")});
            let celda06 = ({IDCarton: "carton-"+[i], Celda: 6, FondoRed: (Obtener_Data_Cartones_SegunID_FX.getElementsByTagName("td")[5]).classList.contains("bg-red-600")});
            let celda07 = ({IDCarton: "carton-"+[i], Celda: 7, FondoRed: (Obtener_Data_Cartones_SegunID_FX.getElementsByTagName("td")[6]).classList.contains("bg-red-600")});
            let celda08 = ({IDCarton: "carton-"+[i], Celda: 8, FondoRed: (Obtener_Data_Cartones_SegunID_FX.getElementsByTagName("td")[7]).classList.contains("bg-red-600")});
            let celda09 = ({IDCarton: "carton-"+[i], Celda: 9, FondoRed: (Obtener_Data_Cartones_SegunID_FX.getElementsByTagName("td")[8]).classList.contains("bg-red-600")});
            let celda10 = ({IDCarton: "carton-"+[i], Celda: 10, FondoRed: (Obtener_Data_Cartones_SegunID_FX.getElementsByTagName("td")[9]).classList.contains("bg-red-600")});
            let celda11 = ({IDCarton: "carton-"+[i], Celda: 11, FondoRed: (Obtener_Data_Cartones_SegunID_FX.getElementsByTagName("td")[10]).classList.contains("bg-red-600")});
            let celda12 = ({IDCarton: "carton-"+[i], Celda: 12, FondoRed: (Obtener_Data_Cartones_SegunID_FX.getElementsByTagName("td")[11]).classList.contains("bg-red-600")});
            let celda13 = ({IDCarton: "carton-"+[i], Celda: 13, FondoRed: (Obtener_Data_Cartones_SegunID_FX.getElementsByTagName("td")[12]).classList.contains("bg-red-600")});
            let celda14 = ({IDCarton: "carton-"+[i], Celda: 14, FondoRed: (Obtener_Data_Cartones_SegunID_FX.getElementsByTagName("td")[13]).classList.contains("bg-red-600")});
            let celda15 = ({IDCarton: "carton-"+[i], Celda: 15, FondoRed: (Obtener_Data_Cartones_SegunID_FX.getElementsByTagName("td")[14]).classList.contains("bg-red-600")});
            let celda16 = ({IDCarton: "carton-"+[i], Celda: 16, FondoRed: (Obtener_Data_Cartones_SegunID_FX.getElementsByTagName("td")[15]).classList.contains("bg-red-600")});
            let celda17 = ({IDCarton: "carton-"+[i], Celda: 17, FondoRed: (Obtener_Data_Cartones_SegunID_FX.getElementsByTagName("td")[16]).classList.contains("bg-red-600")});
            let celda18 = ({IDCarton: "carton-"+[i], Celda: 18, FondoRed: (Obtener_Data_Cartones_SegunID_FX.getElementsByTagName("td")[17]).classList.contains("bg-red-600")});
            let celda19 = ({IDCarton: "carton-"+[i], Celda: 19, FondoRed: (Obtener_Data_Cartones_SegunID_FX.getElementsByTagName("td")[18]).classList.contains("bg-red-600")});
            let celda20 = ({IDCarton: "carton-"+[i], Celda: 20, FondoRed: (Obtener_Data_Cartones_SegunID_FX.getElementsByTagName("td")[19]).classList.contains("bg-red-600")});
            let celda21 = ({IDCarton: "carton-"+[i], Celda: 21, FondoRed: (Obtener_Data_Cartones_SegunID_FX.getElementsByTagName("td")[20]).classList.contains("bg-red-600")});
            let celda22 = ({IDCarton: "carton-"+[i], Celda: 22, FondoRed: (Obtener_Data_Cartones_SegunID_FX.getElementsByTagName("td")[21]).classList.contains("bg-red-600")});
            let celda23 = ({IDCarton: "carton-"+[i], Celda: 23, FondoRed: (Obtener_Data_Cartones_SegunID_FX.getElementsByTagName("td")[22]).classList.contains("bg-red-600")});
            let celda24 = ({IDCarton: "carton-"+[i], Celda: 24, FondoRed: (Obtener_Data_Cartones_SegunID_FX.getElementsByTagName("td")[23]).classList.contains("bg-red-600")});
            let celda25 = ({IDCarton: "carton-"+[i], Celda: 25, FondoRed: (Obtener_Data_Cartones_SegunID_FX.getElementsByTagName("td")[24]).classList.contains("bg-red-600")});
            
            setIndicarCartonesConBingo([...indicarCartonesConBingo,
                {IDCarton: "carton-"+[i],                                               
                CincoEnLineaHorizontalLinea01: false,
                CincoEnLineaHorizontalLinea02: false,
                CincoEnLineaHorizontalLinea03: false,
                CincoEnLineaHorizontalLinea04: false,
                CincoEnLineaHorizontalLinea05: false,
                CuatroEsquinas: false,} 
            ]);
            
            
            if(candado === false){  
                
                         
                if(celda01.FondoRed === true &&  celda02.FondoRed === true && celda03.FondoRed === true && celda04.FondoRed === true && celda05.FondoRed === true){                    
                    setIndicarCartonesConBingo([...indicarCartonesConBingo, indicarCartonesConBingo.CincoEnLineaHorizontalLinea01 = true]);
                    console.log("El Carton Nro.", "carton-"+[i], "HIZO BINGO 5 EN LINEA LINEA-2................" )  
                }else{}

                if(celda06.FondoRed === true &&  celda07.FondoRed === true && celda08.FondoRed === true && celda09.FondoRed === true && celda10.FondoRed === true){
                    setIndicarCartonesConBingo([...indicarCartonesConBingo, indicarCartonesConBingo.CincoEnLineaHorizontalLinea02 = true]);                    
                    console.log("El Carton Nro.", "carton-"+[i], "HIZO BINGO 5 EN LINEA LINEA-2................" )                    
                }else{}

                if(celda11.FondoRed === true &&  celda12.FondoRed === true && celda13.FondoRed === true && celda14.FondoRed === true && celda15.FondoRed === true){
                    setIndicarCartonesConBingo([...indicarCartonesConBingo, indicarCartonesConBingo.CincoEnLineaHorizontalLinea03 = true]);                    
                    console.log("El Carton Nro.", "carton-"+[i], "HIZO BINGO 5 EN LINEA LINEA-3................" )                    
                }else{}

                if(celda16.FondoRed === true &&  celda17.FondoRed === true && celda18.FondoRed === true && celda19.FondoRed === true && celda20.FondoRed === true){
                    setIndicarCartonesConBingo([...indicarCartonesConBingo, indicarCartonesConBingo.CincoEnLineaHorizontalLinea04 = true]);                   
                    console.log("El Carton Nro.", "carton-"+[i], "HIZO BINGO 5 EN LINEA LINEA-4................" )                    
                }else{}

                if(celda21.FondoRed === true &&  celda22.FondoRed === true && celda23.FondoRed === true && celda24.FondoRed === true && celda25.FondoRed === true){
                    setIndicarCartonesConBingo([...indicarCartonesConBingo, indicarCartonesConBingo.CincoEnLineaHorizontalLinea05 = true]);                    
                    console.log("El Carton Nro.", "carton-"+[i], "HIZO BINGO 5 EN LINEA LINEA-5................" )                    
                }else{}


                if(celda01.FondoRed === true &&  celda05.FondoRed === true && celda21.FondoRed === true && celda25.FondoRed === true){
                    setIndicarCartonesConBingo([...indicarCartonesConBingo, indicarCartonesConBingo.CuatroEsquinas = true]);                    
                    console.log("El Carton Nro.", "carton-"+[i], "HIZO BINGO 4 ESQUINAS................" )
                }else{
                    console.log("Este Carton todavia no ha hecho Bingo")
                }     
                
            }else{
               
            } 


          
            for (var j = 0; j < 25; j++) {
                let Obtener_Data_Filas_Carton_FX = (Obtener_Data_Cartones_SegunID_FX.getElementsByTagName("td")[j]).classList.contains("bg-red-600") 
                //console.log("Obtener_Data_Filas_Carton_FX = ", Obtener_Data_Filas_Carton_FX);                                   
                ColorDeFondoREDCadaCelda.push({
                    IDCarton: "carton-"+[i],
                    Celda: j+1,                        
                    FondoRed: Obtener_Data_Filas_Carton_FX
                });
                //setCeldasFondoRed()               
            } 
            
        }
        //console.log("CartonesConBingo = ", CartonesConBingo);
        
    }


    const fxMostrarCartonesDeBingos = () => {   
        /* console.log("indiceCartones = ", indiceCartones, " ","index1 = ", index1, " ", "digitosDobles = ", digitosDobles, " ", "index =", index) */
        return  arrayMatrixBINGO.map((indiceCartones, index1) => (  
                 indiceCartones.map((digitosDobles, index) => (                    
                    <table  key={index}
                            className="items-center justify-center table m-2 border-2"  
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
                            <tr>
                                <td colSpan={4}>
                                    Cuatro Esquinas
                                </td>
                                <td>
                                   {console.log("indicarCartonesConBingo = ", indicarCartonesConBingo)}
                                  {/* { ((("carton-"+index) === indicarCartonesConBingo.IDCarton) &&  (indicarCartonesConBingo.CuatroEsquinas === true))
                                    ?  "SI"
                                    :  ""
                                   } */}
                                </td>                               
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
                    className='flex flex-col items-center justify-center w-1/5 text-center md:w-8 hover:bg-light-green-900'
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
        setIndicarCartonesConBingo([]);    
    }

    return (
        <div className='flex flex-col items-center justify-center w-full h-full'>
            <div className='mt-24'></div>
            <div className='flex flex-col items-center justify-center w-full pt-2 text-center lg:pt-0'>
                <span className='text-xl font-semibold underline sm:text-2xl md:text-3xl'>BINGO AUTOMATIZADO</span>
            </div>
            <div className='flex flex-col items-center justify-center w-full sm:flex-row'>                
                <div className='flex flex-col items-center justify-center w-full py-4 sm:w-1/2'>
                    <div className='flex flex-col items-center justify-center w-60 md:w-3/4 '>
                        <fieldset
                            className="flex flex-col gap-4 p-3 bg-orange-900 border-2"
                            id="radio"                                               
                        >
                            <legend className=''>
                                Cantidad de Cartones
                            </legend>
                            <div className="flex flex-wrap items-center justify-around gap-2">
                                { fxMostrarMatrixCartones() }
                            </div>                                          
                        </fieldset>
                        <div className='flex flex-row items-center justify-center w-full mt-5'>
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
                
                <div className='flex flex-row items-center justify-center w-full sm:w-1/2'>
                    <div className='flex flex-row items-center justify-center pt-5 w-60 md:w-full border-y-4'>                       
                        <div className='flex flex-row items-center justify-around w-full mb-5 md:w-1/2 '>
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
                            <div className='flex flex-col items-center justify-center w-1/2 text-center'>
                                <span className='w-3/4 p-4 text-xl font-bold bg-green-400 border-2 border-blue-500 rounded-full sm:text-2xl md:text-3xl lg:text-4xl text-brown-800'
                                > 
                                    { numeroActual } 
                                </span>
                            </div>
                        </div>
                        <div className='flex-col items-center justify-center hidden w-1/2 mb-5 border-2 border-red-500 lg:flex'>
                            <div className='flex flex-row items-center justify-around w-full text-center border-2 border-yellow-300'>
                                <div className='w-2/5 text-lg'> Han Salido:</div>
                                <div className='w-1/5 px-2 text-xl font-bold'> { arrayObjetoNumerosAleatorio.length }</div> 
                                <div className='w-2/5 text-lg'>Numeros</div>  
                            </div>
                            <div className='flex flex-row items-center justify-around w-full text-center border-2 border-yellow-300'>
                                <div className='w-2/5 text-lg'> Faltan:</div>
                                <div className='w-1/5 px-2 text-xl font-bold'> { faltanPorSalir }</div> 
                                <div className='w-2/5 text-lg'>Numeros</div>  
                            </div>
                        </div>
                    </div>         
                </div>
            </div>    
            <div className='flex flex-wrap items-center justify-around w-full px-2 pb-2'>
                {fxMostrarCartonesDeBingos()}
            </div>         
        </div>
    )
}

 