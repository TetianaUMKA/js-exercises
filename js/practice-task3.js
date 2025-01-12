// a primitive data type is assigned by value // address is in Call Stack
const a = "origin";
let b = a;
console.log(a === b);
console.log(b);

b = 100000;
console.log(b, a);

// a Non-Primitive data type by reference // address is in Memory Heap
const array1 = [100, 200, 400];
const array2 = array1;
console.log(array1, array2);

array2[1] === 600;

console.log(array1 === array2);

console.log(array1 === array2);

// Type Coercion and Type Casting

const array = [1, true, "Poly"];
console.log(String(array)); // "1,true,Poly"
console.log(array + "5"); // "1,true,Poly5"

console.log(Number([])); // 0
console.log(Number([1])); // 1
console.log(Number([1, 2, 3])); // NaN

const emptyArray = [];
const nonEmptyArray = [1, 2, 3];

console.log(Boolean(emptyArray)); // true
console.log(Boolean(nonEmptyArray)); // true
