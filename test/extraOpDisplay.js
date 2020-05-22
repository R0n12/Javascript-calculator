/*
Created 3/30/2020 by Ern Chi Khoo
*/
var expect = chai.expect;

describe('#extraOpDisplay()', function() {

    // testing for square root
    it('should return "√(1)"', function() {
        expr = [];
        document.getElementById("bottomDisplay").value = "1";
        extraOpDisplay("√");
        expect(expr).to.eql(['√(1)']);
    });

    it('should return "√(√(1))"', function() {
        expr = [];
        document.getElementById("bottomDisplay").value = "√(1)";
        extraOpDisplay("√");
        expect(expr).to.eql(['√(√(1))']);
    });

    // testing for square
    it('should return "sqr(1)"', function() {
        expr = [];
        document.getElementById("bottomDisplay").value = "1";
        extraOpDisplay("^2");
        expect(expr).to.eql(['sqr(1)']);
    });

    it('should return "sqr(sqr(1))"', function() {
        expr = [];
        document.getElementById("bottomDisplay").value = "sqr(1)";
        extraOpDisplay("^2");
        expect(expr).to.eql(['sqr(sqr(1))']);
    });

    // testing for inverse 
    it('should return "1/(2)"', function() {
        expr = [];
        document.getElementById("bottomDisplay").value = "2";
        extraOpDisplay("1/x");
        expect(expr).to.eql(['1/(2)']);
    });

    it('should return "1/(1/(2))"', function() {
        expr = [];
        document.getElementById("bottomDisplay").value = "1/(2)";
        extraOpDisplay("1/x");
        expect(expr).to.eql(['1/(1/(2))']);
    });

    // testing for percentage
    it('should return "0"', function() {
        expr = [];
        result = 0;
        document.getElementById("bottomDisplay").value = "0";
        extraOpDisplay("%");
        expect(expr).to.eql(['0']);
    });

    it('should return "1+0.1"', function() {
        expr = ['1', '+'];
        result = 1;
        document.getElementById("bottomDisplay").value = "10";
        extraOpDisplay("%");
        expect(expr).to.eql(['1', '+', '0.1']);
    });

});