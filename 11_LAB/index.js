import * as tf from "@tensorflow/tfjs-node";
import argparse from "argparse";
import fs from "fs";
import https from "https";
import createDataset from "./functions/createDataset.js";
import createModel from "./functions/createModel.js";

const csvUrl =
  "https://storage.googleapis.com/tfjs-examples/abalone-node/abalone.csv";
const csvPath = "./dataset/abalone.csv";

/**
 * Entrena un modelo de conjunto de datos y luego guarde el modelo en una carpeta local.
 */
async function run(epochs, batchSize, savePath) {
  const datasetObj = await createDataset("file://" + csvPath);
  const model = createModel([datasetObj.numOfColumns]);
  // El conjunto de datos tiene 4177 filas. Se divide en 2 grupos, uno para entrenamiento y otro para validacion
  // Tome alrededor de 3500 filas como conjunto de datos de entrenamiento y el resto como validacion del dataset
  const trainBatches = Math.floor(3500 / batchSize);
  const dataset = datasetObj.dataset.shuffle(1000).batch(batchSize);
  const trainDataset = dataset.take(trainBatches);
  const validationDataset = dataset.skip(trainBatches);

  await model.fitDataset(trainDataset, {
    epochs: epochs,
    validationData: validationDataset,
  });

  await model.save(savePath);

  const loadedModel = await tf.loadLayersModel(savePath + "/model.json");
  const result = loadedModel.predict(
    tf.tensor2d([[0, 0.625, 0.495, 0.165, 1.262, 0.507, 0.318, 0.39]])
  );

  console.log(
    `La edad real del abalon de prueba es 10, el resultado de inferencia del modelo es: 
      ${result.dataSync()}`
  );
}

const parser = new argparse.ArgumentParser({
  description: "TensorFlow.js-Node Abalone Example.",
  addHelp: true,
});
parser.addArgument("--epochs", {
  type: "int",
  defaultValue: 100,
  help: "Numero de épocas para entrenar el modelo.",
});
parser.addArgument("--batch_size", {
  type: "int",
  defaultValue: 500,
  help: "La cantidad usada mientras usamos el modelo de entrenamiento",
});
parser.addArgument("--savePath", {
  type: "string",
  defaultValue: "file://trainedModel",
  help: "Path.",
});
const args = parser.parseArgs();

const file = fs.createWriteStream(csvPath);
console.log("Luis ALberto Ccalluchi Lopez");
console.log("Libreria usada: Tensorflow.js");
console.log("Cantidad de datos de entrenamiento: ", 4700);
console.log("Cantidad de datos de test: ", 3500);
console.log("Epocas: ", 100);
https.get(csvUrl, function (response) {
  response.pipe(file).on("close", async () => {
    run(args.epochs, args.batch_size, args.savePath);
  });
});
