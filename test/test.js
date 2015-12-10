import assert from "power-assert"

describe('Mocha test use ES6 and power assert', function() {
  describe('First test', function () {
    it( 'test', () => {
      const value = {a:1, b:"b", c: [1,2,3]};
      assert.deepEqual( value, {a:1, b:"b", c: [1,2,3]} );
    });
  });
});