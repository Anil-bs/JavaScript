// Loops in Java Script

//For Loop

for(let number = 1; number <= 10; number++){
    console.log(`Number is -${number}`)
}

console.log("-----------------------")

// for .. of loop
let arr = [1,5,32];
for(let a of arr){
    console.log(a)
}
console.log("-----------------------")

// for each loop
  arr.forEach(item => console.log(item));

  //whille loop
   let z = 0;
   while(z<=5){
    console.log(`value is ${z}`)
    z++;
   }
   console.log("-----------------------")
   
   // DO while Loop
   let i = 65;
   do{
    console.log(`value is ${String.fromCharCode(i)}`) ;
    i++;
   }while(i<=70);