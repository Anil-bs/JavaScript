// Array Loopings

const car = ["KIA", "BMW", "VOLVO"];

function print(value){
    console.log(value);
}

car.forEach(print);
console.log("------------");

with(car){
    forEach(print);
}
console.log("------------");

for(var i=0; i<car.length;i++){
    console.log(car[i]);
}