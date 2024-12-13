// 1//. Object ko String mein Convert Karna
// const person={
//     name:"Komal",
//     age:18,
//     city:"Bangalore"
// }
// const MakePersonObjectToString=JSON.stringify(person)

// console.log(MakePersonObjectToString)

// 2. // String ko Object mein Convert Karna

// const personString='{"name":"Komal", "country":"India","Color":"Green"}';

// const StringToObject=JSON.parse(personString)

// console.log(StringToObject)


3 //what is the prototype in Object
// JavaScript mein prototype ek special object hota hai jo har object ko properties aur methods provide karta hai. Jab aap kisi object ki property ko access karte ho aur wo us object mein nahi milti, toh JavaScript us object ke prototype ko check karta hai aur agar wahan wo property milti hai toh use access kar leta hai. 


4// 10 question solve kro

// const PersonData={
//     name:"Virat",
//     age:36
// };
// PersonData.__proto__.introduce=function(){
//     console.log(`Hello guys my name is ${this.name} and my age is ${this.age}`)
// }
// PersonData.introduce()


// const car={
//     brand:"Odi",
//     model:"new XL"
// }

// car.__proto__.getDetails=function(){
//     console.log(`The Brand is ${this.brand} and the model is ${this.model}`)
// }

// const myCar=Object.create(car)
// myCar.getDetails()



// const animal={
//     makeSound(){
//         console.log("Animal makes a sound")
//     }
// };

// const dog=Object.create(animal)
// dog.__proto__.bark=function(){
//     console.log("Woof ! Woof !!")
// }

// dog.makeSound()
// dog.bark()



// Create a constructor function Book with properties title and author. Add a method getBookDetails() to the prototype that returns a string like "Title: [title], Author: [author]".

// function Team(team1,team2,Run){
//     this.team1=team1;
//     this.team2=team2;
//     this.Run=Run
// }
// Team.prototype.Paly=function(){
//     return `${this.team1} played a match with ${this.team2} and made the Score ${this.Run}`
// }
// const Answer=new Team("RCB","MI",305)
// console.log(Answer.Paly())


// const student={
//     name:"Ram"
// }
// student.__proto__.getName=function(){
//     return `My name is ${this.name}`
// }
// console.log(student.getName())

const Greet={
    name:"Komal"
}
Greet.__proto__.sya=function(){
    return`Hello ${this.name} good morning baby`
}
console.log(Greet.sya())


const WildAnimal={
    makeSound(){
        console.log("Wide animal make very Sound!!!!!!!!!")
    }
}
WildAnimal.__proto__.Eat=function(){
    console.log("They also eat the meat and grass")
}

WildAnimal.makeSound()
WildAnimal.Eat()


function FullName(Fname,Lname){
    this.Fname=Fname;
    this.Lname=Lname;
}
FullName.prototype.ans=function(){
    return `My full name is  ${this.Fname} ${this.Lname}`
}
const show=new FullName("Komal","Shukla")
console.log(show.ans())




const vehicle={
    type:"For the Student"
}
vehicle.__proto__.discription=function(){
    return `This is the only  ${this.type}`
}

console.log(vehicle.discription())


function Student(Fname,Grade){
    this.Fname=Fname;
    this.Grade=Grade
}
Student.prototype.discrption=function(){    return `My name is ${this.Fname} and my Grade is ${this.Grade}`
}

let ans=new Student("Komal shukla ", "A++")
console.log(ans.discrption())


