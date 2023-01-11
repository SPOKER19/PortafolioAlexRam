import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { App } from '../App'; 
import { NavBar } from '../01_CompWeb/NavBar';
import { PortafolioAlex } from '../01_CompWeb/PortafolioAlex';
import { ZAbout } from '../01_CompWeb/ZAbout';
import { ZComponentesRealizados } from '../01_CompWeb/ZComponentesRealizados';
import { RedesSociales } from '../01_CompWeb/RedesSociales';
import { ZTecnologiasAprendidas } from '../01_CompWeb/ZTecnologiasAprendidas';
import { ZContact } from '../01_CompWeb/ZContact';

// import { ModelosVarios } from '../01_CompWeb/ModelosVarios';
import { A001DelegacionEventosJS } from '../01_CompWeb/A001DelegacionEventosJS';
import { A002CreacionAleatoriaCartonesBingo } from '../01_CompWeb/A002CreacionAleatoriaCartonesBingo';
import { A003CompararArrays } from '../01_CompWeb/A003CompararArrays';
import { A004NumAleatoriosDentroRango } from '../01_CompWeb/A004NumAleatoriosDentroRango';
import { A005NumeroAleotorioYLetraBingo } from '../01_CompWeb/A005NumeroAleotorioYLetraBingo';
import { A006EstructuraDivisoriaPagWeb } from '../01_CompWeb/A006EstructuraDivisoriaPagWeb';
import { A006GenerarCartonesDeBingo } from '../01_CompWeb/A006GenerarCartonesDeBingo';
import { A007BingoAutomatizado } from '../01_CompWeb/A007BingoAutomatizado';
import { Error404 } from '../06_CompX/PagesError404/Error404';







export const RoutesMain = (props) => {    
    

    return (

        <BrowserRouter>            
            <div className='flex flex-col w-full min-h-screen text-gray-100 bg-gray-800'>
            
                {/* <App /> */}
                <NavBar />               

                <Routes>
                    <Route exact path="/" element= { <PortafolioAlex />  } /> 
                    <Route exact path='/ZAbout' element = {<ZAbout />} />
                    <Route exact path='/ZComponentesRealizados' element = {<ZComponentesRealizados />} />
                    <Route exact path='/ZTecnologiasAprendidas' element = {<ZTecnologiasAprendidas />} />
                    <Route exact path='/ZContact' element = {<ZContact />} />

                    {/* <Route exact path="/" element= { <ModelosVarios />  } />  */}
                    <Route exact path='/A001DelegacionEventosJS' element = {<A001DelegacionEventosJS />} />
                    <Route exact path='/A002CreacionAleatoriaCartonesBingo' element = {<A002CreacionAleatoriaCartonesBingo />} />
                    <Route exact path='/A003CompararArrays' element = {<A003CompararArrays />} />
                    <Route exact path='/A004NumAleatoriosDentroRango' element = {<A004NumAleatoriosDentroRango />} />
                    <Route exact path='/A005NumeroAleotorioYLetraBingo' element = {<A005NumeroAleotorioYLetraBingo />} />
                    <Route exact path='/A006GenerarCartonesDeBingo' element = {<A006GenerarCartonesDeBingo />} />
                    <Route exact path='/A006EstructuraDivisoriaPagWeb' element = {<A006EstructuraDivisoriaPagWeb />} />
                    <Route exact path='/A007BingoAutomatizado' element = {<A007BingoAutomatizado />} />


                    <Route  path="*" element=   {   <Error404 />
                                                } 
                    /> 
                    
                </Routes>  
                <RedesSociales />
                {/* <A02Footer2 /> */}
            </div>         
        </BrowserRouter>              

    )
}