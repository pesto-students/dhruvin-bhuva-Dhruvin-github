function getPairOf3Integers(array,target){
    
    const cache = new Map();

    var finalSumArray = [];
    

    for (let i = 0; i < array.length-2; i++) {

        for(let j = i+1; j<array.length; j++){

            for(let k = j+1; k<array.length;k++){

                var subArray = [];
                var sum = 0;                
                subArray.push(array[i],array[j],array[k]);

                sum = array[i]+array[j]+array[k];

                finalSumArray.push(sum);
                
                cache.set(sum,subArray);
                
            }

        }

    }

const output = finalSumArray.reduce((prev, curr) => Math.abs(curr - target) < Math.abs(prev - target) ? curr : prev);

console.log(`The sum that is closest to the target is ${output} and integers are ${cache.get(output)}`);
}


getPairOf3Integers([-1,2,1,4,5],1);