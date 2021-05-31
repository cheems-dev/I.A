/**
 * AUTHOR: Luis Alberto Ccalluchi Lopez
 */
import { load } from "csv-load-sync";
import gradienteDescendiente from "./functions/gradienteDescendiente.js";
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

csv.forEach((element) => {
  x.push(element.x);
  y.push(element.y);
});
// console.log(x);
// console.log(y);
gradienteDescendiente(x, y, 0.005);
