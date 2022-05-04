const hasDuplicate = array => {

 var setObj = new Set();
 
 var duplicate = false;

 array.forEach(element => {
     if(setObj.has(element))
     {
         //for reduce time complexity
         duplicate = true;
         return;
    }
    else{
         setObj.add(element);
     }
    });

return duplicate;

}

console.log(hasDuplicate([1,2,3,4]));