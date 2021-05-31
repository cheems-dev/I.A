// Ejemplo visto en clases 
import { XY } from "./types/XY.type";
// ######## EXAMPLE ##########

// Mire su salida en "output-example.txt"
const training_data: Array<XY> = [
  { x: 5, y: 1 },
  { x: 7, y: 1 },
  { x: 2, y: 0 },
  { x: 9, y: 1 },
  { x: 10, y: 1 },
  { x: 9, y: 1 },
  { x: 4, y: 0 },
  { x: 1, y: 0 }
];
const test_data: Array<XY> = [
  { x: 3, y: 0 },
  { x: 6, y: 1 },
];


let [total_error, total_dp, total_di] = [0, 0, 0];

// numero de iteraciones iteraciones
const LIMIT = 100000;

// umbral
const UMBRAL = 0.5;

// tasa de aprendizaje
const LEARNING_RATE = 0.001;

// pendiente inicial
let m: number = -0.9874;

// intercepto inicial
let b: number = -2.1789;

console.log("Luis Alberto Ccalluchi Lopez");
console.log(`Pendiente anterior = ${m}`);
console.log(`Intercepto anterior = ${b}`);
console.log(`Tasa de aprendizaje = ${LEARNING_RATE}`);
console.log(`Cantidad de Iteraciones = ${LIMIT}`);
console.log(`Umbral = ${UMBRAL}`);
console.log('Datos de entrenamiento:');
console.log('x = {5, 7, 2, 9, 10, 9 , 4, 1}');
console.log('y = {1, 1, 0, 1, 1, 1 , 0, 0}');
console.log('Datos de test:');
console.log('x = {3, 6}');
console.log('y = {0, 1}\n\n');

//iterador
let i = 1;
while (i <= LIMIT) {
  console.log(`Iteracion ${i}`);
  console.log(`Pendiente anterior = ${m.toFixed(6)}`);
  console.log(`Intercepto anterior = ${b.toFixed(6)}`);
  training_data.forEach(data => {
    const { x, y } = data;
    // valor de z => m * xi + b
    let z: number = m * x + b;
    // ^y -> valor estimado
    let _y = +(1 / (1 + Math.exp(-z))).toFixed(15);
    // error => yi * LN(_y) + (1 - yi) * LN(1 - _y)
    let error = -(y * Math.log(_y) + (1 - y) *
      +Math.log(1 - _y).toFixed(15));
    total_error += error;
    // derivada pendiente => (^y - yi) * xi
    let dp = (_y - y) * x;
    total_dp += dp;
    // derivada intercepto => (^y - yi)
    let di = _y - y;
    total_di += di;
  });

  console.log(`Error = ${total_error.toFixed(6)}`);
  console.log(`Tasa de aprendizaje = ${LEARNING_RATE}`);
  console.log(`Derivada pendiente = ${total_dp.toFixed(6)}`);
  console.log(`Derivada intercepto = ${total_di.toFixed(6)}`);
  // pendiente nuevo => m - LEARNING_RATE * total_dp
  m = m - LEARNING_RATE * total_dp;
  // intercepto nuevo => b - LEARNING_RATE * total_dp
  b = b - LEARNING_RATE * total_di;

  console.log(`Pendiente nueva = ${m.toFixed(3)}`);
  console.log(`Intercepto nuevo =  ${b.toFixed(4)}\n\n`);
  i++;
  [total_error, total_dp, total_di] = [0, 0, 0];
}

console.log("Test");
i = 1;

let message = "";

test_data.forEach(data => {
  const { x } = data;
  let z: number = m * x + b;
  let _y = 1 / (1 + Math.exp(-z));
  message += `Primer dato ${x} = ${_y.toFixed(5)} `;
  if (_y > UMBRAL) {
    message += "aprovado estimado = 1, correcto.\n";
  }
  else if (_y < UMBRAL) {
    message += "aprovado estimado = 0, correcto.\n";
  }
  // Si el valor "valor estimado"  es igual al umbral entonces el iterador aumentara en 1, entonces dividira a 100%
  else {
    ++i;
  }
});

// Si el numero de iteraciones fallidas es igual a el tamaño del arreglo entonces el porcentaje sera 0%
message += (i === test_data.length)
  ? `Porcentaje de Acierto 0%`
  : `Porcentaje de Acierto ${(100 / i).toFixed(2)}%`;

console.log(message);