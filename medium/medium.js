// Write a function that would allow you to do this:

// var sharePizza = cutPizzaSlices(8);

// console.log(sharePizza(2));                                                                                                                                                                    

//   // prints "Each person gets 4.00 slices of pizza"

// console.log(sharePizza(3)); 

//   // prints "Each person gets 2.67 slices of pizza"

//function that divides the slices of pizza by the number of people 


function cutPizzaSlices(x){
    return (y) => x / y;
}

var callAnonFunc = cutPizzaSlices(8);

console.log(`Each person gets ${callAnonFunc(2)} slices of pizza!`)

console.log(`Each person gets ${callAnonFunc(3).toFixed(2)} slices of pizza!`)





//// recurrsion, callbacks, closures


function cutPizzaSlices(x){
    return (y) => console.log(`Each person gets ${(x / y).toFixed(2)} slices of pizza!`);
}

var sharePizza = cutPizzaSlices(8);

sharePizza(2) 

sharePizza(3);
