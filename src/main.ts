import { SaludoModel } from "./modelo";
import { ConsolaSaludoView } from "./vista";
import { SaludoPresenter } from "./presentador";

const model = new SaludoModel();
const view = new ConsolaSaludoView();
const presenter = new SaludoPresenter(model, view);

presenter.iniciar();
