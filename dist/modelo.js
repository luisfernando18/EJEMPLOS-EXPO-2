"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaludoModelo = void 0;
class SaludoModelo {
    constructor() {
        this.nombre = "";
        this.contador = 0;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    getNombre() {
        return this.nombre;
    }
    setcontador() {
        this.contador++;
    }
    getcontador() {
        return this.contador;
    }
}
exports.SaludoModelo = SaludoModelo;
