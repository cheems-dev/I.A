/**
 * AUTHOR: Luis Alberto Ccalluchi Lopez
 * @param {Array} x - Arreglo de enteros flotantes
 * @param {Array} y - Arreglo de enteros flotantes
 * @returns
 */
export default function metodoCuadrado(x, y) {
  let sum_x = 0,
    sum_y = 0,
    sum_xy = 0,
    sum_xsq = 0;

  for (let loop = 0; loop < x.length; loop++) {
    sum_x += x[loop];
    sum_y += y[loop];
    sum_xy += x[loop] * y[loop];
    sum_xsq += x[loop] * x[loop];
  }
  console.log(`Suma de valores de x: ${sum_x.toFixed(8)}`);
  console.log(`Suma de valores de y: ${sum_y.toFixed(8)}`);
  console.log(`Suma de valores de x * y: ${sum_xy.toFixed(8)}`);
  console.log(`Suma de valores de x^2 ${sum_xsq.toFixed(8)}\n\n`);

  let m =
    (sum_xy - (sum_x * sum_y) / x.length) /
    (sum_xsq - (sum_x * sum_x) / x.length);

  let y_int = sum_y / x.length - m * (sum_x / x.length);
  console.log(`Pendiente: ${m.toFixed(8)}`);
  console.log(`Intercepto: ${y_int.toFixed(8)}`);

  return [m, y_int];
}
