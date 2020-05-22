/*
Created 3/30/20 by Juhee Park
*/
var expect = chai.expect;

describe('#updateCalcHistory()', function() {

    // Variable declarations used for all test cases
    var table = document.getElementById("prevCalc");
    var i;

    // Actions that occur prior to all test cases being run
    beforeEach('Clear History', function(){
        while(table.hasChildNodes())
        {
            table.removeChild(table.firstChild);
        }
    });

    it('should update calculation history when one calculation is made', function () {
        var str = "3+3=5";
        updateCalcHistory(str);
        expect(table.rows[0].cells[0].innerHTML).to.equal("3+3=5");
    });

    it('should update calculation history when two calculations are made', function () {
        var str = "3+3=5";
        updateCalcHistory(str);
        str = "sqr(6)=36";
        updateCalcHistory(str);
        expect(table.rows[1].cells[0].innerHTML).to.equal("3+3=5");
        expect(table.rows[0].cells[0].innerHTML).to.equal("sqr(6)=36");

    });

    it('should update calculation history when three calculations are made', function () {
        var str = "3+3=5";
        updateCalcHistory(str);
        str = "sqr(6)=36";
        updateCalcHistory(str);
        var str = "3+2*7/5=7";
        updateCalcHistory(str);
        expect(table.rows[2].cells[0].innerHTML).to.equal("3+3=5");
        expect(table.rows[1].cells[0].innerHTML).to.equal("sqr(6)=36");
        expect(table.rows[0].cells[0].innerHTML).to.equal("3+2*7/5=7");
    });
});