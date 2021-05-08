## Introduction
* Non Linear Data Structure is opposite to Linear Data Structure, data inside would not be organized sequentially, rather it could be in hierarchical way or scattered in memory area with key to each element for access.
* Hash Table, Tree, Graph are Non-Linear Data Structure types. 
---
## HashTable
* HashTable uses key value pair approach to organize the data in memory. When each element is added to HashTable, key will be generated, and that key will have pointer to the element in memory. If need to get the data from HashTable, we need to use that key.
* In Java, it is called HashMap.

## Tree
* Tree as name implies, it represents hierarchical data structure. Here, data is placed inside a node and each node is connected with one another using link called edge.
* HTML, XML are some of examples uses Tree Data Structure.
* Key Terminologies: 
    * root - A node which won't have parent , but will have childs. 
    * child - A node which will have Parent, and may have childs.
    * Edge - It is link which connects child node to parent.
    * Height - Longest Path to a very bottom child node.
    * Depth - Length from a node to the root.

![](https://amvijay.github.io/images/tree-datastructure-model.jpg)
* In a Tree data structure, there would be minimum one root node, one or more child nodes connected to parent node. One of the parent node should be root.
* Binary Tree is one of the famous Model of this kind of data structure. In Binary Tree, each node will have only 2 leaves at max, except this all other rules stated above applicable for Binary Tree.
* Depth First Search (DFS) and Breadth First Search (BFS) are famous and important algorithm applicable to Tree data strcuture exclusively.

## Graph
* Graphs are similar to Trees, contains nodes and edges connecting all the nodes. But Graph can be called as super set of Tree. 
* Graph may or may not form a closed loop traversal in nodes. But Tree can't.

![](https://amvijay.github.io/images/graph-datastructure-model.jpg)

---