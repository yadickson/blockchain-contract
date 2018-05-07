(function() {

  'use strict';

  const SafeMathLib = artifacts.require('../libraries/SafeMathLib');

  contract('SafeMathLib', function(accounts) {

    describe('Deployed state', function() {

      it('Check library', function() {
        return SafeMathLib.deployed().then(function(instance) {
          assert.notStrictEqual(instance, null);
        });
      });

    });

  });
})();
