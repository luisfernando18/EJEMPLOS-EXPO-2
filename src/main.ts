import { SaludoModelo } from "./modelo";
import { ConsolaSaludoVista } from "./vista";
import { SaludoPresentador } from "./presentador";

const modelo = new SaludoModelo();
const vista = new ConsolaSaludoVista();
const presentador = new SaludoPresentador(modelo, vista);

presentador.iniciar();
