// Question: Write a function to reverse a string.

// function reverseString(str){
//     return str.split('').reverse().join('');
// }

// console.log(reverseString("Hello"))



function reverse1(str){
    let reversed='';
    for(let i=str.length-1;i>=0;i--){
        reversed+=str[i];
        console.log(str[i])
    }
    return reversed;
}

console.log(reverse1("Komal"))