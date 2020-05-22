/*
Created 3/28/20 by Jas Bawa
*/
var expect = chai.expect;

describe('#updateMemoryHistory()', function() {

    // Variable declarations used for all test cases
    var table = document.getElementById("previousMem");
    var current = document.getElementById("currentMem");
    var i;

    // Actions that occur prior to all test cases being run
    beforeEach('Clear History', function(){
        while(table.hasChildNodes())
        {
            table.removeChild(table.firstChild);
        }
        current.innerHTML = "0";
        memoryNum = 0;
    });

    // Memory Store Test Cases
    it('should update the current and history by adding a table row and data when one memory is added with MS', function () {
        document.getElementById("bottomDisplay").value = "12345";
        memoryAction("MS");
        expect(table.rows[0].cells[0].innerHTML).to.equal("0");
        expect(current.innerHTML).to.equal("12345");
    });

    it('should update the current and history by adding a table row and data when two memory is added with MS', function () {
        document.getElementById("bottomDisplay").value = "12345";
        memoryAction("MS");
        document.getElementById("bottomDisplay").value = "56789";
        memoryAction("MS");
        expect(table.rows[0].cells[0].innerHTML).to.equal("12345");
        expect(table.rows[1].cells[0].innerHTML).to.equal("0");
        expect(current.innerHTML).to.equal("56789");
    });

    it('should update the current and history by adding a table row and data when three memory is added with MS', function () {
        document.getElementById("bottomDisplay").value = "12345";
        memoryAction("MS");
        document.getElementById("bottomDisplay").value = "56789";
        memoryAction("MS");
        document.getElementById("bottomDisplay").value = "2468";
        memoryAction("MS");
        expect(table.rows[0].cells[0].innerHTML).to.equal("56789");
        expect(table.rows[1].cells[0].innerHTML).to.equal("12345");
        expect(table.rows[2].cells[0].innerHTML).to.equal("0");
        expect(current.innerHTML).to.equal("2468");
    });

    // Memory Clear Test Cases
    it('should update the current and history by adding nothing when MC is used with no value', function () {
        memoryAction("MC");
        expect(current.innerHTML).to.equal("0");
    });

    it('should update the current and history by adding a table row and data when one memory is added with MS but cleared with MC', function () {
        document.getElementById("bottomDisplay").value = "12345";
        memoryAction("MS");
        memoryAction("MC");
        expect(table.rows[0].cells[0].innerHTML).to.equal("12345");
        expect(current.innerHTML).to.equal("0");
    });

    // Memory Add Test Cases
    it('should update the current and history by adding a table row and data when one memory is added with M+', function () {
        document.getElementById("bottomDisplay").value = "12345";
        memoryAction("M+");
        expect(table.rows[0].cells[0].innerHTML).to.equal("0");
        expect(current.innerHTML).to.equal("12345");
    });

    it('should update the current and history by adding a table row and data when two memory is added with M+', function () {
        document.getElementById("bottomDisplay").value = "12345";
        memoryAction("M+");
        document.getElementById("bottomDisplay").value = "5";
        memoryAction("M+");
        expect(table.rows[0].cells[0].innerHTML).to.equal("12345");
        expect(table.rows[1].cells[0].innerHTML).to.equal("0");
        expect(current.innerHTML).to.equal("12350");
    });

    it('should update the current and history by adding a table row and data when three memory is added with M+', function () {
        document.getElementById("bottomDisplay").value = "12345";
        memoryAction("M+");
        document.getElementById("bottomDisplay").value = "5";
        memoryAction("M+");
        document.getElementById("bottomDisplay").value = "50";
        memoryAction("M+");
        expect(table.rows[0].cells[0].innerHTML).to.equal("12350");
        expect(table.rows[1].cells[0].innerHTML).to.equal("12345");
        expect(table.rows[2].cells[0].innerHTML).to.equal("0");
        expect(current.innerHTML).to.equal("12400");
    });
});