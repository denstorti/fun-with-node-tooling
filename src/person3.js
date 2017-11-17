function Person(name, age){
   this.name = name;
   this.age = age;

   this.speak = function(message){
      console.log(this.name + " says: " + message);
   },
   this.walk = function(direction){
      console.log("Walking " + direction);
   },
   this.getOld = function(years){
      this.age += years || 1;
      console.log(this.name + " got old: " + this.age);
   }
};

const robert = new Person("Robert", 37);
robert.speak("Hello");

const mary = new Person("Mary", 26);
mary.speak("Hello");

function Firefighter(name, age){
   Person.call(this, name, age);
   this.fightFire = function () {
      console.log(this.name + " is fighting the fire!!!!");
   }
}
Firefighter.prototype = Person.prototype;  //if we change the firefighter prototype, it will change Person's too. Reference assignment here.
//OR
//Firefighter.prototype = new Person();

const fighter = new Firefighter("John", 32);
fighter.speak("Hello");
fighter.fightFire();
//mary.fightFire();     //TypeError: mary.fightFire is not a function

module.exports = Person;
