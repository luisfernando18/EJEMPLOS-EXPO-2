import { SaludoModel } from "./modelo";
import { ISaludoView } from "./vista";

export class SaludoPresenter {
  constructor(private model: SaludoModel, private view: ISaludoView) {}

  iniciar(): void {
    while (true) {
      const nombre = this.view.pedirNombre();

      if (nombre.toLowerCase() === "salir") {
        this.view.mostrarSaludo("¡Hasta luego!");
        break;
      }

      this.model.setNombre(nombre);
      const saludo = `¡Hola, ${this.model.getNombre()}!`;
      this.view.mostrarSaludo(saludo);
    }
  }
}
