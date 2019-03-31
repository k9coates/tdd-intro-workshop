(function() {
    "use strict";

    // Test Setup
    mocha.setup("bdd");
    const { assert } = chai;

    //Test Suite
    describe("Water categorization function", function() {
        const temperatures = [0, 50, 75, 24, 30, 20];
        it("should transform temperatures below 32 degrees to frozen", function() {
            assert.equal(isFrozen(temperatures)[0], "frozen");
            assert.equal(isFrozen(temperatures)[3], "frozen");
            assert.equal(isFrozen(temperatures)[4], "frozen");
            assert.equal(isFrozen(temperatures)[5], "frozen");
        });
        xit("should transform temperatures above 32 degrees to solid", function() {
            assert.equal(isFrozen(temperatures)[1], "solid");
            assert.equal(isFrozen(temperatures)[2], "solid");
        });
    });


    mocha.run();
})();
