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

function Firefighter(name, age){
   Person.call(this, name, age);
   this.fightFire = function () {
      console.log(this.name + " is fighting the fire!!!!");
   }
}

function inherits(son, father){
   function P(){};
   P.prototype = father.prototype;
   son.prototype = new P();
}

inherits(Firefighter, Person);

const fighter = new Firefighter("John", 32);
fighter.speak("Hello");
fighter.fightFire();

module.exports = Person;