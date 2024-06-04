//constructor method creates singleton objects that is one of its kind
const mySymbol = Symbol("key")
//literal objects
const user = {
    name:"Hitesh",
    age:19,
    [mySymbol]:"hehe", //using a symbol
    location:"Delhi",
    email:"hteshpooja@gmail.com",
    isLoggedIn:false,
    lastLoginDays : ["Monday","Thursday"]
}
console.log(user.email);
console.log(user['email']);
console.log(user[mySymbol]);

//changing the data
user.name = "Hitesh Mehta"
console.log(user)

// Object.freeze(user) //freezes any changes 
// user.name = "Pooja Mehta"
// console.log("changed array",user)

user.greeting = function(){
    console.log(`Namaste, ${this.name}!`)
}
user.greeting()
console.log(user.greeting)

//a sample usage for the ternary operator
let num = 1;
num>0 ? console.log("yes"):console.log("no")


//obj merging
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
const obj3 = {obj1,obj2}
console.log(obj3)//this aint right
const obj4 = Object.assign({},obj1,obj2)
console.log(obj4)
//or
console.log({...obj1,...obj2})

//the below both functions return arrays
console.log(Object.keys(obj1))
console.log(Object.values(obj1))

console.log(obj1.hasOwnProperty(1))

const course = {
    courseName : "javascript tutorial",
    coursePrice : 999,
    courseInstructor : "Hitesh"
}

//Object destructuring
const {courseInstructor : Instructor} = course //extracts the value course.courseInstructor
console.log(Instructor)

//this is a sample JSON
// {
//     "name":"Hitesh",
//     "courseName" : "Js in hindi",
//     "coursePrice" : "999"
// };

//API can be in the form of an array of objects