async function asyncAwaitFunction (praam1,param2,param3){

    await doTask('doTask1',100);
    await doTask('doTask2',1000);
    await doTask('doTask3',500);
}

 function doTask(string,time){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
           console.log(string);
           resolve(); 
        }, time);
    });
}


function generator(){
    
}

asyncAwaitFunction();