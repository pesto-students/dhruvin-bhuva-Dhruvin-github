function findMaxSum(array) {
  var finalArrays = [];

  const map = new Map();
  
  //first loop will iterate for every element in array
  for (let i = 0; i < array.length; i++) {

    //second loop will iterate from ith index of array to last index 
    for (let j = i ; j < array.length; j++) {

      //will slice every possible contiguous subarray
      var subArray = array.slice(i + 1, j);

      var sum = 0;

      for (const element of subArray) {
        sum += element;
      }

      //stores every possible subarray and its sum in key-value pair
      map.set(sum,subArray);

      finalArrays.push(sum);
    }
  }
  
  var maxsum =  Math.max(...finalArrays);

  var maxContiguousArray = map.get(maxsum);

  console.log('[' + maxContiguousArray + ']'+' Has Maximum Possible Sum of ' + maxsum );
}

findMaxSum([-2,1,-3,4,-1,2,1,-5,4]);


//Time Complexity : = O(N^2 + )
//Space Complexity : = O(N^2)