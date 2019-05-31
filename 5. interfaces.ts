type Dni = number;

interface Persona {
  altura?: number;
  edad: number;
  nombre: string;
  apellido: string;
  dni: Dni;
}

const persona: Persona = {
  edad: 21,
  nombre: 'Hernan',
  apellido: 'Cabrera',
  dni: 39638416
};
