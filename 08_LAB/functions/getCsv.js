import { load } from "csv-load-sync";

/**
 * Extraer los datos de un archivo csv y almacenarlos en un arreglo
 * @param {string} file - Ubicacion de archivo .csv
 * @returns {Array} - [ x , y ]
 */
export default function getCsv(file = "./data/svm.csv") {
  const data = load(file, {
    convert: {
      X1: parseFloat,
      X2: parseFloat,
      Y: parseInt,
    },
  });

  let x = [],
    y = [];

  data.forEach((data) => {
    const { X1, X2, Y } = data;
    x.push([X1, X2]);
    y.push(Y);
  });

  return [x, y];
}
