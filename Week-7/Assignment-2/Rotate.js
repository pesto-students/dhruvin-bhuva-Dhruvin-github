class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
} 

class LinkedList{
    constructor()
    {
        this.head = null;
        this.tail = null;
    }

    push(value){

        let newNode = new Node(value);

        // Checks that if Linked list is empty or not
        if(this.head == null){
            this.head = newNode;
            this.tail = this.head; // Assigning Head and tail to New Node
        }
        else{

            this.tail.next = newNode; //Assign next of current tail to new node
            this.tail = newNode; // assign new node to tail
            
        }
    }
}


let linkedList=new LinkedList(2);
linkedList.push(4);
linkedList.push(7);
linkedList.push(8);
linkedList.push(9);

function rotate(list,nodes){
  for(let i=0;i<nodes;i++){
  let temp=list.head;
  list.head=list.head.next;
  temp.next=null;
  list.tail.next=temp;
  list.tail=list.tail.next}
  
  return list;
}

console.log(rotate(linkedList,3));