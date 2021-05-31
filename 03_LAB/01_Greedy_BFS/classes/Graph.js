export default class Graph {
  constructor(nodes, heuristics) {
    this.nodes = nodes;
    this.heuristics = heuristics;
    this.adj_list = new Map();
    this.nodeAndHeuristic = new Map();
    for (const node of this.nodes) {
      this.adj_list[node] = [];
    }
    let i = 0;
    for (i; i < this.nodes.length; i++) {
      this.nodeAndHeuristic[this.nodes[i]] = this.heuristics[i];
    }
  }
  add_edges(source, destination) {
    this.source = source;
    this.destination = destination;
    this.adj_list[source].push(destination);
    this.adj_list[destination].push(source);
  }
  print_adjList() {
    for (const node of this.nodes) {
      console.log(`${node}->${this.adj_list[node]}`);
    }
  }
  print_nodesAndHeuristics() {
    for (const node of this.nodes) {
      console.log(`${node}->${this.nodeAndHeuristic[node]}`);
    }
  }
}
