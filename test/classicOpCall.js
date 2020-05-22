/*
Created 3/30/20 by Juhee Park
*/
var expect = chai.expect;

describe('#classicOpCall()', function() {

    // Variable declarations used for all test cases
    var bot = document.getElementById("bottomDisplay");
    var top = document.getElementById("topDisplay");


    // Actions that occur prior to all test cases being run
    beforeEach('Reset calc', function(){
        expr = new Array();
        memOp = "";
        result = 0;
    });

    // One operator
    it('should make all updates for one number and +', function () {
        operand = "-2";
        classicOpCall("+");

        expect(expr).to.eql(["-2", "+"]);
        expect(result).to.equal(-2);
        expect(top.value).to.equal("-2+");
        expect(bot.value).to.equal("-2");
        expect(memOp).to.equal("+");
        expect(extraOpFlag).to.equal(false);
        expect(numState).to.equal(1);
        expect(document.getElementById("zero").disabled).to.equal(false);
        expect(document.getElementById("inverse").disabled).to.equal(false);
        expect(document.getElementById("decimal").disabled).to.equal(false);

    });

    it('should make all updates for one number and -', function () {
        operand = "3";
        classicOpCall("-");

        expect(expr).to.eql(["3", "-"]);
        expect(result).to.equal(3);
        expect(top.value).to.equal("3-");
        expect(bot.value).to.equal("3");
        expect(memOp).to.equal("-");
        expect(extraOpFlag).to.equal(false);
        expect(numState).to.equal(1);
        expect(document.getElementById("zero").disabled).to.equal(false);
        expect(document.getElementById("inverse").disabled).to.equal(false);
        expect(document.getElementById("decimal").disabled).to.equal(false);

    });

    it('should make all updates for one number and *', function () {
        operand = "4.";
        classicOpCall("*");

        expect(expr).to.eql(["4", "*"]);
        expect(result).to.equal(4);
        expect(top.value).to.equal("4*");
        expect(bot.value).to.equal("4");
        expect(memOp).to.equal("*");
        expect(extraOpFlag).to.equal(false);
        expect(numState).to.equal(1);
        expect(document.getElementById("zero").disabled).to.equal(false);
        expect(document.getElementById("inverse").disabled).to.equal(false);
        expect(document.getElementById("decimal").disabled).to.equal(false);

    });

    it('should make all updates for one number and /', function () {
        operand = "5.0";
        classicOpCall("/");

        expect(expr).to.eql(["5", "/"]);
        expect(result).to.equal(5);
        expect(top.value).to.equal("5/");
        expect(bot.value).to.equal("5");
        expect(memOp).to.equal("/");
        expect(extraOpFlag).to.equal(false);
        expect(numState).to.equal(1);
        expect(document.getElementById("zero").disabled).to.equal(true);
        expect(document.getElementById("inverse").disabled).to.equal(false);
        expect(document.getElementById("decimal").disabled).to.equal(false);

    });

    it('should make all updates for one number and =', function () {
        operand = "56";
        classicOpCall("=");

        expect(expr).to.eql([]);
        expect(result).to.equal(56);
        expect(top.value).to.equal("56=");
        expect(bot.value).to.equal("56");
        expect(memOp).to.equal("=");
        expect(extraOpFlag).to.equal(false);
        expect(numState).to.equal(1);
        expect(document.getElementById("zero").disabled).to.equal(false);
        expect(document.getElementById("inverse").disabled).to.equal(false);
        expect(document.getElementById("decimal").disabled).to.equal(false);

    });

    // two operators
    it('should make all updates for number + number / ', function () {
        operand = "2";
        classicOpCall("+");
        operand = "3";
        classicOpCall("/");

        expect(expr).to.eql(["2", "+", "3", "/"]);
        expect(result).to.equal(5);
        expect(top.value).to.equal("2+3/");
        expect(bot.value).to.equal("5");
        expect(memOp).to.equal("/");
        expect(extraOpFlag).to.equal(false);
        expect(numState).to.equal(1);
        expect(document.getElementById("zero").disabled).to.equal(true);
        expect(document.getElementById("inverse").disabled).to.equal(false);
        expect(document.getElementById("decimal").disabled).to.equal(false);
    });

    it('should make all updates for number - number / ', function () {
        operand = "2";
        classicOpCall("*");
        operand = "3";
        classicOpCall("-");

        expect(expr).to.eql(["2", "*", "3", "-"]);
        expect(result).to.equal(6);
        expect(top.value).to.equal("2*3-");
        expect(bot.value).to.equal("6");
        expect(memOp).to.equal("-");
        expect(extraOpFlag).to.equal(false);
        expect(numState).to.equal(1);
        expect(document.getElementById("zero").disabled).to.equal(false);
        expect(document.getElementById("inverse").disabled).to.equal(false);
        expect(document.getElementById("decimal").disabled).to.equal(false);
    });

    it('should make all updates for number + number = ', function () {
        operand = "2";
        classicOpCall("+");
        operand = "3";
        classicOpCall("=");

        expect(expr).to.eql([]);
        expect(result).to.equal(5);
        expect(top.value).to.equal("2+3=");
        expect(bot.value).to.equal("5");
        expect(memOp).to.equal("=");
        expect(extraOpFlag).to.equal(false);
        expect(numState).to.equal(1);
        expect(document.getElementById("zero").disabled).to.equal(false);
        expect(document.getElementById("inverse").disabled).to.equal(false);
        expect(document.getElementById("decimal").disabled).to.equal(false);
    });

    // consecutive operators
    it('should make all updates for number ++ ', function () {
        operand = "2";
        classicOpCall("+");
        classicOpCall("+");

        expect(expr).to.eql(["2", "+"]);
        expect(result).to.equal(2);
        expect(top.value).to.equal("2+");
        expect(bot.value).to.equal("2");
        expect(memOp).to.equal("+");
        expect(extraOpFlag).to.equal(false);
        expect(numState).to.equal(1);
        expect(document.getElementById("zero").disabled).to.equal(false);
        expect(document.getElementById("inverse").disabled).to.equal(false);
        expect(document.getElementById("decimal").disabled).to.equal(false);
    });

    it('should make all updates for number +- ', function () {
        operand = "2";
        classicOpCall("+");
        classicOpCall("-");

        expect(expr).to.eql(["2", "-"]);
        expect(result).to.equal(2);
        expect(top.value).to.equal("2-");
        expect(bot.value).to.equal("2");
        expect(memOp).to.equal("-");
        expect(extraOpFlag).to.equal(false);
        expect(numState).to.equal(1);
        expect(document.getElementById("zero").disabled).to.equal(false);
        expect(document.getElementById("inverse").disabled).to.equal(false);
        expect(document.getElementById("decimal").disabled).to.equal(false);
    });

    it('should make all updates for number +*- ', function () {
        operand = "2";
        classicOpCall("+");
        classicOpCall("*");
        classicOpCall("-");

        expect(expr).to.eql(["2", "-"]);
        expect(result).to.equal(2);
        expect(top.value).to.equal("2-");
        expect(bot.value).to.equal("2");
        expect(memOp).to.equal("-");
        expect(extraOpFlag).to.equal(false);
        expect(numState).to.equal(1);
        expect(document.getElementById("zero").disabled).to.equal(false);
        expect(document.getElementById("inverse").disabled).to.equal(false);
        expect(document.getElementById("decimal").disabled).to.equal(false);
    });
    
    it('should make all updates for number /+*- ', function () {
        operand = "2";
        classicOpCall("/");
        classicOpCall("+");
        classicOpCall("*");
        classicOpCall("-");

        expect(expr).to.eql(["2", "-"]);
        expect(result).to.equal(2);
        expect(top.value).to.equal("2-");
        expect(bot.value).to.equal("2");
        expect(memOp).to.equal("-");
        expect(extraOpFlag).to.equal(false);
        expect(numState).to.equal(1);
        expect(document.getElementById("zero").disabled).to.equal(false);
        expect(document.getElementById("inverse").disabled).to.equal(false);
        expect(document.getElementById("decimal").disabled).to.equal(false);
    });

    it('should make all updates for number /+*-= ', function () {
        operand = "2";
        classicOpCall("/");
        classicOpCall("+");
        classicOpCall("*");
        classicOpCall("-");
        classicOpCall("=");

        expect(expr).to.eql([]);
        expect(result).to.equal(2);
        expect(top.value).to.equal("2=");
        expect(bot.value).to.equal("2");
        expect(memOp).to.equal("=");
        expect(extraOpFlag).to.equal(false);
        expect(numState).to.equal(1);
        expect(document.getElementById("zero").disabled).to.equal(false);
        expect(document.getElementById("inverse").disabled).to.equal(false);
        expect(document.getElementById("decimal").disabled).to.equal(false);
    })
});