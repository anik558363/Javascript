// function sumOfArray(arr){
//     let sum = 0;
//     for(let item of arr){
//         sum += item;
//     }
//     return sum;
// }


// const number = [1, 2, 3, 4, 5]

// const result = sumOfArray(number);
// console.log(result);




// function sumOfOdds(arr){
//     let  sum = 0;
//     for(let item of arr){
//         if(item % 2 === 1){
//             sum += item;
//         }
//     }
//     return sum;
// }


// function sumOfEvent(arr){
//     let sum = 0;
//     for(let item of arr){
//         if(item % 2 === 0){
//             sum += item;
//         }
//     }
//     return sum
// }




// const number = [1, 2, 3, 4, 5, 6, 7, 8, 9]


// const result = sumOfOdds(number);
// const result = sumOfEvent(number)
// console.log(result);



// amer name anik, amer bari Dhaka, amer boyos 24


// function information(info){
//     const sentence = `amer name ${info.name}, amer bari ${info.address}, amer boyos ${info.age}`
//     return sentence;
// }



// const myInfo = {
//     name : 'anik',
//     address : 'dhaka',
//     age : 24
// }


// const result = information(myInfo)
// console.log(result);


// const number = 5;
// let result = 1;

// for(let i = number; i >= 1; i--){
//     result *= i;
// }


// console.log(result);



// function factorial(number){
//     let result = 1;
//     for(let i = number; i >= 1; i--){
//         result *= i;
//     }
//     return result;
// }

// const number = 5

// console.log(factorial(5));





// function factorial(num) {
//     if (num === 0 || num === 1) {
//         return 1;
//     } else {
//         let result = 1;
//         for (let i = num; i >= 1; i--) {
//             result *= i;
//         }
//         return result;


//     }
// }


// const number = 5;
// console.log(factorial(number));



// find the largest number from an array


// function findLargestNum(num){
//     let max = num[0];
//     for(let item of num){
//         if(max < item){
//             max = item;
//         }
//     }
//     return max;
// }


// const arr = [5, 10, 20, 55, 60, 44, 10];

// console.log(findLargestNum(arr));




// find largest name 


function findLargestName(name){
    let largestName = name[0];
    for(let item of name){
        if(largestName.length < item.length){
            largestName = item;
        }
    }
    return largestName;
}

const friends = ['anik', 'joy', 'tommy', 'arponds', 'apu']


console.log(findLargestName(friends));