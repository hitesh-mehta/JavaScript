for(let i=0;i<10;i++){
    console.log(i)
}

let arr = [1,2,3,4,5]
for(let i of arr){ //higher order loops
    console.log(i)
}

//Maps - objects which remember the insertion order
const map = new Map();
console.log(map)
map.set("Name","Hitesh")
// map.set("Name","Mehta")
map.set("age",19)
console.log(map,map.get("Name"),map.size,map.keys(),map.values())
//loops over maps
for(let [key,value]of map){
    console.log(key+":"+value)
}
console.log(typeof(map))

//for of loop over object
const games = {
    "game1":"Cricket",
    "game2":"Badminton",
}

// for(let [key,value] of games){ //object is not iterable
//     console.log(key+":"+value)
// }

//for in loops is used for objects
for(let key in games){
    console.log(key+":"+games[key])
}

let array = [43,54,2,57,21];
for(let i in array){
    console.log(i) //returns the indices of the arrays 
}
for(let i in array){
    console.log(array[i]) 
}

//for in over maps cannot be used

//Overview: for of in maps and arrays, for in loops for objects and arrays

array = [43,54,2,57,21];
console.log("---------------------------------")
array.forEach(function (item){ //name has to be absent here 
    console.log(item)
    })
    
//or
console.log("---------------------------------")
array.forEach((item)=>{
    console.log(item)
})
