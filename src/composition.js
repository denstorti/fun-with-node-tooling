import person from "./person2.js"

const animal = {
   eat(food){
      console.log(`${this.name} ate ${food}!`);
   },

   move(){
      console.log(`${this.name} moved!`);
   }
}

const flyable = {
   fly(){
      console.log(`${this.name} is flying!`);
   }
}

const bird = Object.assign({}, flyable, animal);

var p1 = person;
p1.walk(123);

var p2 = Object.assign(person, animal, flyable, {
   talk(message){
      console.log(`${this.name} talked ${message}!`);
   }
});

console.log(p2);
p2.eat('rice');
p2.fly();
p2.talk("HELLO!");

var p3 = Object.create(bird, {
   name: {
       value: 'Little Bird'
      }
   }
);
console.log(p3);
p3.fly();

var p4 = Object.create(p2, {
   name: {
       value: 'Other Person'
      }
   }
);

console.log(p4);
p4.eat('rice');
p4.fly();
p4.talk("HELLO!");
