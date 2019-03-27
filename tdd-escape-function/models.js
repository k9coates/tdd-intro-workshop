(function() {
    "use strict";

    // Test Setup
    mocha.setup("bdd");
    const { expect } = chai;

    //Test Suite
    describe("A function", function() {
        const escapeText = (text) => text; 
        xit("should replace '&' with '&amp;'", function() {
            expect(escapeText("&")).to.equal("&amp;");
        });
        xit("should replace '&' with '&amp;' in a larger context", function() {
            expect(escapeText("Hello & World")).to.equal("Hello &amp; World");
        });
        xit(`should replace "'" with "&#39;" in a larger context`, function() {
            expect(escapeText("'Hello World'")).to.equal("&#39;Hello  World&#39;");
        });
        xit(`should replace '"' with '&quot;' in a larger context`, function() {
            expect(escapeText(`"Hello World"`)).to.equal("&quot;Hello World&quot;");
        });
        xit(`should replace '>' with '&gt;' in a larger context`, function() {
            expect(escapeText(`Hello > World`)).to.equal("Hello &gt; World");
        });
        xit(`should replace '<' with '&lt;' in a larger context`, function() {
            expect(escapeText(`Hello < World`)).to.equal("Hello &lt; World");
        });
        it(`should replace '/' with '&frasl;' in a larger context`, function() {
            expect(escapeText(`Hello / World`)).to.equal("Hello &frasl; World");
        });
    });


    mocha.run();
})();
