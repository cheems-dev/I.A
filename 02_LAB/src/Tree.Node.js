import fs from "fs";

export class Three {
  values = {
    F: 0,
    D: -1,
    K: -1,
    B: -2,
    E: -2,
    G: -2,
    L: -2,
    A: -3,
    C: -3,
    H: -3,
    J: -4,
  };

  adjacencyList = new Map();
  i = 1;

  constructor(nodes, edges) {
    this.nodes = nodes;
    this.edges = edges;
    this.createGraph();
  }

  createGraph() {
    this.nodes.forEach((node) => this.adjacencyList.set(node, []));

    this.edges.forEach(([origin, dest]) => {
      this.adjacencyList.get(origin).push(dest);
      this.adjacencyList.get(dest).push(origin);
    });
  }

  bfs(start) {
    let data = "BSF  - Nodo Seleccionado H\nLuis Alberto Ccalluchi Lopez\n ";
    const frontier = [start];
    const reached = new Set(start);
    this.i;
    while (frontier.length > 0) {
      data += `Paso ${this.i++}\n`;
      data += `frontier = ${frontier}\n`;
      data += `reached = ${[...reached]}\n`;
      data += "-------------------------------------\n";

      const node = frontier.shift();

      const destinations = this.adjacencyList.get(node);
      for (const destination of destinations) {
        if (destination === "H") {
          const message = "Correct: Found H";
          data += `G -> ${destination}`;
          fs.appendFileSync("bfs.txt", data, {
            encoding: "utf8",
            flag: "w",
          });
          this.i = 1;
          return { message, frontier, reached };
        }

        if (!reached.has(destination)) {
          reached.add(destination);
          frontier.push(destination);
        }
      }
    }
    return "Error: Not found element";
  }

  dfs(start, visited = new Set()) {
    fs.appendFileSync(
      "dfs.txt",
      `Paso  ${this.i++}\nFrontier: ${start}(${this.values[start]})\n`
    );
    visited.add(start);

    const destinations = this.adjacencyList.get(start);
    for (const destination of destinations) {
      if (destination === "H") {
        console.log(`DFS found H`);
        fs.appendFileSync("dfs.txt", `Node found: ${destination}\n`);
        return;
      }

      if (!visited.has(destination)) {
        const nodes = [...visited];
        let data = "";
        nodes.forEach((n) => {
          data += `${n}(${this.values[n]}) `;
        });
        fs.appendFileSync(
          "dfs.txt",
          `Reached: ${data}\n----------------------------\n`
        );

        this.dfs(destination, visited);
      }
    }
  }
}
