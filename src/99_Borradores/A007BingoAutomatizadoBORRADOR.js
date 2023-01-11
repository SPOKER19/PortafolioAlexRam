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

     // FX VALIDAR SI EXISTE DATO EN ARRAY TIPO OBJETO
   /* function fxValidarDatoInARRAY (_valorABuscar) {         
        //let valor = arrayMatrixBINGO[0].findIndex((item) => item.numeroBola === _valorABuscar);
        //(inventario.find(esCereza)
        let valor = arrayMatrixBINGO[0].find((item) => {
            (item.letrletraB[0] === _valorABuscar) ? console.log("valor ===> ", true) : "" ;
            (item.letrletraB[1] === _valorABuscar) ? console.log("valor ===> ", true) : "" ;
            (item.letrletraB[2] === _valorABuscar) ? console.log("valor ===> ", true) : "" ;
            (item.letrletraB[3] === _valorABuscar) ? console.log("valor ===> ", true) : "" ;
            (item.letrletraB[4] === _valorABuscar) ? console.log("valor ===> ", true) : "" ;
           /*  console.log("item ===> ", item);
            console.log("valor ===> ", valor); */
           /*  item.map((item2) => {
                console.log("item2 ===> ", item2);
            }) */
           /*  if(valor === -1){   
                console.log("valor ===> ", false);         
                return false;
            }else{
                console.log("valor ===> ", true); 
                return true;
            } */
    /*     })
    }  */

    const fxMarcarNumeroEnCarton = (e) => {       
        var searchValue = e.toString();
        //console.log("Este es el Valor a Buscar = ", searchValue);
        // Obtener todas las filas de la tabla
        var rows = document.getElementById(searchValue);
        console.log("-------------------------------------------------");
       // console.log("-------------------------------------------------");
        console.log("El Numero = ", searchValue, (rows)? "Si Existe" : "No Existe");   
        console.log("rows = ", rows.length); 
        
        var numeroEncontrado = false;        

        console.log("Cantidad de Cartones a Imprimir = ", arrayMatrixBINGO[0].length);
        //console.log("Cartones = ", arrayMatrixBINGO[0]);

        /* var resultadoDeBusquedaEnArray = fxValidarDatoInARRAY(searchValue);
        console.log("resultadoDeBusquedaEnArray = ", resultadoDeBusquedaEnArray); */

       /*  arrayMatrixBINGO[0].forEach((element) => {
            element.classList.add('class');
          }); */
        

       /*  for (var i = 0; i < arrayMatrixBINGO[0].length; i++) {
            // Obtener cada celda de la tabla de acuerdo a las filas que tenga.
            //var CeldaEncontrada = arrayMatrixBINGO[0][i]
            console.log("CARTON CON  INDICE =", i);
            var CeldaEncontrada = arrayMatrixBINGO[0][i];
            
            var CeldaEncontradaPRUEBA = Array.from(CeldaEncontrada)             
            //getElementsByTagName("td")[j].textContent
            console.log("CeldaEncontradaPRUEBA =", CeldaEncontradaPRUEBA);
            //document.getElementById([i]).getElementsByTagName("td")

           // console.log("CeldaEncontrada =", CeldaEncontrada);
            console.log("************"); 
            var Celda01 = CeldaEncontrada.letraB[0];
            //console.log("Celda01 =", Celda01);  
            var Celda02 = CeldaEncontrada.letraI[0];
            //console.log("Celda02 =", Celda02);  
            var Celda03 = CeldaEncontrada.letraN[0];
            //console.log("Celda03 =", Celda03);  
            var Celda04 = CeldaEncontrada.letraG[0];
            //console.log("Celda04 =", Celda04);  
            var Celda05 = CeldaEncontrada.letraO[0];
            //console.log("Celda05 =", Celda05);  

            var Celda06 = CeldaEncontrada.letraB[1];
            var Celda07 = CeldaEncontrada.letraI[1];
            var Celda08 = CeldaEncontrada.letraN[1];
            var Celda09 = CeldaEncontrada.letraG[1];
            var Celda10 = CeldaEncontrada.letraO[1];

            var Celda11 = CeldaEncontrada.letraB[2];
            var Celda12 = CeldaEncontrada.letraI[2];
            var Celda13 = CeldaEncontrada.letraN[2];
            var Celda14 = CeldaEncontrada.letraG[2];
            var Celda15 = CeldaEncontrada.letraO[2];

            var Celda16 = CeldaEncontrada.letraB[3];
            var Celda17 = CeldaEncontrada.letraI[3];
            var Celda18 = CeldaEncontrada.letraN[3];
            var Celda19 = CeldaEncontrada.letraG[3];
            var Celda20 = CeldaEncontrada.letraO[3];

            var Celda21 = CeldaEncontrada.letraB[4];
            var Celda22 = CeldaEncontrada.letraI[4];
            var Celda23 = CeldaEncontrada.letraN[4];
            var Celda24 = CeldaEncontrada.letraG[4];
            var Celda25 = CeldaEncontrada.letraO[4]; 
            
            let CeldaID = "";
            let CambiarColorCelda = "bg-red-600"; 
            //console.log("Celda01 =", Celda01, "Del Carton con Indice =", i);            
            //console.log("Celda01 = ", typeof(Celda01), " ", (Celda01.length), " ", "Del INIDCE DEL CARTON = ", i);

            if(numeroEncontrado === false){  


                
                switch (true) {                    
                    case Celda01 === searchValue: 
                        Celda01.forEach((element) => {
                            element.classList.add('CambiarColorCelda');
                        });
                        // CeldaID = document.getElementById([searchValue]);
                        //Celda01.classList.add(CambiarColorCelda);
                        // console.log("CeldaID =", CeldaID);  
                        // console.log("Celda01 =", Celda01);                     
                        // Celda01.classLi (CambiarColorCelda);
                        console.log("Valor Existe en la CELDA-01 del Carton con Indice =", [i]);
                    break  
                    case Celda02 === searchValue: 
                        Celda02.forEach((element) => {
                            element.classList.add('CambiarColorCelda');
                        });
                        // CeldaID = document.getElementById([searchValue]);
                        //Celda01.classList.add(CambiarColorCelda);
                        // console.log("CeldaID =", CeldaID); 
                        // console.log("Celda02 =", Celda02);
                        //Celda02.classList.toggle(CambiarColorCelda);
                        console.log("Valor Existe en la CELDA-02 del Carton con Indice =", [i]);
                    break  
                    case Celda03 === searchValue: 
                        Celda03.forEach((element) => {
                            element.classList.add('CambiarColorCelda');
                        });
                        // CeldaID = document.getElementById([searchValue]);
                        // CeldaID.classList.add(CambiarColorCelda);
                        // console.log("Celda03 =", Celda03);
                        // console.log("VALOR1 =", VALOR1);
                        // console.log("Celda03 =", Celda03);
                        //Celda03.classList.toggle(CambiarColorCelda);
                        console.log("Valor Existe en la CELDA-03 del Carton con Indice =", [i]);
                    break  
                    case Celda04 === searchValue: 
                        Celda04.forEach((element) => {
                            element.classList.add('CambiarColorCelda');
                        });
                        // CeldaID = document.getElementById([searchValue]);
                        // CeldaID.classList.add(CambiarColorCelda);
                        // console.log("VALOR1 =", VALOR1);
                        // console.log("Celda04 =", Celda04);
                        console.log("Valor Existe en la CELDA-04 del Carton con Indice =", [i]);
                    break  
                    case Celda05 === searchValue: 
                        Celda05.forEach((element) => {
                            element.classList.add('CambiarColorCelda');
                        });
                        // CeldaID = document.getElementById([searchValue])
                        // console.log("VALOR1 =", VALOR1);
                        // console.log("Celda05 =", Celda05);
                        // CeldaID.classList.add(CambiarColorCelda);
                        console.log("Valor Existe en la CELDA-05 del Carton con Indice =", [i]);
                    break  
                    case Celda06 === searchValue: 
                        CeldaID = document.getElementById([searchValue]);
                        CeldaID.classList.add(CambiarColorCelda);
                        console.log("Valor Existe en la CELDA-06 del Carton con Indice =", [i]);
                    break  
                    case Celda07 === searchValue: 
                        CeldaID = document.getElementById([searchValue]);
                        CeldaID.classList.add(CambiarColorCelda);
                        console.log("Valor Existe en la CELDA-07 del Carton con Indice =", [i]);
                    break  
                    case Celda08 === searchValue: 
                        CeldaID = document.getElementById([searchValue]);
                        CeldaID.classList.add(CambiarColorCelda);
                        console.log("Valor Existe en la CELDA-08 del Carton con Indice =", [i]);
                    break  
                    case Celda09 === searchValue: 
                        CeldaID = document.getElementById([searchValue]);
                        CeldaID.classList.add(CambiarColorCelda);
                        console.log("Valor Existe en la CELDA-09 del Carton con Indice =", [i]);
                    break  
                    case Celda10 === searchValue: 
                        CeldaID = document.getElementById([searchValue]);
                        CeldaID.classList.add(CambiarColorCelda);
                        console.log("Valor Existe en la CELDA-10 del Carton con Indice =", [i]);
                    break  
                    case Celda11 === searchValue: 
                        CeldaID = document.getElementById([searchValue]);
                        CeldaID.classList.add(CambiarColorCelda);
                        console.log("Valor Existe en la CELDA-11 del Carton con Indice =", [i]);
                    break  
                    case Celda12 === searchValue: 
                        CeldaID = document.getElementById([searchValue]);
                        CeldaID.classList.add(CambiarColorCelda);
                        console.log("Valor Existe en la CELDA-12 del Carton con Indice =", [i]);
                    break  
                    case Celda13 === searchValue: 
                        CeldaID = document.getElementById([searchValue]);
                        CeldaID.classList.add(CambiarColorCelda);
                        console.log("Valor Existe en la CELDA-13 del Carton con Indice =", [i]);
                    break  
                    case Celda14 === searchValue: 
                        CeldaID = document.getElementById([searchValue]);
                        CeldaID.classList.add(CambiarColorCelda);
                        console.log("Valor Existe en la CELDA-14 del Carton con Indice =", [i]);
                    break  
                    case Celda15 === searchValue: 
                        CeldaID = document.getElementById([searchValue]);
                        CeldaID.classList.add(CambiarColorCelda);
                        console.log("Valor Existe en la CELDA-15 del Carton con Indice =", [i]);
                    break  
                    case Celda16 === searchValue: 
                        CeldaID = document.getElementById([searchValue]);
                        CeldaID.classList.add(CambiarColorCelda);
                        console.log("Valor Existe en la CELDA-16 del Carton con Indice =", [i]);
                    break 
                    case Celda17 === searchValue: 
                        CeldaID = document.getElementById([searchValue]);
                        CeldaID.classList.add(CambiarColorCelda);
                        console.log("Valor Existe en la CELDA-17 del Carton con Indice =", [i]);
                    break  
                    case Celda18 === searchValue: 
                        CeldaID = document.getElementById([searchValue]);
                        CeldaID.classList.add(CambiarColorCelda);
                        console.log("Valor Existe en la CELDA-18 del Carton con Indice =", [i]);
                    break  
                    case Celda19 === searchValue: 
                        CeldaID = document.getElementById([searchValue]);
                        CeldaID.classList.add(CambiarColorCelda);
                        console.log("Valor Existe en la CELDA-19 del Carton con Indice =", [i]);
                    break  
                    case Celda20 === searchValue: 
                        CeldaID = document.getElementById([searchValue]);
                        CeldaID.classList.add(CambiarColorCelda);
                        console.log("Valor Existe en la CELDA-20 del Carton con Indice =", [i]);
                    break  
                    case Celda21 === searchValue: 
                        CeldaID = document.getElementById([searchValue]);
                        CeldaID.classList.add(CambiarColorCelda);
                        console.log("Valor Existe en la CELDA-21 del Carton con Indice =", [i]);
                    break  
                    case Celda22 === searchValue: 
                        CeldaID = document.getElementById([searchValue]);
                        CeldaID.classList.add(CambiarColorCelda);
                        console.log("Valor Existe en la CELDA-22 del Carton con Indice =", [i]);
                    break  
                    case Celda23 === searchValue: 
                        CeldaID = document.getElementById([searchValue]);
                        CeldaID.classList.add(CambiarColorCelda);
                        console.log("Valor Existe en la CELDA-23 del Carton con Indice =", [i]);
                    break  
                    case Celda24 === searchValue: 
                        CeldaID = document.getElementById([searchValue]);
                        CeldaID.classList.add(CambiarColorCelda);
                        console.log("Valor Existe en la CELDA-24 del Carton con Indice =", [i]);
                    break                      
                    case Celda25 === searchValue: 
                        CeldaID = document.getElementById([searchValue]);
                        CeldaID.classList.add(CambiarColorCelda);
                        console.log("Valor Existe en la CELDA-25 del Carton con Indice =", [i]);
                    break  
                    default :
                        console.log("EL VALOR NO EXISTE EN ESTE CARTON =", i);                      
                    break
                }   

                //fxMarcarNumeroEnCarton(numeroRamdom);                

            }else{
                //console.log("Valor de Indice DUPLICADO IndexOF = ", indice);
                //fxObtenerNumAleatorioDeBingo();
            }

           /*  if  ((Object.is(Celda01, searchValue)) ||
                    (Object.is(Celda02, searchValue)) ||
                    (Object.is(Celda03, searchValue)) ||
                    (Object.is(Celda04, searchValue)) ||
                    (Object.is(Celda05, searchValue)) ||
                    (Object.is(Celda06, searchValue)) ||
                    (Object.is(Celda07, searchValue)) ||
                    (Object.is(Celda08, searchValue)) ||
                    (Object.is(Celda09, searchValue)) ||
                    (Object.is(Celda10, searchValue)) ||
                    (Object.is(Celda11, searchValue)) ||
                    (Object.is(Celda12, searchValue)) ||
                    (Object.is(Celda13, searchValue)) ||
                    (Object.is(Celda14, searchValue)) ||
                    (Object.is(Celda15, searchValue)) ||
                    (Object.is(Celda16, searchValue)) ||
                    (Object.is(Celda17, searchValue)) ||
                    (Object.is(Celda18, searchValue)) ||
                    (Object.is(Celda19, searchValue)) ||
                    (Object.is(Celda20, searchValue)) ||
                    (Object.is(Celda21, searchValue)) ||
                    (Object.is(Celda22, searchValue)) ||
                    (Object.is(Celda23, searchValue)) ||
                    (Object.is(Celda24, searchValue)) ||
                    (Object.is(Celda25, searchValue)) 
                ) {
                console.log("VALOR EXISTE en el Carton =", [i]);
            }else{

            } */

           
            // console.log("Celda01 =", Celda01, "Del Carton con Indice =", i);
            // console.log("Celda02 =", Celda02, "Del Carton con Indice =", i);
            // console.log("Celda03 =", Celda03, "Del Carton con Indice =", i);
            // console.log("Celda04 =", Celda04, "Del Carton con Indice =", i);
            // console.log("Celda05 =", Celda05, "Del Carton con Indice =", i);
            // console.log("Celda06 =", Celda06, "Del Carton con Indice =", i);
            // console.log("Celda07 =", Celda07, "Del Carton con Indice =", i);
            // console.log("Celda08 =", Celda08, "Del Carton con Indice =", i);
            // console.log("Celda09 =", Celda09, "Del Carton con Indice =", i);
            // console.log("Celda10 =", Celda10, "Del Carton con Indice =", i);
            // console.log("Celda11 =", Celda11, "Del Carton con Indice =", i);
            // console.log("Celda12 =", Celda12, "Del Carton con Indice =", i);
            // console.log("Celda13 =", Celda13, "Del Carton con Indice =", i);
            // console.log("Celda14 =", Celda14, "Del Carton con Indice =", i);
            // console.log("Celda15 =", Celda15, "Del Carton con Indice =", i);
            // console.log("Celda16 =", Celda16, "Del Carton con Indice =", i);
            // console.log("Celda17 =", Celda17, "Del Carton con Indice =", i);
            // console.log("Celda18 =", Celda18, "Del Carton con Indice =", i);
            // console.log("Celda19 =", Celda19, "Del Carton con Indice =", i);
            // console.log("Celda20 =", Celda20, "Del Carton con Indice =", i);
            // console.log("Celda21 =", Celda21, "Del Carton con Indice =", i);
            // console.log("Celda22 =", Celda22, "Del Carton con Indice =", i);
            // console.log("Celda23 =", Celda23, "Del Carton con Indice =", i);
            // console.log("Celda24 =", Celda24, "Del Carton con Indice =", i);
            // console.log("Celda25 =", Celda25, "Del Carton con Indice =", i);
            // console.log("-------------------------------------------------");

            /* for (var j = 0; j < 25 && !numeroEncontrado; j++) {
                //let CambiarColorCelda = "bg-red-600";   
                //var VALOR1 = ((document.getElementById([i]).getElementsByTagName("td")[j].textContent).toString()).trim();
                var VALOR1 = CeldaEncontrada
                console.log("VALOR1 = ",VALOR1);
                console.log("VALOR1 = ", typeof(VALOR1), " ", (VALOR1.length), " ", "Del INIDCE DEL CARTON = ", i);
                console.log("-----------------------------------------");

                //var VALOR1 = document.getElementById([i]).getElementsByTagName("td")[j].textContent
                // console.log("VALOR1 = ", typeof(VALOR1), " ", (VALOR1.length));
                // console.log("searchValue = ", typeof(searchValue), " ", searchValue.length);
                // console.log("11 = ", typeof("11"));
                // console.log("25 sin comillas = ", typeof(25));
                // console.log("25 con comillas = ", typeof("25")); 
                //console.log("searchValue = ", searchValue);
                // if (Object.is(VALOR1, searchValue)) {
                //     console.log("VALOR EXISTE en el Carton =", [i]);
                //     //VALOR1.classList.toggle(CambiarColorCelda);                           
                //     //numeroEncontrado = true;
                //     //console.log("VALOR", VALOR1, " ", "ENCONTRADO EN EL CARTON =", i );
                //     numeroEncontrado = true;
                //     //console.log("-------------------------------------------------");
                // }else{} 
                
            } */


            // Variable que indica que el numero Encontrado es Falso.
            /* let CambiarColorCelda = "bg-red-600";

            if (CeldaEncontrada) {
                CeldaEncontrada.classList.toggle(CambiarColorCelda);                           
                //numeroEncontrado = true;
            }else{}  */
            
           /*  // Realizamos un recorrido de todas las celdas que contiene cada fila, y mientras el numero encontrado sea true 
            for (var j = 0; j < cells.length && !numberfound; j++) {
                var celda = cells[j];
                //console.log("cells[j].textContent =", cells[j].textContent)                       
                if (celda.textContent.includes(searchValue)) {
                    rows[i].getElementsByTagName("td")[j].classList.toggle(styleCelda);
                    
                    //rows[i].getElementsByTagName("td")[j].classList.toggle(styleCelda);                             
                    numberfound = true;
                } 


                //  var celda = cells[j];
                // if (celda.textContent.toLowerCase().indexOf(searchValue) > -1) {
                //     rows[i].getElementsByTagName("td")[j].classList.toggle("bg-yellow-300");
                //     numberfound = true;
                // } 
            } */

                
                //  if (numberfound) {
                //     rows[i].classList.toggle("bg-yellow-300");
                // } else {
                //     rows[i].classList.toggle("bg-blue-800");
                // } 
       /* } */ 
       

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
        /* for (var i = 0; i < rows.length; i++) {
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


                        //  var celda = cells[j];
                        // if (celda.textContent.toLowerCase().indexOf(searchValue) > -1) {
                        //     rows[i].getElementsByTagName("td")[j].classList.toggle("bg-yellow-300");
                        //     numberfound = true;
                        // } 
                    }

                    
                    //  if (numberfound) {
                    //     rows[i].classList.toggle("bg-yellow-300");
                    // } else {
                    //     rows[i].classList.toggle("bg-blue-800");
                    // } 
        }  */
    }

    const fxMostrarCartonesDeBingos = () => {   

        return  arrayMatrixBINGO.map((indiceCartones, index1) => (  
            console.log("indiceCartones0 = ", indiceCartones, " ","index1-0 = ", index1)         
                /* indiceCartones.map((digitosDobles, index) => (
                    console.log("indiceCartones = ", indiceCartones, " ","index1 = ", index1)
                ))  */
            ));   
    }
    
    /* const fxMostrarCartonesDeBingos = () => {   

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
                        <tbody  id={index}
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
    } */

    const fxCapturarCheck = (e) => {
        fxResetVariables();
        //setArrayMatrixBINGO([]);
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

 