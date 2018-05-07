(function() {

  'use strict';

  const StringLib = artifacts.require('../libraries/StringLib');

  contract('StringLib', function(accounts) {

    describe('Deployed state', function() {

      it('Check library', function() {
        return StringLib.deployed().then(function(instance) {
          assert.notStrictEqual(instance, null);
        });
      });

    });

  });
})();
