function sort(array){

var sortedarray = [];

for (let i = 0; i < array.length; i++) {

        if(array[i] === 2)
        {
            //directly push 2 at end of array
            sortedarray.push(array[i]);
        }
        else if(array[i] === 0){
          //insert 0 at starting of array
          sortedarray.splice(0,0,(array[i]));
        }
        else 
        {   
            //insert 1 after last 0
            var lastIndedof0 = sortedarray.lastIndexOf(0);
            sortedarray.splice(lastIndedof0 + 1,0,array[i]);
        }

}

return sortedarray;

}

console.log(sort([0,1,2,1,0,0,2,1,0,2,1,2,2,1]));


/* since for loop is executing only once, time complexity of function sort is O(N) and we only used 
 one array to store result , auxiliary space is O(1) */