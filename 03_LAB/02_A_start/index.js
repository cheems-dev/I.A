import aStarSearch from "./functions/aStarSearch.js";
import createGraph from "./functions/createGraph.js";
// -------- INPUT ---------
const data = [
  //node,  pathCost, heuristic,  edge
  ["S", 0, 5, 2],
  ["A", 1, 3, 2],
  ["C", 1, 2, 2],
  ["G", 4, 0, 0],
  ["D", 3, 6, 1],
  ["G", 2, 0, 0],
  ["B", 2, 4, 1],
  ["D", 5, 6, 1],
  ["G", 10, 0, 0],
];

console.log("A*");
console.log("Luis Alberto Ccalluchi Lopez");
console.log("Nodo Buscado: G");
console.log("--------------------");
const root = createGraph(data);
aStarSearch(root, "G");
