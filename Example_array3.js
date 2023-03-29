// Array Methods

let car = ["Kia","Volvo","Bmw"];

console.log(car)        //[ 'Kia', 'Volvo', 'Bmw' ]

car.push("Honda")
console.log(car)        //[ 'Kia', 'Volvo', 'Bmw', 'Honda' ]

car.unshift("Benz");
console.log(car)            //[ 'Benz', 'Kia', 'Volvo', 'Bmw', 'Honda' ]

car.pop();
console.log(car)            //[ 'Benz', 'Kia', 'Volvo', 'Bmw' ]

car.shift();
console.log(car)            //[ 'Kia', 'Volvo', 'Bmw' ]

console.log(car.length)         //3

console.log(car instanceof Array);          //true
console.log(Array.isArray(car));            //true

// Accessing Last Index
console.log(car[car.length-1]);         //Bmw

// 1 toString()
car.push(4);
console.log(car)                    //[ 'Kia', 'Volvo', 'Bmw', 4 ]
console.log(car.toString())             //Kia,Volvo,Bmw,4       string form

// 2 Join()
console.log(car.join("-"))              //Kia-Volvo-Bmw-4

// 3 concat
let bike = ["R15", "Dio","Pulsar","yamaha","Activa"];
console.log(bike.concat(car))               //[ 'R15', 'Dio', 'Pulsar', 'Kia', 'Volvo', 'Bmw', 4 ]

// 4 Flat() -> Reduce Dimenssion of array
 var num = [[1,2],[3,4],[5,6,7]];
 console.log(num.flat())                    //[ 1, 2, 3, 4, 5, 6, 7  ]

 // 5 Splice() -> To add item to a perticular position
bike.splice(2,0,"Honda") ;
 console.log(bike)                          //[ 'R15', 'Dio', 'Honda', 'Pulsar' ]

 // for removing
 bike.splice(0,1) ;
 console.log(bike)                      //[ 'Dio', 'Honda', 'Pulsar' ]

// Slice() ->Pices of array & make new array
console.log(bike)                           //[ 'Dio', 'Honda', 'Pulsar', 'yamaha', 'Activa' ]
let v = bike.slice(1);
console.log(v)                                  //[ 'Honda', 'Pulsar', 'yamaha', 'Activa' ]
let v1 = bike.slice(1,3);
console.log(v1)                             //[ 'Honda', 'Pulsar' ]
    
   

