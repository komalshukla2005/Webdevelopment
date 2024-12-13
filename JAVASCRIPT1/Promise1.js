function EnterHotel() {
    return new Promise((resolve, reject) => {
        console.log("Welcome to our hotel. How can I help you?");
        resolve("Please wait, I am telling you your Room Number."); 
    });
}
function OrderFood() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let food = "kheer";
            if (food === "kheer") {
                console.log("Your Ordered Kheer. Please wait while we prepare it.");
                resolve("Kheer is being served."); 
            } else {
                console.log("Order something else, this item is unavailable.");
                reject("Food not available."); 
            }
        }, 7000);
    });
}
function EatingFood() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let yes = true;
            if (yes) {
                console.log("The food was very tasty. I liked it.");
                resolve("Finished eating."); 
            } else {
                console.log("I didn't get the food yet.");
                reject("Food not served yet.");
            }
        }, 5000);
    });
}
function EnjoyDay() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Let's dance and enjoy the day!");
            resolve("Dancing now..."); 
        }, 2000);
    });
}
function OrderCoffee() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("We are making the coffee...");
            resolve("Coffee is ready.");6
        }, 3000);
    });
}
function getCoffee() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("I am drinking the coffee.");
            resolve("Coffee finished."); 
        }, 6000);
    });
}
function DoPay() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let money = true;
            if (money) {
                console.log("Payment has been completed.");
                resolve("Payment successful."); 
            } else {
                console.log("Wash the dishes!");
                reject("Payment failed.");
            }
        }, 4000);
    });
}
function LeaveHotel() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Thank you very much. You can leave the hotel now.");
            resolve("Goodbye! Have a great day!"); 
        }, 1000);
    });
}
EnterHotel()
.then(()=>OrderFood())
.then(()=>EatingFood())
.then(()=>EnjoyDay())
.then(()=>OrderCoffee())
.then(()=>getCoffee())
.then(()=>DoPay())
.then(()=>LeaveHotel())
