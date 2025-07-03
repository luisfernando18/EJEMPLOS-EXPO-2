"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaludoPresenter = void 0;
class SaludoPresenter {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }
    iniciar() {
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
exports.SaludoPresenter = SaludoPresenter;
