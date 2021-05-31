export default class PriorityQueue {
  constructor() {
    this.pq = new Array();
  }

  isEmpty() {
    return this.pq.length == 0;
  }

  high() {
    if (!this.isEmpty()) return this.pq[this.pq.length - 1][0];
  }

  low() {
    if (!this.isEmpty()) return this.pq[0][0];
  }
  front() {
    return this.pq[0];
  }
  enqueue(pri, item) {
    this.i = 1;
    this.data = [pri, item];
    if (this.isEmpty()) {
      this.pq.push(this.data);
      return;
    }
    if (pri >= this.high()) {
      this.pq.push(this.data);
      return;
    }
    if (pri < this.low()) {
      this.pq.unshift(this.data);
      return;
    }
    for (this.i; this.i < this.pq.length; this.i++) {
      if (pri < this.pq[this.i][0]) {
        this.pq.splice(this.i, 0, this.data);
        return;
      }
    }
  }

  dequeue() {
    if (this.isEmpty()) return "Underflow";
    return this.pq.shift();
  }
}
// pq=new PriorityQueue();
// pq.enqueue(0,'A');
// pq.enqueue(0,'B');
// pq.enqueue(5,'C');
// pq.enqueue(2,'D');
// pq.enqueue(3,'E');
// console.log(pq.front());
// console.log(pq);
// item=pq.dequeue();
