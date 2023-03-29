// If condition
const prompt = require("prompt-sync")();

let age = 60;

 if(age == 10){
    console.log(`your age is ${age}`);
 }


 //IF else 
 if(age >= 10){
    console.log(`your age is ${age}`);
 }
 else{
    console.log(`your age is ${age}`);
 }

 //if else if else

 if(age < 18){
    console.log(`your age is ${age}, its to young, you have no chance to take DL `);
 }
 else if(age > 60){
    console.log(`your age is ${age}, its to old, we dont provide you DL `);
 }
 else{
    console.log(`your age is ${age}, You are elgible to take DL `);
 }

