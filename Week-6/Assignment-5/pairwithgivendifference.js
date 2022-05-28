function getPairWithGivenDifference(array,difference){

    for (let i = 0; i < array.length; i++) {
        
        for (let j = i+1; j < array.length; j++) {
          
            if(array[i] - array[j] === difference)
            {
                console.log(`Pair (${array[i]} , ${array[j]} have differece of ${difference}.)`)
                return;
            }
            else if(array[j] - array[i] === difference)
            {
                console.log(`Pair (${array[j]} , ${array[i]}) have differece of ${difference}.`)
                return;
            }
          
        }
        
    }
}

getPairWithGivenDifference([5,10,3,2,50,80],78)
getPairWithGivenDifference([-10,20],30)


//Time Complexity : O(n^2)
//Space Complexity : O(n)