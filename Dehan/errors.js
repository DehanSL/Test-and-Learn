



// use of try catch error
let a = 1;
try {

a.toUpperCase();
} catch (error) {
   if (error instanceof TypeError) {
        console.log("This is a type error")
   }
   else if (error instanceof ReferenceError) {
    console.log("This is a refference error")
   }

   else{
    console.log("This is a unknown error")
   }
}



// create a custom error

 customError = () => { 
    throw new Error ("error")
 }

try {
  
    customError()
 } catch (error) {
    
    console.log(error)
 }
