'use strict';

/* deps: mocha */
var assert = require('assert');
var pad = require('../src/next-pad-end');

describe('pad right', function () {
  it('should return the string when no padding amount is passed.', function () {
    assert.equal( pad('abc') , 'abc');
  });

  it('should pad the string to meet the given length', function () {
    assert.equal( pad('abc', 5) , 'abc00');
    assert.equal( pad('abc', 6) , 'abc000');
    assert.equal( pad('abc', 10) , 'abc0000000');
    assert.equal( pad('abc', 100) , 'abc0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000');
    assert.equal( pad('abc', 300) , 'abc000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000');
  });

  it('should pad using the given string.', function () {
    assert.equal( pad('abc', 10, ' ') , 'abc       ');
    assert.equal( pad('abc', 10, '~') , 'abc~~~~~~~');
    assert.equal( pad('abc', 100, '~') , 'abc~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
    assert.equal( pad('abc', 300, '~') , 'abc~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  });
});
