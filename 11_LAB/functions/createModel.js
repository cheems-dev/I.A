import * as tf from "@tensorflow/tfjs-node";

/**
 * Crea y devuelve el modelo de regresión de perceptrón multicapa..
 *
 * @param {number} inputShape La forma de entrada del modelo.
 * @returns {tf.Sequential} El modo de regresión del perceptrón multicapa l.
 */
export default function createModel(inputShape) {
  const model = tf.sequential();
  model.add(
    tf.layers.dense({
      inputShape: inputShape,
      activation: "sigmoid",
      units: 50,
    })
  );
  model.add(
    tf.layers.dense({
      activation: "sigmoid",
      units: 50,
    })
  );
  model.add(
    tf.layers.dense({
      units: 1,
    })
  );
  model.compile({ optimizer: tf.train.sgd(0.01), loss: "meanSquaredError" });
  return model;
}
