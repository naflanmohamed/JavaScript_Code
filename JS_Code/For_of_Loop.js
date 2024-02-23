//For of Loop

let name = ['John', 'Ahamed', 'Kumar', 'Amal'];

//Usual Method
for(let i=0;i<name.length;i++){
    console.log(name[i]);
}

console.log("------------------");


for(let names of name){
    console.log(names);
}