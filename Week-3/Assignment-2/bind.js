function getName(lastName,Age){
    var name = 'my name is ' + this.name +' '+lastName + '. My Age is '+Age;
    console.log(name);
}

const fnName = getName.bind({name:'Dhruvin'},'Bhuva');
fnName(25); //output : my name is Dhruvin Bhuva. My Age is 25

fnName('Doe',25); //output : my name is Dhruvin Bhuva. My Age is Doe

//Explanation : 

/* Bind Function Explicitly bind the property of function through a object 
 we can create a copy of function using bind function, though both the copy function and actual function behave
 same but they are not same function.
 we can also pass or bind another property of function in second arguments
 but when we bind property of function in another arguments, it became fix property that we can not Change 
 later on, as we can see in examples that in fnName function creation we bind name and last name property 
 through bind function. so when we call fnName and pass 25, it considered as Age argument 
 and we can see in second fnName function call that though we passed 2 arguments lastname is fixed thouth bind
 so it considered Doe as Age argument*/