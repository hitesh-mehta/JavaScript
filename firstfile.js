// console.log("Hitesh");

//Variables
const fullName = "Hitesh Mehta";
//these are constants and cannot be changed 
let accNum = 1234;
var accId = "2039a";
/*prefer not to use var because it doesn't provide any variable scope*/
phoneNum = 1234567890; //this is also allowed
let number; //stays undefined
console.log(fullName);
console.table([accNum,accId,phoneNum,number])
// fullName="abhay"; this is not allowed


"use strict"; //treat all JS code as newer version
// alert("hello"); //cannot be used in nodejs directly, but can be used over browser

console.log(2+3,3+4);

//JS standards are written and specified by ECMA  tc39.es and MDN


//Datatypes - Primitive 
let num = 10; // stores upto 2^53 and the others are stored in bigint
let bignum = 234567890987654321234567890987654321n;
let name = "Hitesh" //string
let isAdult = true;
let hehe = null;
let undef;
//symbol datatype is used for uniqueness
console.log(hehe,undef);
console.log(typeof(undef),typeof(hehe)); //null has the type object; //undefined has the type undefined 

//explicit typecasting
let st = "10"
let stNum = Number(st)
console.log(stNum);
/*
if the string is of the form let's say "hitesh" or "10a", the number formed is NaN ie not a number but it is of the type number
if it is boolean, true converts to 1 and false to 0
null converts to 0
undefined converts to NaN again */

isAdult = -1;
console.log(Boolean(isAdult));

/* 1/2/any non zero=> true
0 => false
"" -> false
"anything" -> true
*/

let someNumber = 12;
console.log(String(someNumber),"type = ",typeof(String(someNumber)));

//some important confusions
console.log("1"+2)
console.log("1"+2+2)
console.log(1+"2")
console.log(1+1+"2") 
console.log(1+true)

let ct=1, ct2 = 1;
console.log(ct++)
console.log(++ct2)

console.log("Comparisons:")
console.log("2">1)
console.log("-1">1)
console.log("1"==1)
console.log("1"===1)
 
/* >,< and == operators work differently in js*/
//check these out for surprise
console.log(null==0)
console.log(null>0)
console.log(null>=0)

console.log(undefined==0)
console.log(undefined>0)
console.log(undefined>=0)

const arr = [1,2,3,"hitesh"];
console.log(typeof arr, arr)
const myObject = {
    name:"hitesh",
    age:19
};
console.log(typeof myObject, myObject)

const myFunc = function(){
    console.log("meow");
}
console.log(typeof myFunc, myFunc)
const mySymbol = Symbol([1,2,3,4])
console.log(typeof mySymbol, mySymbol)



// +++++++++++++++++++++++++++++++++++++             MEMORY             +++++++++++++++++++++++++++++++++++++

/* Stack memory used for all primitive datatypes
whenever stack is used, the copy of the original is used
whenever heap is used, object is called by reference
*/
let num1 = 3;
let num2 = num1;
num2 = 8;
console.log(num1);

let arr1 = {
    name:"Hitesh",
    email:"hteshpooja@gmail.com"
}
let arr2 = arr1;
arr2.email = "hiteshpome@gmail.com"
console.log(arr2.email);
console.log(arr1.email);
console.log(arr1);

//String handling
name = "Hitesh Mehta"
console.log(`Hi, my name is ${name}`);
const Name = new String("Hitesh Mehta"); //creates an object string 
console.log(typeof Name) 

/*String functions*/
console.log(name[0])
console.log(Name[0])
console.log(Name.__proto__);
console.log(Name.length)
console.log(Name.toUpperCase())
console.log(Name.charAt(2))
console.log(Name.indexOf('t'))
console.log(Name.split(' '))
console.log(Name.substring(0,Name.indexOf(' '))) //last index doesn't get included, if negative is given, takes 0 instead
console.log(Name.slice(0,Name.indexOf(' '))) //last index doesn't get included and can include -ve values as well
console.log("    Hitesh     ".trimStart()+"Mehta")
console.log("    Hitesh     ".trimEnd()+"Mehta")
console.log("    Hitesh     ".trim()+"Mehta")

console.log(Name.replace('Mehta','Sood'))
console.log(Name.includes("Mehta"))
