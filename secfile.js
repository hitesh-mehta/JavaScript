// //Numbers and Maths in JS
// const num = new Number(2231234.5) //this is of type object
// console.log(num, typeof num)
// console.log(num.toString())
// console.log(num.toFixed(2)) //decides the precision value
// console.log(num.toPrecision(3)) //rounds of to give parameter no. of digits
// console.log(num.toLocaleString('en-In'))
// console.log(Number.MAX_VALUE)
// console.log(Number.MIN_VALUE)


// //--------------- Math Library ---------------
// console.log(Math)
// console.log(Math.PI)
// console.log(Math.abs(-2.432))
// console.log(Math.round(2424.455))
// console.log(Math.ceil(2424.455))
// console.log(Math.floor(2424.455))
// console.log(Math.log10(100.32))
// console.log(Math.min(1,2,3,4,5,-1))


// console.log(Math.random()) //generates numbers in the range  [0,1)
// //to generate the numbers in a range [min,max]
// let min = 10, max =20;
// /*
// *10 generates numbers from [0,10)
// adding 1 generates numbers between [1,11)
// floor generates between [1,10]
// similarly, it can be used for max min cases
// Math.floor(Math.random() * (total no. in the range)) + min_number
// */

// console.log(Math.floor(Math.random()*(max-min+1))+min)

// //Dates
// const myDate = new Date()
// console.log(myDate,typeof myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString('en-In'))
// console.log(myDate.toLocaleString('en-In')) //'en-In' gives indian touch to values
// console.log(myDate.toLocaleTimeString('en-In'))

// let newDate = new Date(2023,0,3) //2023 is year, 0 stands for jan i.e. months starts with 0. 3 is for day
let newDate = new Date("04/23/2024") //mm-dd-yyyy
// let newDate = new Date(2024,3,28,12,8,56) //yyyy,mm,dd,hh,mm,ss
console.log(newDate.toLocaleString('en-In'))

let myTime = Date.now(); //gives the millisecond value from 1jan 1970 12:00am
console.log(myTime)
console.log(newDate.getTime())
console.log(newDate.getMonth()+1)
console.log(newDate.getDay())

console.log(newDate.toLocaleString('default',{
    weekday:'short',
    day:'2-digit'
}))