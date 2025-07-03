"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaludoModel = void 0;
class SaludoModel {
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
exports.SaludoModel = SaludoModel;
