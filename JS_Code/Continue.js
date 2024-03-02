// Continue Statment will not print particular condition

for(let i=0;i<=10;i++){
    
    if(i==6){
        continue;
    }
    console.log(i);
}

console.log("------------------");

console.log("Even Numbers:");
for(let i=0;i<=10;i++){
    
    if(i%2 == 1){
        continue;
    }
    console.log(i);
}