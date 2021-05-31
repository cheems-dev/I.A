import Node from "../classes/Node.js";

export default function createGraph(data) {
  let [value, pathCost, heuristic, edge] = data[0];
  const root = new Node(null, value, pathCost, heuristic);
  let store = [
    {
      parent: root,
      edge,
    },
  ];
  let cur = store[0];
  let i = 0;
  while (cur.edge-- > 0) {
    i++;
    let [value, pathCost, heuristic, edge] = data[i];
    let n = new Node(cur.parent, value, pathCost, heuristic);
    cur.parent.addChild(n);
    if (edge > 0) {
      store.push({
        parent: n,
        edge,
      });
      cur = store[store.length - 1];
    } else if (cur.edge == 0) {
      store.pop();
      cur = store[store.length - 1];
    }
  }
  return root;
}
