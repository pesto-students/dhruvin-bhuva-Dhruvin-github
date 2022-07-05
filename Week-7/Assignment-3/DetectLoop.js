class Node{
    constructor(value){
        this.value = value;
        this.next = null;
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

var linkedlist = new LinkedList();
linkedlist.push(5);
linkedlist.push(3);
linkedlist.push(7);
linkedlist.push(9);
linkedlist.push(2);
linkedlist.push(1);


function checkLoop(list){
    var s = new Set()
    let temp=list.head;
    while(temp!=null){
      if (s.has(temp)) {return true};
      s.add(temp)
      temp=temp.next
    }
    
    return false;
  }


checkLoop(linkedlist)