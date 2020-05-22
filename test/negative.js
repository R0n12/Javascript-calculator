/*
Created 3/24/2020 by Ern Chi Khoo
*/

var expect = chai.expect;

describe('#negative()', function() {

    it('should return 0', function() {
        document.getElementById("bottomDisplay").value = "0";
        var res = negative();
        expect(res).to.equal("0");
    });

    it('should return -1', function() {
        document.getElementById("bottomDisplay").value = "1";
       	expect(negative()).to.equal("-1");
    });

    it('should return 1', function() {
        document.getElementById("bottomDisplay").value = "-1";
       	expect(negative()).to.equal("1");
    });

    it('should return -12345', function() {
        document.getElementById("bottomDisplay").value = "12345";
       	expect(negative()).to.equal("-12345");
    });

    it('should return 12345', function() {
        document.getElementById("bottomDisplay").value = "-12345";
       	expect(negative()).to.equal("12345");
    });

    it('should return -1.', function() {
        document.getElementById("bottomDisplay").value = "1.";
        expect(negative()).to.equal("-1.");
    });

    it('should return 1.', function() {
        document.getElementById("bottomDisplay").value = "-1.";
        expect(negative()).to.equal("1.");
    });

    it('should return -1.2', function() {
        document.getElementById("bottomDisplay").value = "1.2";
        expect(negative()).to.equal("-1.2");
    });

    it('should return 1.2', function() {
        document.getElementById("bottomDisplay").value = "-1.2";
        expect(negative()).to.equal("1.2");
    });

});