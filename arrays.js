const myArr = [1,2,3,4,5,6,7,"Hitesh"] //just like python lists
//adding an element
let arr = new Array(1,2,3)
myArr.push(8,9);
console.log(myArr,arr)
myArr.pop()
console.log(myArr)
myArr.unshift(-1) //adds to the zeroth index
console.log(myArr)
myArr.shift()//deletes the first element
console.log(myArr)
console.log(myArr.includes(1))
console.log(myArr.indexOf(0)) //returns -1 if doesnt exist
arr = myArr.join()
console.log(arr,typeof arr)

//slice(a,b) and splice(a,b)
//slice takes the elements from a to b-1 and orign array stays as it is
//splice takes elements from a to b and removes that subarray from the orig arr
console.log(myArr.slice(1,4),myArr)
console.log(myArr.splice(1,4),myArr)

let arr1 = [1,2,3]
let arr2 = ['a','b','c']
let arr3 = arr1.concat(arr2)
console.log(arr3) //doesnt change any of the arrays 
//even the following spread method gives the same result
arr3 = [...arr1, ...arr2]
console.log(arr3)

let arr4 = [1,2,3,4,[5,6,7,8],[9,[10,11]]]
console.log(arr4.flat(Infinity)) //flattens the array

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh")) //converts into array
console.log(Array.from({
    name:'Hitesh' //returns an interesting output
}))

console.log(Array.of(1,2,3,4)) //creates an array
