export class SaludoModelo {
  private nombre: string = "";
  private contador: number = 0;

  setNombre(nombre: string): void {
    this.nombre = nombre;
  }

  getNombre(): string {
    return this.nombre;
  }

  setcontador(): void {
    this.contador++;
  }

  getcontador(): number {
    return this.contador;
  }
}
