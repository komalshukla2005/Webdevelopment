// function Person(name,age){
//     this.name=name;
//     this.age=age
// }
// Person.prototype.Increase=function(){
//     this.age+=1
// }
// const person1=Object.create(Person.prototype);
// person1.name="Komal";
// person1.age=18;
// console.log(`Before increasing age ${person1.age}`)
// person1.Increase()
// console.log(`After increasing age ${person1.age}`)


// function Rectangle(length,width){
//     this.length=length;
//     this.width=width;
// }

// Rectangle.prototype.area=function(){
//     return this.length * this.width;
// }

// Rectangle.prototype.perimeter=function(){
//     return 2*(this.length + this.width);
// }

// const ans=new Rectangle(2,4)

// console.log(ans.area())
// console.log(ans.perimeter())



// function car(make,model,year){
//     this.make=make;
//     this.model=model;
//     this.year=year;
// }
// car.prototype.getCarInfo=function(){
//     return `make : ${this.make} and Model : ${this.model} and Year : ${this.year}`;
// }
// const myCar=new car("Maruti","BestXX","2002")
// console.log(myCar.getCarInfo())


function BankAccount(balance,accountNumber){
    this.balance=balance;
    this.accountNumber=accountNumber;
}
BankAccount.prototype.AddMoney=function(amount){
    this.balance+=amount;    
}
BankAccount.prototype.withdraw=function(amount){
    if(this.balance>=amount){
        this.balance-=amount
    }else{
        console.log("No sufficient Money")
    }
}
BankAccount.prototype.getBalance=function(){
    return this.balance;
}
const myAccount=new BankAccount(1000,'123456')
console.log(myAccount.getBalance())
myAccount.AddMoney(500)
console.log(myAccount.getBalance())
myAccount.withdraw(3000)





