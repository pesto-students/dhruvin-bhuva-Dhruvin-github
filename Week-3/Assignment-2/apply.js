
const array = [4,10,18,2,5,7];

MaxNumber = Math.max(array);

console.log(MaxNumber);

let MaxNumberApply = Math.max.apply(null,array);

console.log(MaxNumberApply);

// Explanation : 

// in first console.log of MaxNumber it gives NaN as result because math.max only accepts positional arguments,
// and it will not give desired output when number of argument is not defined

// so overcome that we can use max.apply and then we can pass our array in second argument and we can get 
// desired output.