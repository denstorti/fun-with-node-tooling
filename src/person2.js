const person = {
   name: "Robert",
   age: 37,
   speak: function(message){
      console.log(this.name + " says: " + message);
   },
   walk: function(direction){
      console.log("Walking " + direction);
   },
   getOld: function(years){
      this.age += years || 1;
      console.log(this.name + " got old: " + this.age);
   }
};

// person.speak("Hello!");
// person.getOld();
// person.getOld(3);

module.exports = person;