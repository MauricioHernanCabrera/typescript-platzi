let a: string = 'hola';
a = 'holas';
a = 2;

let b: number = 10;

const num1 = 10;
const num2 = 20;
b = num1 + num2;

function suma(num1: number, num2: number): number {
  return num1 + num2;
}

let anyValue: any = 10;
anyValue = 'string';

function sumaJsVanilla(num1, num2) {
  return num1 + num2;
}

suma(1, 2);

sumaJsVanilla(1, '2');

type dni = string;
let dniNumber: dni = '456882135';
let dniNumber2: dni = '456882135';
