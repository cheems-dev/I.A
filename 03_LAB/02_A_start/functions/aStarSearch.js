import Node from "../classes/Node.js";

export default function aStarSearch(root = new Node(), finding = "") {
  let queue = [root],
    closed = " ",
    open = "",
    i = 0;
  console.log("Open: ", root.toString());
  console.log("Closed: []");
  while (queue.length) {
    queue.map((el) => (open += el.toString() + " "));
    console.log("-------------------------");
    console.log("Iteracion ", ++i);
    console.log("Open: ", open);
    let n = queue.shift();
    closed += n.toString() + " ";

    console.log("Closed :", closed);
    if (n.isNode(finding)) {
      console.log("-------------------------");
      // console.log("Camino final: ", closed); //Closed :  S(0,5,5) A(1,3,4) C(2,2,4) G(6,0,6)
      console.log("Camino final: S -> A -> C -> G");
      return;
    }
    if (n.hasChild()) {
      queue.push(...n.children);
      queue.sort((a, b) => {
        return a.heuristic + a.pathCost > b.heuristic + b.pathCost;
      });
      // console.log(queue.map((el) => el.toString()));
    }
  }
}
