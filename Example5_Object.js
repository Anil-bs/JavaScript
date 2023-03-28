// Objects in JS

const person = {
    Fname : "Anil",
    Lname : "Kumar",
    Age : 24,
    Location : "Karnataka" 
};


console.log(person);        //{ Fname: 'Anil', Lname: 'Kumar', Age: 24, Location: 'Karnataka' }

// we can access Object Properties in 2 ways 

console.log(person.Location);    //or             Karnataka
console.log(person["Location"]);                //Karnataka


// Object Function
const person1 = {
    Fname : "Anil",
    Lname : "Kumar",
    Age : 24,
    Location : "Karnataka",
    FullName : function(){
        return this.Fname+ "  "+this.Lname;
    } 
};

console.log(person1.FullName());     //Accessing Obj Method      //Anil  Kumar