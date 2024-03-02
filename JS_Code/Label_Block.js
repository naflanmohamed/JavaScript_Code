let names = [
    ["John", "Doe", "Jome"],
    ["Daniel", "Jane", "Paris"],
    ["Jim", "Smith", "Joe"],
];

for(let group of names){
    console.log(group);
}

console.log("-------------------");

for(let group of names){
    for(let member of group){
        console.log(member);
    }
}

console.log("-------------------");

console.log("Names starting with J: ");
for(let group of names){
    
    for(let member of group){
        if(member.startsWith('J')){
            console.log(member);
        }
    }
}

console.log("-------------------");

console.log("Names starting with J in the first: ");
for(let group of names){
    inner:
    for(let member of group){
        if(member.startsWith('J')){
            console.log(member);
            break inner;
        }
    }
}