/*
Created 3/30/20 by Jas Bawa
*/
var expect = chai.expect;

describe('#refreshTop()', function() {

    // Actions that occur prior to all test cases being run
    beforeEach('Clear History', function(){
        expr = [];
        topDisplay.value = "";
    });

    it('should maintain an empty value when nothing is done', function () {
        refreshTop();
        expect(topDisplay.value.toString()).to.equal("");
    });

    it('should maintain a long expression when multiple nums and ops are used', function () {
        expr.push("5");
        expr.push("+");
        expr.push("15");
        expr.push("-");
        expr.push("2");
        expr.push("*");
        expr.push("4");
        expr.push("/");
        expr.push("90");
        refreshTop();
        expect(topDisplay.value).to.equal("5+15-2*4/90");
    });

    it('should maintain a single expression when two nums and an op are used', function () {
        expr.push("5");
        expr.push("+");
        expr.push("15");
        refreshTop();
        expect(topDisplay.value).to.equal("5+15");
    });
});