// CALL Function In JAVASCRIPT

function CallExample(){
    console.log(this.username);
}

CallExample();

const callObject = {
    username : 'Dhruvin'
}

CallExample.call(callObject);

// Call Function Ending

// Explanation : 

// We can bind the object and its property to the function using call function
// in the given code when we first call the CallExample() function, the result is undefined because there is no 
// username property in CallExample function
// but when we bind callObject with call function and again call CallExample function, the result is 'Dhruvin',
// because now function can access the property of object