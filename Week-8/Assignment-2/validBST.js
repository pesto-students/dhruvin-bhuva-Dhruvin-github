

const BinaryTree=function(){

    let _root= null; //closure variable
    let _count=0;

    const _insert=(root, value)=>{
        if(root==null){
            root= {value, left:null,right:null};
            _count++;
        } else if(value<root.value)
            root.left=_insert(root.left,value);
        else if(value>root.value) //--> uncomment to make tree of unique items
            root.right=_insert(root.right,value);

        return root;
    };

    this.insert=function(...values){
        for(let value of values)
            _root=_insert(_root, value);
    }
    this.size=()=>{
        return _count;
    }

    


}


let tree = new BinaryTree();

let items= [12, 22,  8, 18,  14,  6,  2, 30, 9, 22, 5, 20,  4];

tree.insert( ...items);











