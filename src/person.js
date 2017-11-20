class Person{
   constructor(name, birthYear){
      this.name = name;
      this.birthYear = birthYear;
   }

   sayName(){
         console.log(arguments);

         return new Promise((resolve, reject) => {
            debugger;
            console.log(`My name is ${this.name} and I am ${new Date().getFullYear() - this.birthYear}`);
            resolve(`My name is ${this.name}`);
         });
   };
};

module.exports = Person;

var person = new Person('Denis', 1989);
person.sayName('denis', 323, 'ala');

console.log(this);

function add() {
   var counter = 0;
   function plus() {counter += 1;}
   plus();
   return counter;
}