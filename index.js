var express = require("express");
var app = express();
var port = process.argv[2] ? process.argv[2] : 8080;
var book = require("./lib/gradeBook").book;

app.get("/", function (req, res) {
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

app.listen(port);
console.log("Listening to port " + port);
