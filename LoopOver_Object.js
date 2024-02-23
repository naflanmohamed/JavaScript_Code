//Looping over an object

let teacher = {
    name: 'John',
    age: 30,
    subject: 'Science',
    department: 'Science',
};

let arr_keys = Object.keys(teacher);
  console.log(arr_keys);

let arr_values = Object.values(teacher);
    console.log(arr_values);

for(let i=0;i<arr_keys.length;i++){
    console.log(arr_keys[i] + ": " + arr_values[i]);
}