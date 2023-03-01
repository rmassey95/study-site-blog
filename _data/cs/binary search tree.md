---
title: "Binary Search Tree"
folder: "cs"
excerpt: "What is a binary search tree and why is it used"
date: "2023-02-22"
---

A binary search tree (BST) is a data structure which utilizes **nodes**. Each node in a binary search tree has it's value, a left subtree, and a right subtree. Each of the subtrees (right and left) are also their own binary search trees, a node containing it's own left subtree, right subtree, and value. The value of the node to the left (left subtree node value) is always less then the value of the root node. The value of the node to the right (right subtree node value) is always more then the value of the root node. The root node is the node you are currently observing.

Each node has atleast two child nodes (left and right subtree) and the end of the BST is where a node has a left subtree and right subtree pointing to **NULL** or the bottom of the tree. Also referred to as the leaf node.

BST allows for more efficient searching by repeatedly dividing the search space in half. For example, if you look at a BST's top node and the value you are looking for is less then the value of that node then you know to continue down the left subtree of that node and can completely ignore the other half of the BST (right subtree) because you know the value you are looking for can't be there.

A BST supports operations like search, insert, delete, etc in O(h) time where h is the height of the BST.

## Self-Balancing BST

A self-balancing BST automatically keeps its height as small as possible reducing the time needed to search, insert, etc to O(log n). To utilize self-balancing BST, a check is made when the state of the BST changes to see if the BST has remained balanced. If not, a transformation will be performed to balance the tree.

## BST Traversal

There are three basic algorithms for traversing a BST:

- **Inorder** - Nodes from the left subtree get visited first, followed by the root node and then the right subtree. In this algorithm, the lowest value will be visited first and the last to be visited will be the highest value (BST will be displayed _inorder_). To accomplish this, you recursively visit the left subtree, visit the root node then recursively visit the right subtree.
- **Preorder** - The root node is visited first, followed by the left subtree then the right subtree. To implement this algorithm, you visit the root node, then recursively visit the left subtree and finally recursively visit the right subtree. You will visit every node to the left BEFORE visiting nodes in the right subtrees.
- **Postorder** - The left subtree gets visited first, followed by the right subtree then the root node. For this algorithm, we recursively visit the left subtree, recursively visit the right subtree and then finally visit the root node.
