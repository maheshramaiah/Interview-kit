class Graph {
  constructor() {
    this.adjList = new Map();
  }

  addVertex(vertex) {
    if (!this.adjList.has(vertex)) {
      this.adjList.set(vertex, []);
    } else {
      throw new Error('Vertex exist');
    }
  }

  addEdge(vertex, node) {
    if (this.adjList.has(vertex)) {
      if (this.adjList.has(node)) {
        const arr = this.adjList.get(vertex);
        if (!arr.includes(node)) {
          arr.push(node);
        }
      }
    }
  }

  getNode(vertex) {
    return this.adjList[vertex];
  }

  print() {
    for (const [vetex, edge] of this.adjList) {
      console.log(`${vetex} - ${edge}`);
    }
  }

  bst(startingNode) {
    let vistedNodes = {};
    let queue = [];

    queue.push(startingNode);
    vistedNodes[startingNode] = true;

    while (queue.length) {
      const node = queue.pop();
      const adjacentNodes = this.adjList.get(node);

      console.log(node);

      for (const vertex of adjacentNodes) {
        if (!vistedNodes[vertex]) {
          queue.unshift(vertex);
          vistedNodes[vertex] = true;
        }
      }
    }
  }

  dst(startingNode, vistedNodes = {}) {
    vistedNodes[startingNode] = true;

    console.log(startingNode);

    for (const vertex of this.adjList.get(startingNode)) {
      if (!vistedNodes[vertex]) {
        this.dst(vertex, vistedNodes);
      }
    }
  }
}

// const graph = new Graph();

// graph.addVertex('A');
// graph.addVertex('B');
// graph.addVertex('C');
// graph.addVertex('D');
// graph.addVertex('E');
// graph.addVertex('F');

// graph.addEdge('A', 'B');
// graph.addEdge('A', 'D');
// graph.addEdge('A', 'E');

// graph.addEdge('B', 'C');

// graph.addEdge('C', 'F');

// graph.addEdge('D', 'E');

// graph.addEdge('E', 'C');
// graph.addEdge('E', 'F');

// graph.print();

// graph.dst('A');

module.exports = Graph;
