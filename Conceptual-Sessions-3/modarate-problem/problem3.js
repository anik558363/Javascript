// function name printDetails(). you will be provided an object. you have to use the properties of the object and make a meaning full sentence. if there are any property missing you have to print there (nai);

/*
const obj = {
    name: "mehedy",
    age:26,
    email:"abc@gmail.com"
}
Amar nam mehedy, amar boyos 26, amar email abc@gmail.com, amar bou nai. 
*/


function printDetails(obj) {

    if (typeof obj !== 'object') {
        return 'please provide me a valid object'
    } else {
        const name = obj.name || 'nai'
        const age = obj.age || 'nai'
        const email = obj.email || 'nai'
        const bow = obj.bow || 'nai'

        const sentence = `Amar nam ${name}, amar boyos ${age}, amar email ${email}, amar bou ${bow}.`

        return sentence;
    }

}


const person = {
    name: "mehedy",
    age: 26,
    email: "abc@gmail.com"
}


console.log(printDetails(person));