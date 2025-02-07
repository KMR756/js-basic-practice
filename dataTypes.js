let name = "Rahat"; //string data type
let age = 24; //numerical data type
let isProgrammer = true; //boolean data type
let bigNumber = 1234383987733n; //bigInt data type
let temperature = null; //standalone data / null value / empty variable
let hobby = undefined; //undefined data type
let userId = Symbol(1234);

console.log(typeof name);
console.log(typeof age);
console.log(typeof isProgrammer);
console.log(typeof bigNumber);
console.log(typeof temperature);
console.log(typeof hobby);
console.log(typeof userId);

console.table([name, age, isProgrammer, bigNumber, temperature, hobby, userId]);
