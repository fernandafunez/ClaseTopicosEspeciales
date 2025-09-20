// Ejercicio 1: Interfaces, Enums y Tipos de Unión

// Estados del producto
enum EstadoProducto {
    Disponible, Agotado, Descontinuado
}

// Tipo de unión para ID del producto
type IDProducto = string | number;

// Interfaz Producto
interface Producto {
    id: IDProducto;
    nombre: string;
    precio: number;
    estado: EstadoProducto;
    descripcion?: string; 
}

// Función para mostrar detalles del producto
function mostrarDetallesProducto(producto: Producto): void {
    console.log("Detalles del Producto");
    console.log(`ID: ${producto.id}`);
    console.log(`Nombre: ${producto.nombre}`);
    console.log(`Precio: $${producto.precio}`);
    console.log(`Estado: ${EstadoProducto[producto.estado]}`);
    console.log(`Descripción: ${producto.descripcion || " "}`);
    console.log("-------------------------------");
}

//Objetos de tipo Producto
const producto1: Producto = {
    id: 1,
    nombre: "Zapatos Deportivos",
    precio: 700,
    estado: EstadoProducto.Disponible,
    descripcion: "Zapatos deportivos cómodos y bonitos."
};

const producto2: Producto = {
    id: "SAND1",
    nombre: "Sandalias de Playa",
    precio: 250,
    estado: EstadoProducto.Agotado
    
};

const producto3: Producto = {
    id: "2",
    nombre: "Camisa Casual",
    precio: 300,
    estado: EstadoProducto.Descontinuado,
    descripcion: "Camisa casual de algodón."
    
};

// Llamadas a la función 
mostrarDetallesProducto(producto1); 
mostrarDetallesProducto(producto2);
mostrarDetallesProducto(producto3);
