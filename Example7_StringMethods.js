// String  methods

//length
let x = "Hello World";
console.log(x.length);        // 11 returns number of chars

//UpperCase
console.log(x.toUpperCase())    //HELLO WORLD

//LowerCase
console.log(x.toLowerCase())    //hello world

//CahrAt
console.log(x.charAt(1))        //e

//CharCodeAt()
console.log(x.charCodeAt(0))    //72

// Slice
let y = "Apple, Banana, Kiwi";
console.log(y.slice(0,13))      //Apple, Banana

//substring
console.log(y.substring(7,13));     //Banana

//Substr
console.log(y.substr(7));        //Banana, Kiwi

//Cocatination
let f1 = "Hello ";
let f2 = "World";
console.log(f1.concat(f2))  //Hello World

//Replace
let str = "The cat was very cute.";
console.log(str.replace("cat", "Dog"))      //The Dog was very cute.      cat is replaced with dog

//Repalce All
let str1 = "The cat was very cute, cat are pet animals.";
console.log(str1.replaceAll("cat" , "Dogs"))                //The Dogs was very cute, Dogs are pet animals.

//Trim 
let str2 = "   Hello World      ";
console.log(str2.trim())                //Hello World           removes whitespaces  both end
//TrimStart
console.log(str2.trimStart())           //Hello World     removes whitespaces form start side
//TrimEnd
console.log(str2.trimEnd())             //   Hello World     removes whitespaces form end side

//PadStart
let s = "5";
console.log(s.padStart(4,"0"))          //0005  starting adds 3'0 to string s
//PadEnd
console.log(s.padEnd(4,"0"))          //5000   adds 3'0 to end of string s