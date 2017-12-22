// Object-Destructuring:
// ------------------------

// const person = {
// 	// name:'Kipso',
// 	age:28,
// 	location:{
// 		city:'bangalore',
// 		temp:90
// 	}
// };

// const { name: firstName ='Anonymous', age, } = person;

// console.log(`${firstName} is ${age}.`);

// const { city, temp:temperature }= person.location;

// console.log(`It's ${temperature} in ${city}.`);


// const book = {
// 	title:'Ego is the Enemy ',
// 	author: 'Ryan Holiday',
// 	publisher: {
// 		// name: 'Penguin'
// 	}
// };

// const {name:publisherName='Self-Published'} = book.publisher;

// console.log(publisherName);

// #################################################################################

// Array Destructuring:
// -------------------------------------

// const address = ['123 Army Colony','Domlur','Bangalore','687809'];

// const [street,city,state,zip ] = address;

// console.log(`You are in ${city} ${state}.`);

// const item = ['Coffee (hot)','$2','$3','$4'];

// const [name,,medium,,extralarge='$6'] =item;

// console.log(`A medium ${name} costs ${medium}.`);
// console.log(`A extra large ${name} costs ${extralarge}.`);