// // JavaScript mein object ek data structure hota hai jo key-value pairs ko store karta hai. Har key ek unique identifier hota hai, aur har key ko ek value assign ki jaati hai, jo kisi bhi data type ki ho sakti hai (number, string, array, aur dusre objects bhi).

// // In object we used the for In Loop ---
// let person={
//     name:"Komal",
//     age:18,
//     work:"Student"
// }
// // console.log(person)
// // console.log(person.name)

// person.city="Mohammadi"
// console.log(person)

// for(const key in person){
//     console.log(key + "  is " +  person[key])

// }


// 1// Properties (Keys):
// // Ye object ka unique identifier hota hai. Ye string type hota hai aur ye object ke andar kisi value ko refer karta hai.
// // Example: name, age, work.

// 2// Values:
// // Ye properties ko represent karte hain. Values kisi bhi data type ki ho sakti hain, jaise number, string, array, boolean, function, ya doosre objects.
// // Example: "Komal", 18, true.

// 3// Methods:
// // Object ke andar aap functions bhi store kar sakte hain. Jab function kisi object ke andar hota hai, to usse method kaha jaata hai. Example
// const sayHello={
//     name:"Komal",
//     city:"Delhi",
//     country:"India",
//     greet:function(){
//         console.log("Hello " + this.name + " Welcome To " + this.country)
//     }
// }
// sayHello.greet()



// 4//Nested Objects:
// // Object ke andar dusre objects bhi ho sakte hain. Isse complex data structures ko handle kiya jaa sakta hai.
// // Example:

// let person1={
//     name:"Virat",
//     age:35,
//     work:"Cricketer",
//     address:{
//         city:"Delhi",
//         country:"India",
//         team:"RCB"
//     }
// }
// console.log(person1.address.team)
// for(const key in person1){
//     console.log(key , person1[key])
// }




// 5// JavaScript Object Properties
// // here is am using the get method for getting the value of the oject..
// let Welcome={
//     Fname:"King",
//     Lname:"Kholi",
//     TeamCity:"Bangalore",

//     get Data(){
//         return "My name is " + this.Fname  + " " + this.Lname + " my  Team city is " +  this.TeamCity
//     }   
// }
// console.log(Welcome.Data)

// let India={
//     team1:"New ZeLand",
//     team2:"West Indez",
//     team3:"Austrlia",

//     set Winner(team){
//         this.team3=team
//     }
// }

// India.Winner="India"
// console.log(India.team3)




const Car={
    name:"Thar",
    Price:150000,
    Speed:'155 km/h',

    get SpeedOfCar(){
        return`The Speed of the Car is ${this.Speed}`
    },

    set SpeedOfCar(Speed){
        if(Speed > 0){
            this.Speed= `${Speed} Km/h`;
        }else{
            this.Speed=`0 Km/h`
        }
    }
}
Car.SpeedOfCar=190
console.log(Car.SpeedOfCar);


// 1. Bank Account Object

const Bank={
    BName:"IndianBank",
    Branch:"Lucknow",
    Balance:15,

    get BalanceTotal(){
        return `The Total Balance is that : ${this.Balance} ₹`
    },
    set BalanceTotal(deposit){
        if(deposit>0){
            this.Balance=this.Balance+ deposit;
        }else{
            this.Balance=0
        }
    }
}
Bank.BalanceTotal=-1;
console.log(Bank.Balance)


// 2. Rectangle Object
const Rectangle={
    width:5,
    length:10,
    get area(){
        return "The area is " +  this.length *this.width
    },

    set dimensions({width,length}){
        if(width>0 && length>0){
            this.width=width,
            this.length=length;
        }else{
            console.log("The width and length is invalid so we can't do the process")
        }

    }
}
Rectangle.dimensions={
    width:4,
    length:5
}
console.log(Rectangle.area)
Rectangle.dimensions={
    width:-4,
    length:-5
}


// 4 Student Grades
 const student={
    grades:[10,20,30,40,50],
    get avg(){
        let sum=0
        for(let i=0;i<this.grades.length;i++){
            sum+=this.grades[i]
        }
        return Math.floor(sum/ this.grades.length);
    },

    set AddNumber(num){
        if(num>0 && num<=100){
            this.grades.push(num)
        }else{
            console.log("You Number should be between 0 to 100 ")
        }
    }
}
student.AddNumber=60;
console.log(student.avg)



// 5. Product Inventory

const Product={
    stokes:[
        Clothes=1,
        Food=2,
        Makeup=3,
        Tea=4,
        ColdDrink=5
    ],
    get TotalStock(){
        let TotalStocks=this.stokes.length
        let sum=0
        for(let i=0;i<this.stokes.length;i++){
            sum+=this.stokes[i]
        }        
        return `The Total stokes is ${TotalStocks} and the Total sum of the Values is that : ${sum}`;
    },

    set Change(n){
        if(n>0){
            this.stokes[1]=n;
        }else{
            console.log("The value  is negative ....")
        }
    }
}
Product.Change=9
console.log(Product.TotalStock)



