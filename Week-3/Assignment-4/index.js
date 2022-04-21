function createStack() {
//     return{
//         items: [],
//             push(item) {
//           this.items.push(item);
//       },
//       pop() {
//           return this.items.pop();
//       }
//   };

// items:[],
// push : function((item)=>{
//     this.items.push(item);
// });



}
const stack = createStack();
stack.push(10);
stack.push(5);
stack.pop(); // => 5
// stack.items;// => [10]
// stack.items= [10,100,1000];

console.log(stack.items);
