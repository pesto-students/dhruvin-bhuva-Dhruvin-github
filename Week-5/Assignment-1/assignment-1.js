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



//Generator Function
function* generator(){


    yield doTask1();
    yield doTask2();
    yield doTask3();
    
}

function doTask1(){
    setTimeout(() => {
        console.log('Generator doTask1');
    }, 1000);
}

function doTask2(){
    setTimeout(() => {
        console.log('Generator doTask2');
    }, 1000);
}

function doTask3(){
    setTimeout(() => {
        console.log('Generator doTask3');
    }, 1000);
}



const gen = generator()
gen.next();
gen.next();
gen.next();

asyncAwaitFunction();