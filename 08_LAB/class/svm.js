import SVM from "libsvm-js/asm.js";
import success from "../functions/success.js";

export class SupportVectorMachine {
  constructor(_data, _labels, _standardDeviation) {
    this.data = _data;
    this.labels = _labels;
    // Modifique los parametros del algoritmo SVM para lograr una tasa de clasificación promedio mayor a 80%
    this.svm = new SVM({
      kernel: SVM.KERNEL_TYPES.RBF,
      type: SVM.SVM_TYPES.C_SVC,
      gamma: _standardDeviation,
      cost: 1,
      quiet: true,
    });

    this.init();
  }

  /**
   * Ejecute el algoritmo SVM para obtener el modelo (con los datos de entrenamiento)
   */
  init() {
    this.svm.train(this.data, this.labels);
  }

  /**
   * Obtener de la base de datos 10 iteraciones (10-folds). Validación Cruzada o Cross-Validation.
   * @returns {Array}
   */
  crossValidation(kFolds) {
    return this.svm.crossValidation(this.data, this.labels, kFolds);
  }

  svmPredictions() {
    return this.svm.predict(this.data);
  }

  getClassificationRate(predictions) {
    return Math.round(success(this.labels, predictions) * 100);
  }
}
