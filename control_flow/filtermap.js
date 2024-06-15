// const arr = [23,253,14,6685,211];
// const val = arr.forEach((item)=>{ //callback function
//     console.log(item);
//     return item;
// });
// console.log(val) //returns undefined

const myNums = [1,2,3,4,5,6,7,8,9,10]
const num = myNums.filter((item)=>{
    if(item>4) return item;
}) //also a callback function


//remember ()=>() is implicit return and ()=>{} is explicit return
console.log(num)

const newNums = []
myNums.forEach((item)=>{
    if(item>4){
        newNums.push(item)
    }
})
console.log(newNums)



//map function
let ans = myNums.map((num)=>num+10); //also a callback function
console.log(ans) 

//using two-three or more methods together are called nums
ans = myNums.map(
    (num)=>num+10
).map(
    (num)=>num+1
); //first 10 is added and then 1 is done
console.log(ans) 
ans=myNums.map(
    (num)=>num+10
).filter(
    (num)=>num>15
)
console.log(ans)

let initial_val = 10; 
const variable = myNums.reduce(//usually used for shopping card websites
    (accumulator,currentValue)=>{
        console.log(`acc:${accumulator},currentValue:${currentValue}` )
        return accumulator+currentValue
    },
   initial_val
)

console.log(variable)
