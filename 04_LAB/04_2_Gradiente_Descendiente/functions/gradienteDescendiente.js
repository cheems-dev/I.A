/**
 * AUTHOR: Luis Alberto Ccalluchi Lopez
 * @param {Array} x - Arreglo de enteros flotantes
 * @param {Array} y - Arreglo de enteros flotantes
 * @param {Number} aproxTs - Numero flotante "Tasa aproximada"
 * @returns
 */
export default function gradienteDescendiente(x = [], y = [], aproxTs) {
  let slope = 1;
  let intercept = 1;
  let dIntercept = 1;
  let dSlope = 1;
  for (let i = 0; i < 1000; i++) {
    console.log(`Iteracion ${i + 1}`);
    console.log(`Pendiente anterior =  ${slope}`);
    console.log(`Intercepto anterior = ${intercept}`);
    console.log(`Tasa de aprendizaje = ${aproxTs}`);
    for (let j = 0; j < x.length; j++) {
      dIntercept = parseFloat(
        dIntercept + (-2 * (y[j] - (intercept + slope * x[j]))).toFixed(7)
      );
      dSlope = parseFloat(
        dSlope + (-2 * x[j] * (y[j] - (intercept + slope * x[j]))).toFixed(7)
      );
    }
    console.log(`Derivada intercepto = ${dIntercept}`);
    console.log(`Derivada pendiente = ${dSlope}`);
    intercept = parseFloat((intercept - aproxTs * dSlope).toFixed(7));
    slope = parseFloat((slope - aproxTs * dSlope).toFixed(7));
    console.log(`Intercepto nuevo = ${intercept}`);
    console.log(`Pendiente nuevo = ${slope}`);
    dIntercept = 0;
    dSlope = 0;
  }
  return [slope, intercept];
}
