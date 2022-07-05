
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

    reverse(){

        let temporary=this.head;
        this.head=this.tail;
        this.tail=temporary;

        let prev=null;
        let temp=this.head;
        let next=this.head.next;
        while(temp.next){
            temp.next=prev;
            prev=temp;
            temp=next;
            next=next.next;
        }

    }

}

var linkedlist = new LinkedList();
linkedlist.push(1);
linkedlist.push(2);
linkedlist.push(3);
linkedlist.push(4);
linkedlist.push(5);
linkedlist.push(6);


linkedlist.reverse();