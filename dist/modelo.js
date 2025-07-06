"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaludoModelo = void 0;
class SaludoModelo {
    constructor() {
        this.nombre = "";
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    getNombre() {
        return this.nombre;
    }
}
exports.SaludoModelo = SaludoModelo;
