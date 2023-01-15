import React, {useReducer, useRef} from 'react';
import { Button, Label, TextInput } from 'flowbite-react';

export const A008ListaDeTareasUseReduce = () => {

    const inputRef = useRef();

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

    const fxHandleSubmit = (event) => {      
        event.preventDefault();
        // console.log("Estoy Aqui = ")
        // console.log("inputRef = ", inputRef.current.value) 
        dispatch({
          type: "agregar_tareas",
          title: inputRef.current.value
        });
    }

  return (
        <div className='flex flex-col items-center justify-center w-full h-full'>
            <div className='mt-24'></div>
                <div className='flex flex-col items-center justify-center w-full pt-2 text-center lg:pt-0'>
                    <span className='text-xl font-semibold underline sm:text-2xl md:text-3xl'>Lista de Tareas</span>
                </div> 

                <div className='w-60 mt-5 md:w-1/3 p-3 flex flex-col items-center justify-center'>
                  <div className="mb-2 block items-center justify-center text-center pb-2">
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
                      className='w-full px-1 md:px-6 pb-5 text-black'                      

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
                    <div className='flex flex-col items-center justify-center w-60 md:w-1/3 border-2 border-red-500'>
                      {  tareas && tareas.map((task, index) => (
                           <div  key={index}
                                  className="flex flex-row items-center justify-center w-full py-2 border-2"
                            >
                              <div className='w-7 text-center'> {task.id} </div>
                              <div className='flex-1 text-center'> {task.title} </div>
                              <button   className='w-16 bg-red-600 text-center rounded-xl mr-2'
                                        onClick={()=> dispatch({ type:"borrar_tarea", index: index})}
                              > Borrar 
                              </button>
                            </div>
                          ))                          
                      }
                    </div>
                </div>          
        </div>
  )
}

