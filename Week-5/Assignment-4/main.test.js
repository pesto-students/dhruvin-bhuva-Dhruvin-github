// import {mathOperations} from './main';
const mathOperations = require('./main');


test('two plus two is four',() => {
    expect(mathOperations.sum(2,2)).toBe(4);
}); 

test('two minus two is two',() => {
    expect(mathOperations.diff(4,2)).toBe(2);
}); 

test('four into two is eight',() => {
    expect(mathOperations.product(4,2)).toBe(8);
}); 