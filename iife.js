//Immediately Invoked Function Expressions (IIFE) are those functions which are immediately called upon execution and are used to remove any pollution due to global scope
//syntax : (definition)(//used for function call)

(function sayHi(){
    console.log("Hello there!")
})(); //always use ; for the end of execution

(()=>{
    console.log("Meow");
})();

//parameterized function
((name)=>{
    console.log(`Hello ${name}`);
})("Hitesh");