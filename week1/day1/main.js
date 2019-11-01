var name = 'Bob';


var myStr = `this is isn't  
  <h1>hello</h1>
  <p>${ name}</p>

        blah

a string`;

// function sayHello() {
//   return;
//   'this sstring';
// }

console.log(myStr);

var array = ['dog', 'cat', 'fish'];

array.push('horse');
console.log(array[1]);

// for (var index = 0; index < array.length; index++) {
//   console.log(`index is ${index} and value is ${array[index]}`);
// }

// // for in is for objects
// for (var index in array) {
//   console.log(`index is ${index} and value is ${array[index]}`);
// }

// for (var element of array) {
//   console.log(`element is ${element}`)
// }

// var person = ['blue', 'brown', 34];

var person = {
  hair: 'blue',
  'eyes': 'brown',
  "age": 34,
  key: 'this is a key'
};

person.name = 'Bob';

console.log(person);


for (var key in person) {
  // console.log(`key is ${key} aand value is ${person[key]}`);
}

function sayHello(name = 'Bob') {
  console.log(`Hello ${name.toUpperCase()}`);
}


sayHello()