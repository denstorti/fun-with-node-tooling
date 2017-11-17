//hoisting

const obj = { prop: "alo"};
const badCopy = obj;
const trueCopy = JSON.parse(JSON.stringify(obj));

trueCopy.prop = "I am a true copy";
badCopy.prop ="I am just referencing obj";
obj.prop = "213";

console.log(obj);
console.log(trueCopy);
console.log(badCopy);

const name = "Denis";
console.log(name);
//console.log(email);  //undefined
//console.log(phone); //not defined
const email = "email@email.com";
console.log(email);  //undefined

const sayMyName = function (obj) {
   console.log("sayMyName: " + obj.prop);
}

sayMyName(obj);
sayMyName(trueCopy);
