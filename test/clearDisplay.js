/*
Created 3/24/2020 by Ern Chi Khoo
Edited 3/27/20 by Jas Bawa: Added expect statement for inverse button enable state
*/

var expect = chai.expect;

describe('#clearDisplay()', function() {

	// testing the bottom display is cleared
    it('should return 0', function() {
        document.getElementById("bottomDisplay").value = "0";
       	expect(clearDisplay()).to.equal("0");
       	expect(document.getElementById("topDisplay").value).to.equal("");
        expect(document.getElementById("inverse").disabled).to.equal(true);
    });

    it('should return 0', function() {
        document.getElementById("bottomDisplay").value = "1";
       	expect(clearDisplay()).to.equal("0");
       	expect(document.getElementById("topDisplay").value).to.equal("");
        expect(document.getElementById("inverse").disabled).to.equal(true);
    });

});