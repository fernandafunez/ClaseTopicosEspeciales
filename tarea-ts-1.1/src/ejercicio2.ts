// Ejercicio 2: Interfaces y Objetos

// Interfaz Usuario
interface Usuario {
    nombre: string;
    edad: number;
    email?: string; 
}

// Función para imprimir usuario
function imprimirUsuario(usuario: Usuario): void { 
    console.log("Datos del usuario");
    console.log(`Nombre: ${usuario.nombre}`);
    console.log(`Edad: ${usuario.edad}`);
    console.log(`Email: ${usuario.email || " "}`);
    console.log("-------------------------------");
}

// Objetos 
const usuario1: Usuario = {
    nombre: "Maria Funez",
    edad: 25,
    email: "maria.funez@gmail.com"
};

const usuario2: Usuario = {
    nombre: "Juan Gonzales",
    edad: 20
};

// Llamadas a la función
imprimirUsuario(usuario1);
imprimirUsuario(usuario2);
