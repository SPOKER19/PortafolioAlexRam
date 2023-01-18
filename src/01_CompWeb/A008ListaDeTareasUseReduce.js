import React, {useReducer, useRef} from 'react';
import { Button, Label, TextInput } from 'flowbite-react';

export const A008ListaDeTareasUseReduce = () => {

    /// *******  LISTA DE TAREAS  **********************////
    const inputRef = useRef();
    //-----------------------------------------------------------------//


    /// *******  LISTA DE TAREAS  **********************////
    const [tareas, dispatch] = useReducer((state = [], action) => {
        switch (action.type) {
          case "agregar_tareas": {
              return [
                  ...state,
                  { id: state.length,
                    title: action.title
                  }
              ]        
          }
          case "borrar_tarea": {
            return state.filter((task, index) => index !== action.index);
          }
          default:{
            return state;
         }            
        }
    });
    //-----------------------------------------------------------------//

    /// *******  LISTA DE TAREAS  **********************////
    const fxHandleSubmit = (event) => {      
        event.preventDefault();
        // console.log("Estoy Aqui = ")
        // console.log("inputRef = ", inputRef.current.value) 
        dispatch({
          type: "agregar_tareas",
          title: inputRef.current.value
        });
    }
    //-----------------------------------------------------------------//

    /// ******* CONTADOR  **********************////
      const TYPECONTADOR = {
        SUMAR: "SUMAR",
        RESTAR: "RESTAR",
        SUMAR5: "SUMAR5",
        RESTAR5: "RESTAR5",
        RESET: "RESET",
      }

      const [ contador, DISPContador] = useReducer((stateCONTADOR = 0, actionCONTADOR) => {
        switch (actionCONTADOR.type) {          
          case TYPECONTADOR.SUMAR : {
            return stateCONTADOR + 1;
          }
          case TYPECONTADOR.RESTAR : {
            return stateCONTADOR - 1;
          }
          case TYPECONTADOR.SUMAR5 : {
            //return stateCONTADOR + 5;
            return stateCONTADOR + actionCONTADOR.payload
          }
          case TYPECONTADOR.RESTAR5 : {
            //return stateCONTADOR - 5 ;
            return stateCONTADOR - actionCONTADOR.payload
          }
          case TYPECONTADOR.RESET : {
            return stateCONTADOR = 0;
          }
          default:{
            return stateCONTADOR;
          }            
        }
      });

      const fxSumar = () => {
        //console.log("DISTES CLICK EN SUMAR ++++++");
        DISPContador({
          type: TYPECONTADOR.SUMAR,         
        });
      }

      const fxSumarMas5 = () => {
        //console.log("DISTES CLICK EN SUMAR MAS 5 ++++++");
        DISPContador({
          type: TYPECONTADOR.SUMAR5,
          payload: 5         
        });
      }

      const fxRestar= () => {
        //console.log("DISTES CLICK EN RESTAR -------");
        DISPContador({
          type: TYPECONTADOR.RESTAR,                   
        });
      }

      const fxRestarMenos5 = () => {
        //console.log("DISTES CLICK EN RESTAR MENOS 5");
        DISPContador({
          type: TYPECONTADOR.RESTAR5,  
          //payload: -5        
          payload: 5        
        });
      }

      const fxReset = () => {
        //console.log("DISTES CLICK EN RESETEAR ");
        DISPContador({
          type: TYPECONTADOR.RESET,         
        });
      }
     //-----------------------------------------------------------------//

  return (
        <div className='flex flex-col items-center justify-center w-full h-full'>
            <div className='mt-24'></div>
            <div className='flex flex-col items-center justify-center w-full pt-2 text-center border-b-2 border-yellow-300'>
              <div className='flex flex-col items-center justify-center pb-2 text-center w-60 sm:w-1/3 md:w-1/2'>
                <div className='flex flex-col items-center justify-center w-full pb-2 text-center'>
                    <span className='text-xl font-semibold underline sm:text-2xl md:text-3xl'>Contador</span>
                </div> 
                <div className='flex flex-col items-center justify-center w-full pb-2 text-center'>
                    <span className='text-3xl font-semibold'> {contador} </span>
                </div> 
                <div className='flex flex-wrap items-center justify-center w-full pb-3'>
                  <button   className='px-4 py-2 font-bold bg-light-blue-800'
                            onClick={fxSumarMas5}
                  > 
                    +5 
                  </button>
                  <button   className='px-4 py-2 mx-2 font-bold bg-light-blue-800'
                            onClick={fxSumar}
                  > 
                    + 
                  </button>
                  <button   className='px-4 py-2 font-bold bg-red-700'
                            onClick={fxRestar}
                  > 
                    -
                  </button>
                  <button   className='px-4 py-2 mx-2 font-bold bg-red-700'
                             onClick={fxRestarMenos5}
                  > 
                    -5
                  </button>
                  <button   className='px-4 py-2 mt-3 font-bold md:mt-0 bg-lime-900'
                            onClick={fxReset}
                  > 
                    Reset
                  </button>
                </div>

              </div>

            </div>
            <div className='flex flex-col items-center justify-center w-full pt-2 text-center'>
              <div className='flex flex-col items-center justify-center w-full pt-2 text-center'>
                  <span className='text-xl font-semibold underline sm:text-2xl md:text-3xl'>Lista de Tareas</span>
              </div> 

              <div className='flex flex-col items-center justify-center p-3 mt-5 w-60 md:w-1/3'>
                <div className="items-center justify-center block pb-2 mb-2 text-center">
                  <Label                      
                    htmlFor="email4"
                    //value="Your email"
                  >
                    <span className='text-blue-gray-50 md:text-xl lg:text-2xl'>
                      Ingrese Nueva Tarea a Realizar
                    </span>
                  </Label>
                </div>
                <form   className='flex flex-col items-center justify-center w-full'
                        onSubmit={fxHandleSubmit}
                >
                  {/* <input 
                    type="text"
                    name="title"
                    ref={inputRef}
                    className='w-full px-1 pb-5 text-black md:px-6'                      

                  /> */}
                  <TextInput
                    className='w-full px-1 md:px-6'
                    id="email4"
                    type="text"
                    //icon={HiMail}
                    placeholder="tarea"
                    required={true}
                    ref={inputRef}                      
                  />
                  <Button   className="flex flex-wrap gap-2 mt-3"
                            pill={true}
                            type="submit"
                  >
                    Enviar
                  </Button>
                </form>
              </div>
              <div className='flex flex-col items-center justify-center w-full py-5'>
                  <div className='flex flex-col items-center justify-center border-2 border-red-500 w-60 md:w-1/3'>
                    {  tareas && tareas.map((task, index) => (
                          <div  key={index}
                                className="flex flex-row items-center justify-center w-full py-2 border-2"
                          >
                            <div className='text-center w-7'> {task.id} </div>
                            <div className='flex-1 text-center'> {task.title} </div>
                            <button   className='w-16 mr-2 text-center bg-red-600 rounded-xl'
                                      onClick={()=> dispatch({ type:"borrar_tarea", index: index})}
                            > Borrar 
                            </button>
                          </div>
                        ))                          
                    }
                  </div>
              </div> 
            </div>

        </div>
  )
}

