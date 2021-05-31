import PriorityQueue from "../classes/PriorityQueue.js";

export default function BestFirstSearch(start, goal, nodes, g) {
  const PQ = new PriorityQueue(),
    visitedlist = new Map();
  for (const node of nodes) {
    visitedlist[node] = false;
  }
  PQ.enqueue(g.nodeAndHeuristic[start], start);
  visitedlist[start] = true;

  let path = [],
    account = 0,
    closed = [];
  console.log("Open =  ", ...PQ.pq);
  console.log("Closed = [] ");
  // closed.push(...PQ.pq);
  console.log("--------------------------");
  while (!PQ.isEmpty()) {
    if (PQ.isEmpty()) {
      let str = "Fail";
      return str;
    }
    let Node = PQ.dequeue();
    closed.push(Node);

    Node = Node[1];
    path.push(Node);

    // console.log(path);
    // console.log(Node);
    if (Node === goal) {
      console.log("Se encontro el elemento");
      console.log("Camino Final = ", ...closed);
      return path;
    } else {
      for (let i = 0; i < g.adj_list[Node].length; i++) {
        if (!visitedlist[g.adj_list[Node][i]]) {
          PQ.enqueue(
            g.nodeAndHeuristic[g.adj_list[Node][i]],
            g.adj_list[Node][i]
          );
          visitedlist[g.adj_list[Node][i]] = true;
        }
      }
      console.log(`Iteracion ${++account}`);

      console.log("Open = ", ...PQ.pq);
      console.log("Closed = ", ...closed);

      console.log("--------------------------");
    }
  }
}
