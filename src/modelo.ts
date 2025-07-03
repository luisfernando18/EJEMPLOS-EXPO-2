export class SaludoModel {
  private nombre: string = "";

  setNombre(nombre: string): void {
    this.nombre = nombre;
  }

  getNombre(): string {
    return this.nombre;
  }
}
