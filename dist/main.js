"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const modelo_1 = require("./modelo");
const vista_1 = require("./vista");
const presentador_1 = require("./presentador");
const modelo = new modelo_1.SaludoModelo();
const vista = new vista_1.ConsolaSaludoVista();
const presentador = new presentador_1.SaludoPresentador(modelo, vista);
presentador.iniciar();
