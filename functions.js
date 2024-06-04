function funcName(){
    //function definition
    console.log("Hello World")
}

// funcName() //execution or reference

function add(num1,num2=4){ //by default the value of num2 is saved as 4
    return (num1+num2)
}
console.log(add(1,2))
const result = add('Hitesh')
console.log(result, typeof result)

function user(username){
    let result = (!username)? ("enter the username"): (`${username} just logged in`)
    return result
};

console.log(user())


function calculateCartPrice(va1l, val2, ...num1){
    return num1 //returns an array 
}

//if more than one parameters can be expected, we'll use the '...' rest operator that says the given input is in a spreaded bundle but use it after wrapping

console.log(calculateCartPrice(200))
console.log(calculateCartPrice(200,300,400,600))


