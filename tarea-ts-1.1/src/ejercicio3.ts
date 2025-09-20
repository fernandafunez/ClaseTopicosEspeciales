// Ejercicio 3: Arrays

function repetirNombre(nombre: string, veces: number): string[] {
    const resultado: string[] = []; // Array para almacenar los nombres repetidos
    for (let i = 0; i < veces; i++) { 
        resultado.push(nombre);
    }
    return resultado;
}

console.log(repetirNombre("Juan", 3)); 
console.log(repetirNombre("Fernanda", 4));

