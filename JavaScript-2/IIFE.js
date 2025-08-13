// IIFE -->   Immediately Invoked Function Expression

(function two()
{
    console.log("this is two function");           // this is IIFE 
                    // this function is used to remove global variable polution and that why we use IIFE
})();

( (name) => {
    console.log(`this is three function ${name}`); //we can use with arrow function
    
})(' IIFE')
