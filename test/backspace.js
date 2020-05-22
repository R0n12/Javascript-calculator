/*
Created 3/24/2020 by Ern Chi Khoo
*/

var expect = chai.expect;

describe('#backspace()', function() {

	it('should return an empty string', function() {
        document.getElementById("bottomDisplay").value = "";
       	expect(backspace()).to.equal("");
    });

    it('should return 0', function() {
        document.getElementById("bottomDisplay").value = "0";
       	expect(backspace()).to.equal("0");
        expect(document.getElementById("inverse").disabled).to.equal(true);
    });

    it('should return 0', function() {
        document.getElementById("bottomDisplay").value = "1";
       	expect(backspace()).to.equal("0");
        expect(document.getElementById("inverse").disabled).to.equal(true);
    });

    it('should return 1', function() {
        document.getElementById("bottomDisplay").value = "10";
       	expect(backspace()).to.equal("1");
    });

    it('should return 12', function() {
        document.getElementById("bottomDisplay").value = "123";
       	expect(backspace()).to.equal("12");
    });

    it('should return 0', function() {
        document.getElementById("bottomDisplay").value = "-1";
       	expect(backspace()).to.equal("0");
        expect(document.getElementById("inverse").disabled).to.equal(true);
    });

    it('should return -1', function() {
        document.getElementById("bottomDisplay").value = "-10";
       	expect(backspace()).to.equal("-1");
    });

    it('should return -12', function() {
        document.getElementById("bottomDisplay").value = "-123";
       	expect(backspace()).to.equal("-12");
    });

    it('should return 1', function() {
        document.getElementById("bottomDisplay").value = "1.";
        expect(backspace()).to.equal("1");
    });

    it('should return 1.2', function() {
        document.getElementById("bottomDisplay").value = "1.23";
        expect(backspace()).to.equal("1.2");
    });

    it('should return -1', function() {
        document.getElementById("bottomDisplay").value = "-1.";
        expect(backspace()).to.equal("-1");
    });

});