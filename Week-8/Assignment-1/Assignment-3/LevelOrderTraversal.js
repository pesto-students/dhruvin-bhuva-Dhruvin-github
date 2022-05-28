class Node
{
    constructor(item)
    {
        this.data=item;
        this.left=null;
        this.right=null;
    }
}

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.left.left=new Node(6)
root.left.right = new Node(5);

function levelOrderTraversal(root){
  let queue=[];
  results=[];
  queue.push(root);
  while(queue.length){
    let currentNode=queue.shift();
    results.push(currentNode.data);
    if(currentNode.left){queue.push(currentNode.left)}
    if(currentNode.right){queue.push(currentNode.right)}
  }
  
  return results;
}

console.log(levelOrderTraversal(root));