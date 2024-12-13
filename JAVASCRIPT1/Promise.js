// // what is Promise in JavaScript
// // JavaScript mein Promise ek object hai jo asynchronous operations ko handle karne ke liye use hota hai. Iska kaam hai future value ya result ko represent karna, jo ki abhi available nahi hai, lekin kuch time baad milega (jaise asynchronous task complete hone ke baad).


// 2//Promise ke states:
// // Pending: Jab promise create hota hai aur abhi tak complete nahi hua.
// // Fulfilled: Jab asynchronous operation successfully complete hota hai aur result milta hai.
// // Rejected: Jab asynchronous operation fail ho jata hai aur error milti hai. 

// 3//Promise ke methods:
// // .then(): Fulfilled state mein result handle karta hai.
// // .catch(): Rejected state mein error handle karta hai.
// // .finally(): Chahe promise fulfilled ho ya rejected, isko hamesha run kiya jata hai. 


// 4//how to create Promise

// let promise=new Promise((resolve,reject)=>{
//     let success=true;
//     if(success){
//         resolve("Operation successful")
//     }else{
//         reject("Operation failed")
//     }
// });
// promise
// .then((ans)=>{
//     console.log("Your Answer is : ",ans)

// })
// .catch((error)=>{
//     console.log("The Error is :" , error)
// })


// let myPromise=new Promise((resolve ,reject)=>{
//     let randomNumber=Math.random();
//     if(randomNumber>0.5){
//         resolve(`Success ! Number is ${randomNumber}`)
//     }else{
//         reject(`Failure !  Number is ${randomNumber}`)
//     }
// })
// myPromise.then((ans)=>{
//     console.log("Your Answer is this :",ans)
// }).catch((error)=>{
//     console.log("This is your Error :",error)
// })

// 2// Task 2: Delay in Promise Execution

// let promise2=new Promise((resolve)=>{
//     setTimeout(()=>{
//         resolve("Promise Resolved  after 3 seconds")
//     },3000)
// });

// promise2.then((ans)=>{
//     console.log("Answer",ans)
// })

// // Task 4: Chaining Promises
// let promise3= new Promise((resolve)=>{
//     resolve(5)
// })
// promise3.then((num)=>num*2)
// .then((num)=>num+10)
// .then((num)=>console.log("Final Result :",num))

// Task 5: Handle Multiple Promises

// let promise4=Promise.resolve("Promise 4 is resolved");
// let promise5=Promise.resolve("Promise 5 is resolved");

// Promise.all([promise4,promise5]).then((ans)=>console.log(ans))


// ATM Simulation Code

function enterCard() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("ATM : Please Enter your Card");
            resolve();
        }, 2000)
    })
}

function enterPin() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("ATM: Please Enter your PIN")
            resolve();
        }, 3000)
    })
}

function chooseTransaction() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("ATM : What would you like to do ? Withdraw or Deposit ? ");
            resolve();
        }, 1000)
    })
}

function handleTransaction(option) {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (option === "withdraw") {
                console.log("ATM: You chose to withdraw money. Processing...");
                resolve("Transaction successful!");
            } else if (option === "deposit") {
                console.log("ATM: You chose to deposit money. Processing...");
                resolve("Transaction successful!");
            } else {
                console.log("ATM: Invalid option selected.");
                resolve("Transaction failed.");
            }
        }, 2000)
    })
}

function LeaveATM() {
    return new Promise((resolve) => {
        setTimeout(() => { // Optional delay for realism
            console.log("ATM: Thank you very much. You can leave the ATM now.");
            resolve("Goodbye! Have a great day!"); 
        }, 1000);
    });
}

enterCard()
  .then(() => enterPin())
  .then(() => chooseTransaction())
  .then(() => handleTransaction("withdraw"))
  .then(() => LeaveATM()) 
  .then((message) => console.log(message)) 
  .catch((error) => console.log("Error:", error));





