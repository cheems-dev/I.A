import { SupportVectorMachine } from "./class/svm.js";
import getCsv from "./functions/getCsv.js";

function main() {
  const [data, labels] = getCsv();
  const standardDeviation = 0.25,
    kFolds = 10;
  console.log("Luis Alberto Ccalluchi Lopez");
  console.log("======================");
  console.log("Libreria usada: libsvm-js");
  console.log("Algoritmo usados: ");
  console.log("Support Vector Machine");
  console.log("Cross Validation");
  console.log("======================");
  console.log(`Desviacion Estandar ${standardDeviation}`);
  const svm = new SupportVectorMachine(data, labels, standardDeviation);
  console.log(`Numero de K Folds: ${kFolds}`);
  console.log("======================");

  const svmCvPredictions = svm.crossValidation(kFolds);
  const svmPredictions = svm.svmPredictions();
  console.log("Tasa de clasificación promedio  ");
  console.log(
    `\tSupport Vector Machine: ${svm.getClassificationRate(svmCvPredictions)}%`
  );
  console.log(
    `\tCross Validation: ${svm.getClassificationRate(svmPredictions)}%`
  );
}

main();
