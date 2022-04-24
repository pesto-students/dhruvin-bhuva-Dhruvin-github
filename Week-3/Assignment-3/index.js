function createIncrement() {
  let count = 0;
        function increment() {
            count++;
        }
        
        let message = `Count is${count}`;

        function log() {
            console.log(message);
        }

  return [increment, log];
}

const [increment, log] = createIncrement();
increment();
increment();
increment();
log(); 

// Output : Count is 0

// Explanation : 

/*we may expect that output will be count is 3 but that is not the case, because when we executed the function
in line 16 the message variable is already created. so it does not matter how many time we incement the count
the answer remains same. because there is no code that says that when we increment the count, message
also has to be Changed.*/ 