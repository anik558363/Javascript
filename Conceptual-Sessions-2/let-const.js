// var x = 'hello';
// var x = 'world';

// console.log(x);


// let x = 'hello';
// x = 'anik';
// const y = 'world';


// console.log(x);


// let => we can re-assign value but can not re declare it

// const => we can not re-assign and can not re-declare


// const name = 'anik';

// // amer name moddhe 'an' acy kina
// const result = name.includes('a')

// console.log(result);





// const pets = ['cat', 'dog', 'rat'];
// const result = pets.includes('rat');

// console.log(result);



//  slice ---> splice


// const arr = ['ant', 'camel', 'duck', 'elephant', 'cat', 'dog'];

// arr.shift();
// arr.unshift('anik')
// console.log(arr);






// console.log(arr.slice(2));
// console.log(arr.slice(2, 4)); // sure hobe koto theke, sesh hobe kar age porjonto


// const result = arr.splice(2, 1)

// arr.splice(2,1,'rat', 'cow') // splice (startIndex, deleteCount, insertItem.....)

// console.log(result);
// console.log(arr);




// object


// const person = {
//     name : 'anik',
//     age : 24,
//     address : 'Dhaka',
//     phone : '31313451'
// } // dot notation, bracket notation

// const key = 'phone'

// console.log(person.address); // dot notation
// console.log(person[key]); // bracket notation


// console.log(Object.keys(person));
// console.log(Object.values(person));



// const keys = Object.keys(person);
// const values = Object.values(person);
// console.log(keys);
// console.log(values);



// for(let key of keys){
//     // console.log(key);
//     // console.log(person[key]);
// }


const person = {
    name : 'anik',
    age : 24,
    address : 'Dhaka',
    phone : '31313451'
}


for(let i in person){
    // console.log(i);
    // console.log(person[i]); 
}