import { Three } from "./src/Tree.Node.js";
import writeFile from "./src/write.File.js";

const nodes = "F D K B E G L A C H J".split(" ");

const edges = [
  ["F", "D"],
  ["F", "K"],
  ["D", "B"],
  ["D", "E"],
  ["B", "A"],
  ["B", "C"],
  ["K", "G"],
  ["K", "L"],
  ["G", "H"],
  ["H", "J"],
];

const three = new Three(nodes, edges);
const { message, queue, visited } = three.bfs("F");
// // console.log(message);
// // console.log(queue);
// // console.log(visited);
writeFile();
three.dfs("F");
