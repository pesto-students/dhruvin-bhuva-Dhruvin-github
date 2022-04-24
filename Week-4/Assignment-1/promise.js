function getNumbers(){
    var random = Math.random() * 1000;

    const promise = new Promise(function(resolve,reject){
        
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();


        if(random % 5 === 0){
            reject(time)
        }
        else{
            resolve(time)
        }
    })
    .then(
        val => console.log('Resolve Time is ' + val)
    )
    .catch(
        val => console.log('Rejection Time is ' + val)
    )
}

getNumbers()