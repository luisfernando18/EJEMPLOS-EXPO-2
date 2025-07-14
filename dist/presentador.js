"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaludoPresentador = void 0;
class SaludoPresentador {
    constructor(modelo, vista) {
        this.modelo = modelo;
        this.vista = vista;
    }
    iniciar() {
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
exports.SaludoPresentador = SaludoPresentador;
