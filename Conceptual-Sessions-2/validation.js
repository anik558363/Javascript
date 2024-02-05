// function add(a, b){
//     if(typeof a !== 'number' || typeof b !== 'number'){
//         return 'please give me two numbers'
//     }
//     return a + b;
// }


// console.log(add(10, '10'));




// function findSum(arr){
//     if(!Array.isArray(arr)){
//         return 'please give me array'
//     }else{
//         let sum = 0;
//         for(let item of arr){
//             sum += item;
//         }
//         return sum
//     }
// }



// // const x = [10, 20, 63];
// console.log(findSum('kl'));



function findVowel(s){
    if(typeof s !== 'string'){
        return 'please give me string'
    }else{
        
    let vowel = 0;
    let conSoEnt = 0;
    let space = 0;
    for(let i = 0; i < s.length; i++){
        let char = s[i]
        if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
            vowel++;
        }else if(char === " "){
            space++;
        }
        else{
            conSoEnt++;
        }
    }
    const obj ={
        countVowel: vowel,
        countConSoEnt: conSoEnt,
        countSpace: space
    }
    return obj;
    }
}








const sentence = 'the name of our country is bangladesh';


console.log(findVowel(sentence));














