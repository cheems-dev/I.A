import fs from "fs";
export default function writeFile(file) {
  const data = "DFS  - Nodo Seleccionado H \nLuis Alberto Ccalluchi Lopez\n";
  fs.appendFileSync("dfs.txt", data);
}
