



// use of try catch error
try {
    let a = 1;

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


