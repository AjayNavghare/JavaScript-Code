function myFunction()
{
    console.log("hey i am a function.....");
    
}

//myFunction()


function addNumbers(number1 ,number2)
{
    const result = number1 + number2;
    return result;
    console.log("hey can i execute");      //in JS once you write the return keyword then after no other statment are not printed 
    
} 

const result = addNumbers(2,4)

//console.log("result is: ", result);


function userDetails(username)
{
    if(username === undefined)
    {
        console.log("Please enter the name ");
        return
    }
    return `${username}  just logged in system`; 
    
}

userDetails()  //  if your using the return keyword in fucntion then this statment will not print.......       it is just refernece 

console.log(userDetails("Ajay"));  // this will print the function 



