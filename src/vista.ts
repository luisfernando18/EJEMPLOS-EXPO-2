import readlineSync from "readline-sync";

export interface ISaludoView {
  pedirNombre(): string;
  mostrarSaludo(mensaje: string): void;
}

export class ConsolaSaludoView implements ISaludoView {
  pedirNombre(): string {
    return readlineSync.question("Ingresa tu nombre (o 'salir'): ");
  }

  mostrarSaludo(mensaje: string): void {
    console.log(`👋 ${mensaje}`);
  }
}
