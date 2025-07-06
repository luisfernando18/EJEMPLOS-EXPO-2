import readlineSync from "readline-sync";

export interface ISaludoVista {
  pedirNombre(): string;
  mostrarSaludo(mensaje: string): void;
}

export class ConsolaSaludoVista implements ISaludoVista {
  pedirNombre(): string {
    return readlineSync.question("Ingresa tu nombre (o 'salir'): ");
  }

  mostrarSaludo(mensaje: string): void {
    console.log(`👋 ${mensaje}`);
  }
}
