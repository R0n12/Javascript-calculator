/*
Created 3/22/20 by Jas Bawa
Edited 3/24/2020 by Ern Chi Khoo: Refactored code so that number is retrieved from bottom display
Edited 3/27/2020 by Jas Bawa: Added expect statements to check disabled state of memory buttons and fixed broken test cases after change switch statement expectations
*/
var expect = chai.expect;

describe('#memoryAction()', function() {

    it('should maintain int attribute memoryNum when store parameter is given', function() {
        document.getElementById("bottomDisplay").value = "12345";
        expect(memoryAction("MS")).to.equal(12345);
        expect(document.getElementById("clear").disabled).to.equal(false);
        expect(document.getElementById("recall").disabled).to.equal(false);

    });

    it('should maintain float attribute memoryNum when store parameter is given', function() {
        document.getElementById("bottomDisplay").value = "12345.5";
        expect(memoryAction("MS")).to.equal(12345.5);
        expect(document.getElementById("clear").disabled).to.equal(false);
        expect(document.getElementById("recall").disabled).to.equal(false);

    });

    it('should return 0 if memory had nothing in it', function() {
        expect(memoryAction("MC")).to.equal(0);
        expect(document.getElementById("clear").disabled).to.equal(true);
        expect(document.getElementById("recall").disabled).to.equal(true);
    });

    it('should return 0 if memory had a value saved in it', function() {
        document.getElementById("bottomDisplay").value = "12345.5";
        memoryAction("MS");
        expect(memoryAction("MC")).to.equal(0);
        expect(document.getElementById("clear").disabled).to.equal(true);
        expect(document.getElementById("recall").disabled).to.equal(true);

    });

    it('should maintain float display value when recall parameter is given and float is stored in memory', function() {
        document.getElementById("bottomDisplay").value = "12345.5";
        memoryAction("MS");
        document.getElementById("bottomDisplay").value = "999999";
        memoryAction("MR");
        expect(parseFloat(document.getElementById("bottomDisplay").value)).to.equal(12345.5);
        expect(document.getElementById("inverse").disabled).to.equal(false);

    });

    it('should maintain int display value when recall parameter is given and int is stored in memory', function() {
        document.getElementById("bottomDisplay").value = "12345";
        memoryAction("MS");
        document.getElementById("bottomDisplay").value = "999999.33";
        memoryAction("MR");
        expect(parseFloat(document.getElementById("bottomDisplay").value)).to.equal(12345);
        expect(document.getElementById("inverse").disabled).to.equal(false);

    });

    it('should add nothing when display is empty and memory is int', function() {
        document.getElementById("bottomDisplay").value = "12345";
        memoryAction("MS");
        document.getElementById("bottomDisplay").value = "";
        expect(memoryAction("M+")).to.equal(12345);
        expect(document.getElementById("clear").disabled).to.equal(false);
        expect(document.getElementById("recall").disabled).to.equal(false);

    });

    it('should add nothing when display is empty and memory is float', function() {
        document.getElementById("bottomDisplay").value = "12345.5";
        memoryAction("MS");
        document.getElementById("bottomDisplay").value = "";
        expect(memoryAction("M+")).to.equal(12345.5);
        expect(document.getElementById("clear").disabled).to.equal(false);
        expect(document.getElementById("recall").disabled).to.equal(false);

    });

    it('should add a value when display has a value and memory is int', function() {
        document.getElementById("bottomDisplay").value = "12345";
        memoryAction("MS");
        document.getElementById("bottomDisplay").value = "15";
        expect(memoryAction("M+")).to.equal(12360);
        expect(document.getElementById("clear").disabled).to.equal(false);
        expect(document.getElementById("recall").disabled).to.equal(false);

    });

    it('should add a value when display has a value and memory is float', function() {
        document.getElementById("bottomDisplay").value = "12345.5";
        memoryAction("MS");
        document.getElementById("bottomDisplay").value = "15.5";
        expect(memoryAction("M+")).to.equal(12361);
        expect(document.getElementById("clear").disabled).to.equal(false);
        expect(document.getElementById("recall").disabled).to.equal(false);

    });

});