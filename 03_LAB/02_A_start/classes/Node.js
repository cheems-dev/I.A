export default class Node {
  constructor(parent = new node(), value = "", pathCost = 0, heuristic = 0) {
    this.parent = parent;
    this.childIndex = 0;
    this.children = [];
    this.value = value;
    if (parent) pathCost += parent.pathCost;
    this.pathCost = pathCost;
    this.heuristic = heuristic;
  }

  addChild(child = new node()) {
    this.children.push(child);
  }

  hasChild() {
    return this.children.length > this.childIndex;
  }

  nextChild() {
    if (this.hasChild()) {
      return this.children[this.childIndex++];
    }
    return false;
  }

  isNode(value) {
    return this.value === value;
  }

  assembleChildren(func) {
    this.children = this.children.sort(func);
  }

  resetIndex() {
    this.childIndex = 0;
  }

  toString(data = "") {
    if (data)
      return `${this.value}(${this.pathCost},${this.heuristic},${data})`;
    return `${this.value}(${this.pathCost},${this.heuristic},${
      this.pathCost + this.heuristic
    })`;
  }

  data() {
    let chain = [];
    let curr = this;
    while (curr.parent) {
      curr = curr.parent;
      chain.push(curr.value);
    }
    return {
      parent: this.parent.value,
      chain,
      pathCost: this.pathCost,
      value: this.value,
    };
  }
}
