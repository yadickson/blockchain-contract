(function() {

  'use strict';

  const SafeMathLib = artifacts.require('SafeMathLib');

  contract('SafeMathLib', function(accounts) {

    describe('Deployed state', function() {

      it('Check library', function() {
        return SafeMathLib.deployed().then(function(instance) {
          assert.notStrictEqual(instance, null);
        });
      });

    });

    describe('Check functions', function() {
      let library;

      beforeEach(function() {
        return SafeMathLib.new().then(function(instance) {
          library = instance;
        });
      });
/*
      it('Check mult', async function() {
        return library.mult(3,2)
          .then(function(result) {
            assert.equal(result, 6);
          });
      });

      it('Check add', function() {
        return library.add(3,2)
          .then(function(result) {
            assert.equal(result, 5);
          });
      });

      it('Check sub', function() {
        return library.sub(3,2)
          .then(function(result) {
            assert.equal(result, 1);
          });
      });
*/
    });

  });
})();
