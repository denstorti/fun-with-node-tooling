import express from "express";
import Person from "./person"

let app = express();
var port = process.argv[2] ? process.argv[2] : 8080;
var book = require("../lib/gradeBook").book;


debugger;

let me = new Person("Marina", 1992);
console.log(me);
me.name = "Denis";
me.birthYear = 1989;
console.log(me);

me.sayName().then(() => {
   console.log("I said the name");
   return "{ \"message\": \"I said the name\" }";
}).then(JSON.parse).then(console.log);

app.get("/", (req, res) => {
	if (req.query.grades) {
		var grades = req.query.grades.split(",");
		for(var i = 0; i < grades.length; i++){
			book.addGrade(parseInt(grades[i]));
			console.log(grades[i]);
		}
	}

	res.write("HELLO WORLD!");
	res.write("\nYOUR GRADES ARE: " + book._grades);
	res.write("\nYOUR AVERAGE IS: " + book.getAverage());
	res.end();
});

app.get("/users", function (req, res) {
	res.json(
		[
			{"id":1, "firstName": "Bob", "surname": "Wolf"},
			{"id":2, "firstName": "Alice", "surname": "Snake"},
			{"id":3, "firstName": "Porto", "surname": "Ferreira"},
		]
	);
});

app.listen(port);
console.log("Listening to port " + port);
