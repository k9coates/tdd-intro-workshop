(function() {
    "use strict";

    // Test Setup
    mocha.setup("bdd");
    const { assert } = chai;

    //Test Suite
    describe("Not function", function() {
        it("should make a true value false", function() {
            assert.equal(not(true), false);
        });
        xit("should make a false value true", function() {
            assert.equal(not(false), true);
        })
    });


    mocha.run();
})();
