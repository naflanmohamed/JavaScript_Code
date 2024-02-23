 let user = {
    name: "John",
    department: "Computer Science",
    rollno: "45CS11",
    age: 90,
 };

 for(let prop in user){
    console.log(prop + " : " + user[prop]);
 }