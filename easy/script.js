//easy 
//currying
function exercise(x){
    return () => (`Today's excersise is ${x}`);
}

let swimming = exercise(`Swimming`);
let running =  exercise(`Running`);

console.log(swimming());
console.log(running());



//////
//recursion 
function cntTo10 (x) {
    if(x < 10){
        console.log(`${x}`);//this logs the number
        cntTo10(x+1)//this adds 1 to the param. called 
    }
return //this just returns true (anon. return)
}

cntTo10(5);