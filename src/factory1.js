function makePerson(name, age){

   const privateVersion = '1.0.1';

   var state = {name, age,
                  speak, getVersion};

   function speak(message){
      console.log(`${name} says: ${message}`);
   }

   function getVersion(){
      console.log(`${privateVersion}`);
   }

   return state;
};

var p1 = makePerson('Denis', 28);
p1.speak('HELLO');
p1.getVersion();