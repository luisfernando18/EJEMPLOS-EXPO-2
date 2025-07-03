"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsolaSaludoView = void 0;
const readline_sync_1 = __importDefault(require("readline-sync"));
class ConsolaSaludoView {
    pedirNombre() {
        return readline_sync_1.default.question("Ingresa tu nombre (o 'salir'): ");
    }
    mostrarSaludo(mensaje) {
        console.log(`👋 ${mensaje}`);
    }
}
exports.ConsolaSaludoView = ConsolaSaludoView;
