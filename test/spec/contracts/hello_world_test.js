(function() {

  'use strict';

  const HelloWorld = artifacts.require('app/HelloWorldImpl');

  contract('HelloWorld', function(accounts) {

    describe('Deployed state', function() {
      it('Check message render', function() {
        return HelloWorld.deployed().then(function(instance) {
          return instance.render();
        }).then(function(message) {
          assert.equal(message, 'Hello World');
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
        return contract.render()
          .then(function(message) {
            assert.equal(message, 'Hello World');
          });
      });

    });

    describe('Initial await state', function() {
      let contract;

      beforeEach(async function() {
        contract = await HelloWorld.new();
      });

      it('Check message render', async function() {
        var message = await contract.render();
        assert.equal(message, 'Hello World');
      });

      it('Check message greeting', async function() {
        var message = await contract.greeting("BaseDos");
        assert.equal(message, 'Hello World: BaseDos');
      });

    });

  });
})();
