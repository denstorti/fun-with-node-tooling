var expect = require('chai').expect;
var jsdom = require('jsdom');
var fs = require('fs');

var book = require('./gradeBook').book;

describe('Add grades', function(){
   it('Add one grade', function(){
      book.addGrade(90);
      expect(book.getCountOfGrades()).to.equal(1);
   });
   it('Add two grades', function(){
      book.reset();
      book.addGrade(90);
      book.addGrade(12);
      expect(book.getCountOfGrades()).to.equal(2);
   });
});