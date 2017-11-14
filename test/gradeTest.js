var book = require("../lib/gradeBook").book;

exports["setUp"] = function (callback) {
    book.reset();
    callback();
};

exports["Can add new grade"] = function (test) {
    book.addGrade(90);
    var count = book.getCountOfGrades();
    test.equal(count, 1);

    book.addGrade(90);
    var count = book.getCountOfGrades();
    test.equal(count, 2);

    book.addGrade(90);
    var count = book.getCountOfGrades();
    test.equal(count, 3);

    test.done();
};

exports["Can average grades"] = function (test) {
    book.addGrade(100);
    book.addGrade(50);
    var avg = book.getAverage();

    test.equal(avg, 75);
    test.done();
};