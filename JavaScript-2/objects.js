const jsUsers = {
    name: "Ajay",
    age:21,
    email:"ajay@gmail.com",
    location: "Pune",

}

//console.log(jsUsers.email);
//console.log(jsUsers["email"]);

jsUsers.email = "akshay@gmail.com";
//Object.freeze(jsUsers);  //is used to make an object read-only. 
                         // You cannot add, change, or delete properties after freezing.
jsUsers.email = "pratap@gmail.com";

//console.log(jsUsers);

jsUsers.greatting = function()
{
    console.log("helloo");
}

jsUsers.greattingTwo = function()
{
    console.log(`hii, ${this.name}`);
}

console.log(jsUsers.greatting());
console.log(jsUsers.greattingTwo());



