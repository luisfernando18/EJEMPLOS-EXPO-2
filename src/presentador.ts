import { SaludoModelo } from "./modelo";
import { ISaludoVista } from "./vista";

export class SaludoPresentador {
  constructor(private modelo: SaludoModelo, private vista: ISaludoVista) {}

  iniciar(): void {
    while (true) {
      const nombre = this.vista.pedirNombre();

      if (nombre.toLowerCase() === "salir") {
        this.vista.mostrarSaludo("¡Adios!");
        break;
      }

      this.modelo.setNombre(nombre);
      const saludo = `¡Hola buenas, ${this.modelo.getNombre()}!`;
      this.vista.mostrarSaludo(saludo);
    }
  }
}
