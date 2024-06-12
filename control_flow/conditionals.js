const temp = 50;
if(temp>=45){
    console.log("Too hot")
};

const st = "2";
if(st===2){
    console.log("hehe")
}else if (st==2){
    console.log("meow")
}
else{
    console.log("bhow")
}

switch(temp){
    case 40: 
        console.log("meow")
        break;
    case 50: 
        console.log("bhow")
        break;
    case 55: 
        console.log("neigh")
        break;
    default:
        console.log("buzz")
    
}

//Nullish Coalescing Operator(??) : for null, undefined functions; the first non-null and non-undefined value is assigned

const val1 = null??10;
const val2 = 20 ?? undefined
const val3 = 20 ??10 ?? undefined
console.log(val1,val2,val3)

//Ternary operator : (condition)?do this : else this
val1>10 ? console.log("less"):console.log("great")