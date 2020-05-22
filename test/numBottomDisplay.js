// Created 3/24/20 by Juhee Park
// Edited 3/27/20 by Jas Bawa: Added expectations for disabled buttons

// var sum = require('../calculator/javascript/calculator.js');
// var expect = require('chai').expect;
var expect = chai.expect;
var dis = document.getElementById("bottomDisplay");

describe('#numBottomDisplay()', function() {

    it('should display 0 when clicked 0', function() {
        clearDisplay();
        numBottomDisplay('0');
        expect(dis.value).to.equal("0");
        expect(document.getElementById("inverse").disabled).to.equal(true);
    });

    it('should not display leading zeros', function() {
        clearDisplay();
        numBottomDisplay('2');
        expect(dis.value).to.equal("2");
        expect(document.getElementById("zero").disabled).to.equal(false);
        expect(document.getElementById("inverse").disabled).to.equal(false);
    });

    it('should not display leading zeros', function() {
        clearDisplay();
        numBottomDisplay('0');
        numBottomDisplay('3');
        expect(dis.value).to.equal("3");
        expect(document.getElementById("zero").disabled).to.equal(false);
        expect(document.getElementById("inverse").disabled).to.equal(false);
    });

    it('should append subsequent numbers', function() {
        clearDisplay();
        numBottomDisplay('2');
        numBottomDisplay('3');
        expect(dis.value).to.equal("23");
        expect(document.getElementById("zero").disabled).to.equal(false);
        expect(document.getElementById("inverse").disabled).to.equal(false);
    });

    it('should append 0 as last button', function() {
        clearDisplay();
        numBottomDisplay('2');
        numBottomDisplay('3');
        numBottomDisplay('0');
        expect(dis.value).to.equal("230");
        expect(document.getElementById("zero").disabled).to.equal(false);
        expect(document.getElementById("inverse").disabled).to.equal(false);
    });

    it('should keep sandwiched zero', function() {
        clearDisplay();
        numBottomDisplay('8');
        numBottomDisplay('0');
        numBottomDisplay('6');
        expect(dis.value).to.equal("806");
        expect(document.getElementById("zero").disabled).to.equal(false);
        expect(document.getElementById("inverse").disabled).to.equal(false);
    });

    it('should keep zero in front of decimal', function() {
        clearDisplay();
        numBottomDisplay('.');
        expect(dis.value).to.equal("0.");
        expect(document.getElementById("zero").disabled).to.equal(false);
        expect(document.getElementById("inverse").disabled).to.equal(false);
        expect(document.getElementById("decimal").disabled).to.equal(true);

    });

    it('should add decimal', function() {
        clearDisplay();
        numBottomDisplay('2');
        numBottomDisplay('.');
        numBottomDisplay('5');
        expect(dis.value).to.equal("2.5");
        expect(document.getElementById("zero").disabled).to.equal(false);
        expect(document.getElementById("inverse").disabled).to.equal(false);
        expect(document.getElementById("decimal").disabled).to.equal(true);

    });
    
});