import * as tf from "@tensorflow/tfjs-node";

/**
 * Cargue un archivo csv local y prepare los datos para el entrenamiento.
 * Base de datos: https://archive.ics.uci.edu/ml/datasets/Abalone
 *
 * @param {string} csvPath The path to csv file.
 * @returns {tf.data.Dataset} El conjunto de datos cargado y preparado.
 */
export default async function createDataset(csvPath) {
  const dataset = tf.data.csv(csvPath, {
    hasHeader: true,
    columnConfigs: { rings: { isLabel: true } },
  });
  const numOfColumns = (await dataset.columnNames()).length - 1;
  // Convert features and labels.
  return {
    dataset: dataset.map((row) => {
      const rawFeatures = row["xs"];
      const rawLabel = row["ys"];
      const convertedFeatures = Object.keys(rawFeatures).map((key) => {
        // cambiar el tipo "clase" por una asignacion numerica
        switch (rawFeatures[key]) {
          case "F":
            return 0;
          case "M":
            return 1;
          case "I":
            return 2;
          default:
            return Number(rawFeatures[key]);
        }
      });
      const convertedLabel = [rawLabel["rings"]];
      return { xs: convertedFeatures, ys: convertedLabel };
    }),
    numOfColumns: numOfColumns,
  };
}
