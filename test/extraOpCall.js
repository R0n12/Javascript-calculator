//Created by Daniel Lim 3/30/2020
var expect = chai.expect;

describe('#extraOpCall()', function() {


    // Actions that occur prior to all test cases being run
    beforeEach('Clear History', function(){
        extraOpFlag = false;
        document.getElementById("decimal").disabled = true;
        document.getElementById("inverse").disabled = (operand == "0");
    });

    it('should update the extraOpFlag and enable the button', function () {
        bottomDisplay.value = "1";
        extraOpCall();
        expect(extraOpFlag).to.equal(true);
        expect(document.getElementById("decimal").disabled).to.equal(false);
        expect(document.getElementById("inverse").disabled).to.equal(false);
    });

    it('should update the extraOpFlag and enable the button', function () {
        bottomDisplay.value = "0";
        extraOpCall();
        expect(extraOpFlag).to.equal(true);
        expect(document.getElementById("decimal").disabled).to.equal(false);
        expect(document.getElementById("inverse").disabled).to.equal(true);
    });
});
