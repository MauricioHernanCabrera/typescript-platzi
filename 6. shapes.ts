class Persona {
  private edad: number;
  private altura: number;
  private dni: string;

  constructor(edad: number, altura: number, dni: string) {
    this.setEdad(edad);
    this.setAltura(altura);
    this.setDni(dni);
  }

  getEdad() {
    return this.edad;
  }

  getAltura() {
    return this.altura;
  }

  getDni() {
    return this.dni;
  }

  setEdad(edad: number) {
    this.edad = edad;
  }

  setAltura(altura: number) {
    this.altura = altura;
  }

  setDni(dni: string) {
    this.dni = dni;
  }
}

class Alumno extends Persona {
  private matricula: string;

  constructor(edad: number, altura: number, dni: string, matricula: string) {
    super(edad, altura, dni);
    this.setMatricula(matricula);
  }

  getMatricula() {
    return this.matricula;
  }

  setMatricula(matricula: string) {
    this.matricula = matricula;
  }
}

let persona: Persona = new Persona(21, 1.7, '456123156');
let alumno: Alumno = new Alumno(21, 1.7, '456123156', '123');

persona = alumno;
alumno = persona;
