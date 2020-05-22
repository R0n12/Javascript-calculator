/*
Created 3/30/20 by Lang Xu
Test cases for classicOpDisplay()
*/

var expect = chai.expect;

describe('#classicOpDisplay()', function() {
    
	// testing the bottom display is cleared
    it('should replace last position operator to +', function() {
        expr = ["0","+"];
        classicOpDisplay("+");
       	expect(expr).to.eql(["0","+"]);
        expect(document.getElementById("topDisplay").value).to.equal("0+");
    });

    it('should replace last position operator to -', function() {
        expr = ["0","+"];
        classicOpDisplay("-");
        expect(expr).to.eql(["0","-"]);
        expect(document.getElementById("topDisplay").value).to.equal("0-");
    });

    it('should replace last position operator to *', function() {
        expr = ["0","+"];
        classicOpDisplay("*");
        expect(expr).to.eql(["0","*"]);
        expect(document.getElementById("topDisplay").value).to.equal("0*");
    });

    it('should replace last position operator to /', function() {
        expr = ["0","+"];
        classicOpDisplay("/");
        expect(expr).to.eql(["0","/"]);
        expect(document.getElementById("topDisplay").value).to.equal("0/");
    });

    it('should replace last position operator to =', function() {
        expr = ["0","+"];
        classicOpDisplay("=");
        expect(expr).to.eql(["0","="]);
        expect(document.getElementById("topDisplay").value).to.equal("0=");
    });

    it('should replace last position operator to +', function() {
        expr = ["0","+","5","+"];
        classicOpDisplay("+");
        expect(expr).to.eql(["0","+","5","+"]);
        expect(document.getElementById("topDisplay").value).to.equal("0+5+");
    });

    it('should replace last position operator to -', function() {
        expr = ["0","+","5","+"];
        classicOpDisplay("-");
        expect(expr).to.eql(["0","+","5","-"]);
        expect(document.getElementById("topDisplay").value).to.equal("0+5-");
    });

    it('should replace last position operator to *', function() {
        expr = ["0","+","5","+"];
        classicOpDisplay("*");
        expect(expr).to.eql(["0","+","5","*"]);
        expect(document.getElementById("topDisplay").value).to.equal("0+5*");
    });

    it('should replace last position operator to /', function() {
        expr = ["0","+","5","+"];
        classicOpDisplay("/");
        expect(expr).to.eql(["0","+","5","/"]);
        expect(document.getElementById("topDisplay").value).to.equal("0+5/");
    });

    it('should replace last position operator to =', function() {
        expr = ["0","+","5","+"];
        classicOpDisplay("=");
        expect(expr).to.eql(["0","+","5","="]);
        expect(document.getElementById("topDisplay").value).to.equal("0+5=");
    });

    it('should append + operator to the display', function() {
        expr = ["0"];
        classicOpDisplay("+");
        expect(expr).to.eql(["0","+"]);
        expect(document.getElementById("topDisplay").value).to.equal("0+");
    });

    it('should append - operator to the display', function() {
        expr = ["0"];
        classicOpDisplay("-");
        expect(expr).to.eql(["0","-"]);
        expect(document.getElementById("topDisplay").value).to.equal("0-");
    });

    it('should append * operator to the display', function() {
        expr = ["0"];
        classicOpDisplay("*");
        expect(expr).to.eql(["0","*"]);
        expect(document.getElementById("topDisplay").value).to.equal("0*");
    });

    it('should append / operator to the display', function() {
        expr = ["0"];
        classicOpDisplay("/");
        expect(expr).to.eql(["0","/"]);
        expect(document.getElementById("topDisplay").value).to.equal("0/");
    });

    it('should append = operator to the display', function() {
        expr = ["0"];
        classicOpDisplay("=");
        expect(expr).to.eql(["0","="]);
        expect(document.getElementById("topDisplay").value).to.equal("0=");
    });
});