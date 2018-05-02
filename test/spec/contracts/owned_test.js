(function() {

  'use strict';

  const Owned = artifacts.require('Owned');

  contract('Owned', function(accounts) {
    describe('Owner by default', function() {
      let contract;

      beforeEach(function() {
        return Owned.new().then(function(instance) {
          contract = instance;
        });
      });

      it('Check owner constructor', function() {
        return contract.getOwner()
          .then(function(address) {
            assert.equal(address, accounts[0]);
          });
      });

    });

    describe('Initial await state', function() {
      let contract;

      beforeEach(async function() {
        contract = await Owned.new();
      });
      /*
            it('Check message render', async function() {
              var message = await contract.renderHelloWorld();
              assert.equal(message, 'Hello World BaseDos');
            });
      */
    });

    describe('Deployed state', function() {
      /*
        it('Check message render', function() {
          return Owned.deployed().then(function(instance) {
            return instance.renderHelloWorld();
          }).then(function(message) {
            assert.equal(message, 'Hello World BaseDos');
          });
        });
*/
    });

  });
})();
