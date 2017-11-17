class Person {

   constructor(name, age){
      this.name = name;
      this.age = age;
   }

   speak(message){
      console.log(this.name + " says: " + message);
   }

   walk(direction){
      console.log("Walking " + direction);
   }

   getOld(years){
      this.age += years || 1;
      console.log(this.name + " got old: " + this.age);
   }
};

class Firefighter extends Person {
   constructor(name, age, exp){
      super(name, age);
      this.exp = exp;
   }

   fightFire() {
      console.log(this.name + " is fighting the fire!!!!");
   }
}

const fighter = new Firefighter("John", 32);
fighter.speak("Hello");
fighter.fightFire();

module.exports = Person;