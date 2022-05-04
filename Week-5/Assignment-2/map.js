function vowelCount(string){

    const mapObj = new Map();


    for(let char of string)
    {
        let lowercasechar = char.toLowerCase();

        if('aeiou'.includes(char)){
            if(mapObj.has(lowercasechar)){
                mapObj.set(lowercasechar,mapObj.get(lowercasechar) + 1);
            }
            else{
                mapObj.set(lowercasechar,1);
            }
        }
    }

 return mapObj;
}

vowelCount('hello');