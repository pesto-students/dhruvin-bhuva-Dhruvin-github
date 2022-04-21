function add(a = 0,b = 0){
    return a+b;
}

function Memoize(fn){

    const cache = new Map();

    return function (...arguments){
        const key = arguments.toString();

        if(cache.has(key)){
            return cache.get(key);
        }
        cache.set(key,fn(...arguments));
        return cache.get(key);
    }

}

const memoizeAdd = Memoize(add);

console.log(memoizeAdd(100,100));
console.log(memoizeAdd(100));
console.log(memoizeAdd(100,200));
console.log(memoizeAdd(100,100));
