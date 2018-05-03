(function() {

  'use strict';

  const HelloWorld = artifacts.require('HelloWorld');

  contract('HelloWorld', function(accounts) {

    describe('Deployed state', function() {
      it('Check message render', function() {
        return HelloWorld.deployed().then(function(instance) {
          return instance.renderHelloWorld();
        }).then(function(message) {
          assert.equal(message, 'Hello World BaseDos');
        });
      });

    });

    describe('Initial state', function() {
      let contract;

      beforeEach(function() {
        return HelloWorld.new().then(function(instance) {
          contract = instance;
        });
      });

      it('Check message render', function() {
        return contract.renderHelloWorld()
          .then(function(message) {
            assert.equal(message, 'Hello World BaseDos');
          });
      });

    });

    describe('Initial await state', function() {
      let contract;

      beforeEach(async function() {
        contract = await HelloWorld.new();
      });

      it('Check message render', async function() {
        var message = await contract.renderHelloWorld();
        assert.equal(message, 'Hello World BaseDos');
      });

    });

  });
})();
