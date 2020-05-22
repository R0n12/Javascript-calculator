/*
Created 3/29/20 by Jas Bawa
*/

var expect = chai.expect;

describe('#clearBottomDisplay()', function() {

    it('should return 0', function() {
        document.getElementById("bottomDisplay").value = "0";
        clearBottomDisplay();
       	expect(document.getElementById("bottomDisplay").value).to.equal("0");
        expect(document.getElementById("inverse").disabled).to.equal(true);
    });

    it('should return 0', function() {
        document.getElementById("bottomDisplay").value = "12345";
        clearBottomDisplay();
       	expect(document.getElementById("bottomDisplay").value).to.equal("0");
        expect(document.getElementById("inverse").disabled).to.equal(true);
    });

});