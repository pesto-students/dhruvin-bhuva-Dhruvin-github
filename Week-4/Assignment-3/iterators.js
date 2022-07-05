
const fib = (num) => ({
    [Symbol.iterator](){

        let i = 0;

        let a = 0;
        let b = 0;
     
        return{
            next(){
                 if(i++ < num){
                   
                   [a,b]  = [b , (a+b) || 1];
              
                     return{value:a,done:false};
                 }
                 else{
                     return{done:true}
                 }
                
            }
        }
    }
});

for(const num of fib(10))
{
    console.log(num);
}

