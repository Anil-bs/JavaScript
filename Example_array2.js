//Array Example 2

const car = ["KIA", "BMW", "VOLVO"];

function print(value){
    return value.toLowerCase();
}

var res = car.map(print);
console.log(res)                    //[ 'kia', 'bmw', 'volvo' ]