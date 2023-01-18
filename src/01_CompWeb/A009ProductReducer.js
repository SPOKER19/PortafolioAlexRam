import { typesREDUCER } from "./A009Types";

// HAY QUE RECORDAR QUE TODO EL ESTADO ES UN OBJETO
export const initialPRODUCTSState = {
    productos: [
        {   id: 1, title: "HARINA PAN", src: "HarinaPan", precio: "1.3 $", cantDisponible: 100, cantidadComprada: 0},
        {   id: 2, title: "ARROZ MARY", src: "Arroz", precio: "0.9 $", cantDisponible: 800, cantidadComprada: 0 },
        {   id: 3, title: "AZUCAR", src: "Azucar", precio: "1.1 $", cantDisponible: 400, cantidadComprada: 0 },        
    ],
    carrito: [ 
        // aqui lo mas conveniente es trabajar con el ID para trabajar los productos de manera referencial y con la CANTIDAD 
        //{   id: 1, title: "HARINA PAN", src: "HarinaPan", precio: "1.3 $"},        
    ],
    productActivo:  
        // tambien solo podriamos colocar 2 que representaria al ID del producto que queremos que este activo.         
        {   id: 1, title: "HARINA PAN", src: "HarinaPan", precio: "1.3 $", cantDisponible: 100, cantidadComprada: 0},        
    

};

export const A009ProductReducer = (statePrevPRODUCTS, actionPRODUCTS) => {
    // la variable statePrevPRODUCTS significa ESTADO PREVIO DEL PRODUCTO
    switch (actionPRODUCTS.type) {          
        case typesREDUCER.typesMostrarProducto :
            return {
                ...statePrevPRODUCTS,
                    productActivo: statePrevPRODUCTS.productos.find(product => product.id === actionPRODUCTS.payload)
            }
        //SE LE AGREGAN UNA LLAVES A TODO EL CASE PARA QUE PODAMOS COLOCAR MAS INFORMACION ANTES DE RETORNAR
        case typesREDUCER.typesAgregarProducto :{
            const NewProduct = actionPRODUCTS.payload;
            //console.log("NewProduct = ", NewProduct);
            // Comprobamos si el producto ya esta en el Carrito
            const CarritoContieneProducto = statePrevPRODUCTS.carrito.find(product => product.id === NewProduct);
            //console.log("CarritoContieneProducto = ", CarritoContieneProducto);
            return CarritoContieneProducto
            ?   {   ...statePrevPRODUCTS,
                    carrito :   statePrevPRODUCTS.carrito.map(product => 
                                    product.id === NewProduct
                                    ?   {   ...product, quantity: product.quantity + 1 } 
                                    : product
                                )
                }
            :   {   ...statePrevPRODUCTS,
                    carrito: [
                        ...statePrevPRODUCTS.carrito,
                        {...statePrevPRODUCTS.productos.find(product => product.id === actionPRODUCTS.payload), quantity: 1 }
                    ]                
                }}
        
        case typesREDUCER.typesEliminarProducto :
            return {
                ...statePrevPRODUCTS,                
                carrito: statePrevPRODUCTS.carrito.filter(product => product.id !== actionPRODUCTS.payload)
            }
        
        case typesREDUCER.typesEliminarONEProducto :{
            //De esta Forma Obtenemos el Producto de los que estan en el CARRITO que vamos a eliminar la Informacion Completa
            //console.log("actionPRODUCTS = ", actionPRODUCTS);
            const productoAEliminar = statePrevPRODUCTS.carrito.find(product => product.id === actionPRODUCTS.payload)
            //console.log("productoAEliminar = ", productoAEliminar);
            //Ahora preguntamos si la cantidad de este producto es mayor a 1
            // Como se obtendran solo 2 respuesta se puede hacer con un ternacio.
            return productoAEliminar.quantity > 1  
            //Para el Caso de que la cantidad sea mayor que 1 entonces restamos una cantidad
            ?   {   ...statePrevPRODUCTS,                
                    carrito: statePrevPRODUCTS.carrito.map(product => 
                        product.id === actionPRODUCTS.payload
                        ?  { ...product, quantity: product.quantity - 1 } 
                        : product
                    )
                }
            :   {   ...statePrevPRODUCTS,
                    carrito: statePrevPRODUCTS.carrito.filter(product => product.id !== actionPRODUCTS.payload)
                }

        }


        default:{
            return statePrevPRODUCTS;
        }            
    } 
}