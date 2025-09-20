// Ejercicio 5: Enums y Estructuras de Control

enum DiaSemana {
    Lunes, Martes, Miercoles, Jueves, Viernes, Sabado, Domingo
}

function esFinDeSemana(dia: DiaSemana): boolean {
    // Implementar la lógica con una estructura switch
    switch (dia) {
        case DiaSemana.Sabado:
        case DiaSemana.Domingo:
            return true;
        default:
            return false;
    }
}


console.log(esFinDeSemana(DiaSemana.Lunes));
console.log(esFinDeSemana(DiaSemana.Sabado));
console.log(esFinDeSemana(DiaSemana.Viernes));
console.log(esFinDeSemana(DiaSemana.Domingo));
console.log(esFinDeSemana(DiaSemana.Miercoles));
console.log(esFinDeSemana(DiaSemana.Jueves));

