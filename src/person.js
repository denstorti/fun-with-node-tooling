class Person{
   constructor(name, birthYear){
      this.name = name;
      this.birthYear = birthYear;
   }

   sayName(){
         return new Promise((resolve, reject) => {
            console.log(`My name is ${this.name}`);
            resolve(`My name is ${this.name}`);
         });
   };
};

module.exports = Person;