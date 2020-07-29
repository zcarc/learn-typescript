class GenericNumber<T> {
    zeroValue: T | undefined ;
    add: ((x: T, y: T) => T) | undefined;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };

console.log(myGenericNumber.add(10, 20))


let stringGenericNumber = new GenericNumber<string>();
stringGenericNumber.zeroValue = '';
stringGenericNumber.add = function(x, y) { return x + y; };

console.log(stringGenericNumber.add('10', '20'))