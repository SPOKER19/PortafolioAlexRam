import React, {useReducer} from 'react';
import { A009ProductReducer, initialPRODUCTSState } from './A009ProductReducer';
import { typesREDUCER } from './A009Types';


const imgListaProductos = require.context("../03_Imagenes/ListaProductos", true);

export const A009ListaDeProductosCarritoCompra = () => {
  
  /* 
  Esta const representa la forma de llamar al USEREDUCER
  const [state, dispatch] = useReducer(reducer, initialstate);
  la variable reducer va a ser nuestro A009ProductReducer
  la variable de estado inicial va hacer nuestro initialPRODUCTSState que se encuentra en el archivo js llamado A009ProductReducer.js  
  */

  const [ ProductosAll, dispatchProduct ] = useReducer(A009ProductReducer, initialPRODUCTSState);

  // Destructuramos la Variable Productos 
  const { productos, carrito, productActivo } = ProductosAll;
  //console.log("ProductosAll = ", ProductosAll);
  // console.log("productos = ", productos);
  // console.log("carrito = ", carrito);
  //console.log("productActivo = ", productActivo);


  const fxMostrarProducto = (_id) => {
    //console.log("_id = ", _id);
      dispatchProduct({
      type: typesREDUCER.typesMostrarProducto,
      payload: _id
    }) 
  }

  const fxAgregarProductoAlCarrito = (_id) => {
    //console.log("_id = ", _id);
    dispatchProduct({
      type: typesREDUCER.typesAgregarProducto,
      payload: _id
    }) 
  }

  const fxEliminarProductoAlCarrito = (_id) => {
    //console.log("_id = ", _id);
    dispatchProduct({
      type: typesREDUCER.typesEliminarProducto,
      payload: _id
    }) 
  }

  const fxEliminarONEProductoAlCarrito = (_id) => {
    //  console.log("_id = ", _id);
    dispatchProduct({
      type: typesREDUCER.typesEliminarONEProducto,
      payload: _id
    }) 
  }

  


  return (
        <div className='flex flex-col items-center justify-center w-full h-full'>
            <div className='mt-24'></div>
            <div className='flex flex-col items-center justify-center w-full pt-2 text-center'>
              <div className='flex flex-col items-center justify-center pb-2 text-center w-60 sm:w-1/3 md:w-1/2'>
                <div className='flex flex-col items-center justify-center w-full pb-2 text-center'>
                    <span className='text-xl font-semibold underline sm:text-2xl md:text-3xl'>Lista de Productos</span>
                </div> 
                {/* Detalles de Lista Producto */}
                <div className='flex flex-col items-center justify-center w-full'>
                  <ul className='w-full p-0.5'>
                    { productos.map(product =>(
                        <li key={product.id}
                            className="flex flex-row w-full px-1 text-black bg-gray-300"
                        >
                            <div className='flex-1'>{product.title}</div>
                            <button className='w-8 bg-orange-300 border-2 border-orange-500 hover:scale-110'
                                    onClick={() => fxMostrarProducto(product.id)}
                            >
                              <span className='flex items-center justify-center'>
                                <ion-icon name="eye-outline"></ion-icon>
                              </span>
                            </button>
                            <button className='w-8 bg-teal-300 border-2 border-teal-500 hover:scale-110'
                                    onClick={() => fxAgregarProductoAlCarrito(product.id)}
                            >
                              <span className='flex items-center justify-center'>
                                <ion-icon name="cart-outline"></ion-icon>
                              </span>
                            </button>
                        </li> 
                      ))
                    }
                  </ul>
                </div>
                {/* ----------------------- */}
              </div>
            </div>

            <div className='flex flex-col items-center justify-center pt-2 text-center w-60 sm:w-1/3 md:w-1/2'>
              <div className='flex flex-col items-center justify-center w-full pt-2 text-center'>
                  <span className='text-xl font-semibold underline sm:text-2xl md:text-3xl'>Producto Activo</span>
              </div> 
              {/* Detalles de Producto Activo */}
              <div className='flex flex-col items-center justify-center w-full'>
                  <ul className='w-full p-0.5'>
                       <li key={productActivo.id}
                            className="flex flex-row items-center justify-center w-full px-1 text-black bg-gray-300"
                        >
                          <img    className='w-20 h-24' 
                                    alt= {productActivo.title}
                                    src= {imgListaProductos(`./${productActivo.src}.png`)} 
                          />
                          <div className='flex-1'>{productActivo.title}</div>
                          <div className='flex flex-col items-center justify-center w-14'>
                            <div className='w-full pb-3'>{productActivo.precio}</div>  
                            <button className='w-8 bg-teal-300 border-2 border-teal-500 hover:scale-110'
                                    onClick={() => fxAgregarProductoAlCarrito(productActivo.id)}
                            >
                              <span className='flex items-center justify-center'>
                                <ion-icon name="cart-outline"></ion-icon>
                              </span>
                            </button>
                          </div>
                        </li>
                  </ul>
              </div>
              {/* ----------------------- */}               
            </div>

            <div className='flex flex-col items-center justify-center py-5 text-center w-60 sm:w-1/3 md:w-1/2'>
              <div className='flex flex-col items-center justify-center w-full pt-2 text-center'>
                  <span className='text-xl font-semibold underline sm:text-2xl md:text-3xl'>Carrito de Compras</span>
              </div> 
              {/* Detalles de Carrito de Compra */}
              <div className='flex flex-col items-center justify-center w-full'>
                  <ul className='w-full p-0.5'>
                    { carrito.map(product =>(
                        <li key={product.id}
                            className="flex flex-row items-center justify-center w-full px-1 text-black bg-gray-300"
                        >
                            <div className='flex-1'>{product.title}</div>
                            {/* <div className='flex-1'>{product.cantidad}</div> */}
                            <div className="flex flex-col items-center justify-center w-24 px-1 text-black bg-gray-300">
                              <div className='flex-1'>Cant = {product.quantity}</div>
                              <div className="flex flex-row items-center justify-around w-full px-1 text-black bg-gray-300">
                                <button className='p-1 text-black bg-red-300 border-2 border-red-600 hover:scale-110'
                                        onClick={() => fxEliminarONEProductoAlCarrito(product.id)}                                    
                                >
                                  <span className='flex items-center justify-center text-xs'>
                                    - 1
                                  </span>
                                </button>   
                                <button className='p-1 text-black bg-red-300 border-2 border-red-600 hover:scale-110'
                                        onClick={() => fxEliminarProductoAlCarrito(product.id)}                                    
                                >
                                  <span className='flex items-center justify-center text-base'>
                                    <ion-icon name="trash-bin-outline"></ion-icon>
                                  </span>
                                </button> 
                              </div>
                            </div>
                        </li> 
                      ))
                    }
                  </ul>
                </div>
                {/* ----------------------- */}               
            </div>

        </div>
  )
}

