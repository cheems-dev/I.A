import Graph from "./classes/Graph.js";
import greedyBestFirstSearch from "./functions/greedyBestFirstSearch.js";
//------------INPUT---------------
const nodes = ["A", "B", "C", "D", "E", "F", "Z"];
const heuristics = [21, 14, 11, 18, 5, 8, 0];

const g = new Graph(nodes, heuristics);
//------------INPUT ---------------
g.add_edges("A", "B");
g.add_edges("A", "C");
g.add_edges("A", "D");
g.add_edges("A", "C");
g.add_edges("B", "E");
g.add_edges("C", "E");
g.add_edges("C", "F");
g.add_edges("D", "F");
g.add_edges("E", "Z");
g.add_edges("F", "Z");

// g.print_adjList();
// console.log(g);
console.log("Greedy Best-First Search");
console.log("Luis Alberto Ccalluchi Lopez");
console.log("Nodo Buscado: Z");
console.log("--------------------------");
greedyBestFirstSearch("A", "Z", nodes, g);
