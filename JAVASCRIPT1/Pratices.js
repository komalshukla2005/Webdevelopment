// Check Pelimdrome
function isPelimdrome(str){
    const rev=str.split('').reverse().join('')
    return rev===str;
}
console.log(isPelimdrome("MooM"))
console.log(isPelimdrome("papaya"))



// Question: First n Fibonacci numbers print karo.

function feb(num){
    let x=0
    let y=0
    let z=1
    let i=0
    while(i<5){
        x=y
        console.log(y)
        y=z
        z=x+y
        i++;
    }
}
feb(5)



// how to find the Large number from a array
function Large(arr){
    let l=arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>l){
            l=arr[i]
        }
    }
    console.log(l)
}
Large([12,34,176,56,78,90,])

//How to find the Small number from a Array
function Small(arr){
    let l=arr[0];
    for(let i=0;i<arr.length;i++){
        if(l>arr[i]){
            l=arr[i]
        }
    }
    console.log(l)
}
Small([12,34,176,56,78,90,])


// Question: Ek string ko bina built-in method ke reverse karo.

function ReverseString(str){
    let rev=''
    for(let i=str.length-1;i>=0;i--){
        rev+=str[i]
    }
    return rev;
}
console.log(ReverseString("Hello"))


// 5. Remove Duplicates from an Array
function RemoveDuplicates(array){
    for(let i=0;i<array.length;i++){
        for(let j=i+1;j<array.length;j++){
            if(array[i]===array[j]){
                array.splice(j,1)
            }
        }
    }
    return array;
}
console.log(RemoveDuplicates([12,34,2,12,45,67,23,34,90,46,12]))


// 6. Sum of All Numbers in an Array
function Sum(array){
    return array.reduce((Store,n)=>Store+n,0)
}
console.log(Sum([1,2,3,4]))

function Sum1(array){
    let sum=0
    for(let i=0;i<array.length;i++){
        sum+=array[i]
    }
    return sum;
}
console.log(Sum1([5,4,3]))

// 7. Factorial of a Number


function Fec(num){
    let ans=1
    while(num>0){
        ans*=num
        num=num-1;
    }
    console.log(ans)
}
Fec(5)


// how to sort the String 

let str='LAMP';
let doSplit=str.split('')
for(let i=0;i<doSplit.length;i++){
    for(let j=0;j<doSplit.length-i-1;j++){
        if(doSplit[j]>doSplit[j+1]){
            let temp=doSplit[j]
            doSplit[j]=doSplit[j+1]
            doSplit[j+1]=temp;
        }
    }
}
const StringWord=doSplit.join('')
console.log(StringWord)


// 8. Check for Anagram
function isAnagram(str1,str2){
    const format=(val)=>val.toLowerCase().split('').sort().join('')
    return format(str1)===format(str2)
}
console.log(isAnagram("listen","silent"))
console.log(isAnagram("Papaya","Mamaya"))



// 9. Print Prime Numbers Between 1 and n
function PrimeNumber(num){
    let i=1
    while(i<=num){
        let j=1
        let prime=0
        while(j<=i){
            if(i%j==0){
                prime+=1
            }
            j++
        }
        if(prime==2){
            console.log(i)
        }
        i++;
    }
}
PrimeNumber(15)


// 11. Find one  Missing Number in an Array
function findMissingNumber(arr,num){
    let value=(num*(num+1)) / 2
    let sum=0
    for(let i=0;i<arr.length;i++){
        sum+=arr[i]
    }
    let MissingNumber=value-sum;
    return MissingNumber;
}
console.log(findMissingNumber([1,2,3,4,5,6,7,9],9))


// How to find the many missing numbers
function MissingNumbers(array,num){
    let missingN=[]
    for(let i=1;i<=num;i++){
        if(!array.includes(i)){
            missingN.push(i)
        }
    }
    return missingN;
}
console.log(MissingNumbers([1,2,3,4,6,8,14,18,25],25))





let numbers=[14,56,12,3,5,8,11,1,2]
for(let i=0;i<numbers.length;i++){
    for(let j=0;j<numbers.length-i-1;j++){
        if(numbers[j]>numbers[j+1]){
            let temp=numbers[j]
            numbers[j]=numbers[j+1]
            numbers[j+1]=temp
        }
    }
}

console.log(numbers)