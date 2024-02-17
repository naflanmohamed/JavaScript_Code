//timer is used to calculate the time taken by a code to execute

console.time('Your code took'); //start the timer

for(let i = 0; i < 10; i++){
    console.log(i);
}

console.timeEnd('Your code took');  //end the timer