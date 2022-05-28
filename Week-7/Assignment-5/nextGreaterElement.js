
  function NextGreaterELment(arr){
    var finalArray=[];
    var size = arr.length;
    for(var i=0; i<size; i++){
        if(i === arr.length){
            finalArray.push(-1);
        }
        else{
            var remainingArray = [];
            remainingArray = arr.splice(i+1,arr.length);
            var max = Math.max(...remainingArray)
            finalArray.push(max);
        }
    }
console.log(finalArray);
  }

  let a1=[1,3,2,4]
  let a2=[6,8,0,1,3]
  
  console.log(NextGreaterELment(a1))
  console.log(NextGreaterELment(a2))