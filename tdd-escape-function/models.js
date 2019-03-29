(function() {
    "use strict";

    // Test Setup
    mocha.setup("bdd");
    const { assert } = chai;

    //Test Suite
    describe("Escaper function", function() {

        it("should replace '&' with '&amp;'", function() {
            assert.equal(escapeText("&"), "&amp;");
        });
        xit("should replace '&' with '&amp;' in a larger context", function() {
            assert.equal(escapeText("Hello & World"), "Hello &amp; World");
        });
        xit(`should replace "'" with "&#39;" in a larger context`, function() {
            assert.equal(escapeText("'Hello World'"), "&#39;Hello  World&#39;");
        });
        xit(`should replace '"' with '&quot;' in a larger context`, function() {
            assert.equal(escapeText(`"Hello World"`), "&quot;Hello World&quot;");
        });
        xit(`should replace '>' with '&gt;' in a larger context`, function() {
            assert.equal(escapeText(`Hello > World`), "Hello &gt; World");
        });
        xit(`should replace '<' with '&lt;' in a larger context`, function() {
            assert.equal(escapeText(`Hello < World`), "Hello &lt; World");
        });
        xit(`should replace '/' with '&frasl;' in a larger context`, function() {
            assert.equal(escapeText(`Hello / World`), "Hello &frasl; World");
        });
    });


    mocha.run();
})();
