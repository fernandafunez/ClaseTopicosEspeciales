// Ejercicio 4: Clases y Métodos

class CuentaBancaria {
    // Propiedades
    private titular: string; 
    private saldo: number;
    
    // Constructor
    constructor(titular: string) {
        this.titular = titular;
        this.saldo = 0;
    }
 
    depositar(monto: number): void {
        if (monto <= 0) {
            console.error("El monto a depositar debe ser un numero positivo.");
            return;
        }
        
        this.saldo += monto;
        console.log(`Se ha depositado $${monto.toFixed(2)} en la cuenta de ${this.titular}.`);
    }
  
    retirar(monto: number): void {
        if (monto <= 0) {
            console.error("El monto a retirar debe ser un numero positivo.");
            return;
        }
        
        if (monto > this.saldo) {
            console.error(`Saldo insuficiente para retirar`);
            return;
        }
        
        this.saldo -= monto;
        console.log(`Se ha retirado $${monto.toFixed(2)} de la cuenta de ${this.titular}.`);
    }
    
    consultarSaldo(): void {
        console.log(`El saldo actual de la cuenta de ${this.titular} es: $${this.saldo.toFixed(2)}`);
    }
}

// Instancia de CuentaBancaria
const Fernanda_cuenta = new CuentaBancaria("Fernanda Funez");

// Realizar operaciones
console.log("OPERACIONES BANCARIAS")
Fernanda_cuenta.consultarSaldo();      
Fernanda_cuenta.depositar(500);         
Fernanda_cuenta.retirar(200);          
Fernanda_cuenta.retirar(1000);          
Fernanda_cuenta.consultarSaldo(); 
Fernanda_cuenta.depositar(700); 
Fernanda_cuenta.consultarSaldo(); 
