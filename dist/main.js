"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const modelo_1 = require("./modelo");
const vista_1 = require("./vista");
const presentador_1 = require("./presentador");
const model = new modelo_1.SaludoModel();
const view = new vista_1.ConsolaSaludoView();
const presenter = new presentador_1.SaludoPresenter(model, view);
presenter.iniciar();
