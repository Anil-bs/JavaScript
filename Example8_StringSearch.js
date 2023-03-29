// String Search Methods

//indexOf()
let text = "please locate where locate accurs!";
console.log(text.indexOf("locate"));                                        // 7 index number

//LastIndexOf()
console.log(text.lastIndexOf("locate")); 

// Serach()
console.log(text.search("locate"))                  //7

/*//Match()
let txt =  "The rain in SPAIN stays mainly in the plain";
const myArr = text.match("ain");
console.log(myArr);

// MatchAll()
let txt1 = "The cat was so good. cats was beautiful";
const myArr1 = text.matchAll("cat");
console.log(myArr1)*/

//Include()
let txt2 = "Hello world";
console.log(txt2.includes("world"));                    //true

//Startswith()
console.log(txt2.startsWith('H'));              //true

//EndsWith()
console.log(txt2.endsWith('H'));              //false
console.log(txt2.endsWith('d'));            //true
