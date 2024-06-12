const user = {
    userName : "Hitesh Mehta",
    age : 19,
    welcomeMessage : function(){
        console.log(`Welcome ${this.userName}`)
        console.log(this)
    }
}
user.welcomeMessage();
user.userName = "Pooja"
user.welcomeMessage();
console.log(this); //this refers to the node environment
//if the above statement is logged in a browser, the global event is window object, this refers to window object

// function chai(){
//     let userName = "hitesh"
//     console.log(this.userName) //returns undefined 
// }
// chai()

// //same can be defined as 
// const chai = function(){
//     let userName = "hitesh"
//     console.log(this.userName) //returns undefined
// }
// chai()



//Arrow functions:same way to write a function
const chai = () => {
    let userName = "hitesh"
    console.log(this.userName) //returns undefined
}
chai()

const addTwo = (num1,num2) =>{
    return num1+num2;
}
console.log(addTwo(1,2))

//the same function can be written in one line implicit return function
//const addTwo = (num1,num2) => (num1+num2)

