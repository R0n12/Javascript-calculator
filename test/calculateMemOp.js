/*
Created 3/30/20 by Daniel Lim
*/
var expect = chai.expect;

describe('#calculateMemOp()', function() {


    // Actions that occur prior to all test cases being run
    beforeEach('Clear History', function(){
        result = 0;
    });

    // Addition Test Cases
    it('should add according to the operand', function () {
        operand = "12345";
        memOp = "+";
        calculateMemOp();
        expect(result).to.equal(12345);
    });

    it('should add according to the operand', function () {
        result = -5;
        operand = "12345";
        memOp = "+";
        calculateMemOp();
        expect(result).to.equal(12340);
    });

    it('should add according to the operand', function () {
        result = 12345;
        operand = "-12345";
        memOp = "+";
        calculateMemOp();
        expect(result).to.equal(0);
    });

    // Subtraction Test Cases
    it('should subtract according to the operand', function () {
        operand = "12345";
        memOp = "-";
        calculateMemOp();
        expect(result).to.equal(-12345);
    });

    it('should subtract according to the operand', function () {
        result = 5;
        operand = "-12345";
        memOp = "-";
        calculateMemOp();
        expect(result).to.equal(12350);
    });

    it('should subtract according to the operand', function () {
        result = 12345;
        operand = "12345";
        memOp = "-";
        calculateMemOp();
        expect(result).to.equal(0);
    });

    // Multiplication Test Cases
    it('should multiply according to the operand', function () {
        operand = "12345";
        memOp = "*";
        calculateMemOp();
        expect(result).to.equal(0);
    });

    it('should multiply according to the operand', function () {
        result = 3;
        operand = "-1";
        memOp = "*";
        calculateMemOp();
        expect(result).to.equal(-3);
    });

    it('should multiply according to the operand', function () {
        result = 3;
        operand = "5";
        memOp = "*";
        calculateMemOp();
        expect(result).to.equal(15);
    });

    it('should multiply according to the operand', function () {
        result = -3;
        operand = "-5";
        memOp = "*";
        calculateMemOp();
        expect(result).to.equal(15);
    });

    // Division Test Cases
    it('should divide according to the operand', function () {
        result = 12345
        operand = "1";
        memOp = "/";
        calculateMemOp();
        expect(result).to.equal(12345);
    });

    it('should divide according to the operand', function () {
        result = 12345;
        operand = "12345";
        memOp = "/";
        calculateMemOp();
        expect(result).to.equal(1);
    });

    it('should divide according to the operand', function () {
        result = -12345;
        operand = "12345";
        memOp = "/";
        calculateMemOp();
        expect(result).to.equal(-1);
    });

    it('should divide according to the operand', function () {
        result = 12345;
        operand = "-12345";
        memOp = "/";
        calculateMemOp();
        expect(result).to.equal(-1);
    });

    // Default Test Cases
    it('should divide according to the operand', function () {
        operand = 1
        memOp = "^";
        calculateMemOp();
        expect(result).to.equal(1);
    });

    it('should divide according to the operand', function () {
        operand = 12345;
        memOp = "%";
        calculateMemOp();
        expect(result).to.equal(12345);
    });

   
});