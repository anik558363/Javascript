/* function name sumOfN(). you will be provided a number n. you have to calculate the total of all numbers between 1 to n . use function recursion .
*/


function sumOfN(n){
    if(n === 1){
        return 1;
    }else{
        return n + sumOfN(n - 1);
    }
}

const n = 5;

console.log(sumOfN(n));