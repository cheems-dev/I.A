/**
 * AUTHOR: Luis Alberto Ccalluchi Lopez
 */
import { load } from "csv-load-sync";
import metodoCuadrado from "./functions/metodoCuadrado.js";
/**
 * (1) leemos los datos que almacenamos en nuestro .csv
 * (2) los datos fueron  obtenidos en : https://colab.research.google.com/drive/16a9ESOclAolHHM0-H0HHLWzzOR5Plt9m?usp=sharing
 * */

const csv = load("./data/data.csv", {
  // convertimos los valores  de x & y a flotantes
  convert: {
    x: parseFloat,
    y: parseFloat,
  },
});

let x = [],
  y = [];

console.log("Luis Alberto Ccalluchi Lopez");
console.log("Minimos Cuadrados");
console.log("Datos Utilizados");
csv.forEach((element) => {
  console.log(`${element.x}\t${element.y}`);
  x.push(element.x);
  y.push(element.y);
});

metodoCuadrado(x, y);
