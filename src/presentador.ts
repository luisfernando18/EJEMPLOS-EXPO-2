import { SaludoModelo } from "./modelo";
import { ISaludoVista } from "./vista";

export class SaludoPresentador {
  constructor(private modelo: SaludoModelo, private vista: ISaludoVista) {}

  iniciar(): void {
    while (true) {
      const nombre = this.vista.pedirNombre();

      if (nombre.toLowerCase() === "salir" || nombre.toLowerCase() === "adios" || nombre.toLowerCase() === "chao" || nombre.toLowerCase() === "bye") {
        this.vista.mostrarSaludo(`¡Adios! (El totalde saludos fue: ${this.modelo.getcontador()})`);
        break;
      }

      this.modelo.setNombre(nombre);
      this.modelo.setcontador();
      const saludo = `¡Hola buenas, ${this.modelo.getNombre()}!`;
      this.vista.mostrarSaludo(saludo);
    }
  }
}
