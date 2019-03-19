(function() {
    "use strict";

    // Test Setup
    mocha.setup("bdd");
    const { expect } = chai;

    //Test Suite
    describe("A function", function() {
        it("should fulfill this requirement", function() {
            const not = () => true; 
            expect(not(true)).to.equal(false);
            expect(not(false)).to.equal(true);
        })
    });


    mocha.run();
})();
