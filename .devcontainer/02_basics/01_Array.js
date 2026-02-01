// array 

const myArr = [0, 1, 2, 3, 4, 5];
const myheros = ['shaktiman', 'naagraj', 'doga', 'batman'];

const myArr2 = new Array(1, 2, 3, 4, 5, 6);
// console.log(myArr);
// console.log(myArr["1"]); // [0, 1, 2, 3, 4, 5]

// Array methods

// myArr.push(6);
// myArr.push(7);
// myArr.pop();
// myArr.shift();
// myArr.unshift(10);
// myArr.shift();


// myArr.splice(2, 2); // (index, how many to delete)
// myArr.reverse();
// myArr.sort(); // sorts in lexicographical order 

// console.log(myArr.includes(5));
// console.log(myArr.includes(15));

// console.log(myArr.indexOf(3));
// console.log(myArr.indexOf(15));


const newArr = myArr.join()



// console.log(newArr);
// console.log(typeof newArr);

console.log(myArr);


// slice ,splice


console.log("A ", myArr)

const myn1 = myArr.slice(1, 4); // does not change the original array
console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 4); // changes the original array
console.log("C ", myArr);
console.log(myn2);


