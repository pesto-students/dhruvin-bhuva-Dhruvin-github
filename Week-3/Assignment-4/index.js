function createStack() {
    let items = [];
    return{
            push(item) {
          items.push(item);
      },
      pop() {
          return items.pop();
      }
  };

// items:[],
// push : function((item)=>{
//     this.items.push(item);
// });



}
const stack = createStack();
stack.push(10);
stack.push(5);
stack.push(5);
stack.pop(); // => 5

