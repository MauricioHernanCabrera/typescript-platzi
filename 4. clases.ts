class Transporte {
  private velocidad: number;
  private formaDeMovilidad: string;

  constructor(velocidad: number, formaDeMovilidad: string) {
    this.setVelocidad(velocidad);
    this.setFormaDeMovilidad(formaDeMovilidad);
  }

  getVelocidad() {
    return this.velocidad;
  }

  setVelocidad(velocidad: number) {
    this.velocidad = velocidad;
  }

  getFormaDeMovilidad() {
    return this.formaDeMovilidad;
  }

  setFormaDeMovilidad(formaDeMovilidad: string) {
    this.formaDeMovilidad = formaDeMovilidad;
  }
}

const transporte: Transporte = new Transporte(20, 'Suelo');

class Auto extends Transporte {
  private cantidadDePuertas: number;

  constructor(
    velocidad: number,
    formaDeMovilidad: string,
    cantidadDePuertas: number
  ) {
    super(velocidad, formaDeMovilidad);
    this.setCantidadDePuertas(cantidadDePuertas);
  }

  getVelocidad() {
    return super.getVelocidad() + 10;
  }

  getCantidadDePuertas() {
    return this.cantidadDePuertas;
  }

  setCantidadDePuertas(cantidadDePuertas: number) {
    this.cantidadDePuertas = cantidadDePuertas;
  }
}

const auto: Auto = new Auto(20, 'Suelo', 4);
