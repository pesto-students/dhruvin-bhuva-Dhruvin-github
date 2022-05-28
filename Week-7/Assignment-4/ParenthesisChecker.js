function isMatching(c1,c2){
    if((c1=='}' && c2=='{') || (c1==']' && c2=='[') || (c1==')' && c2=='(')){ return true}
    else{return false }
  }
  
  function parenthesisChecker(s){
    let arr=[];
    for(let i=0;i<s.length;i++){
      let char=s[i]
      if(char=='{' || char=='[' || char=='('){
        arr.push(char);
      }
      else{
         if(arr.length===0){ 
           console.log('exit1');
           return false}
         else if (!isMatching(char,arr[arr.length-1])){
           return false
         }
         else{
           arr.pop();
         }
      }
    }
    return arr.length===0;
  }
  
  let s1= "[()]{}{()()}"; 
  let s2= "[(])"
  
  console.log(parenthesisChecker(s1));
  console.log(parenthesisChecker(s2)); 