(function() {

  'use strict';

  const Owner = artifacts.require('OwnerImpl');

  contract('Owner', function(accounts) {

    describe('Deployed state', function() {

      it('Check owner', function() {
        return Owner.deployed().then(function(instance) {
          return instance.getOwner();
        }).then(function(address) {
          assert.equal(address, accounts[0]);
        });
      });

    });

    describe('Owner by default', function() {
      let contract;

      beforeEach(function() {
        return Owner.new().then(function(instance) {
          contract = instance;
        });
      });

      it('Check owner constructor', function() {
        return contract.getOwner()
          .then(function(address) {
            assert.equal(address, accounts[0]);
          });
      });

      it('Check initial mount', function() {
        return contract.getMount()
          .then(function(mount) {
            assert.equal(mount, 0);
          });
      });
    });

    describe('Initial await state', function() {
      let contract;

      beforeEach(async function() {
        contract = await Owner.new();
      });

      it('Check owner', async function() {
        var owner = await contract.getOwner();
        assert.equal(owner, accounts[0]);
      });

      it('Check initial mount', async function() {
        var mount = await contract.getMount();
        assert.equal(mount, 0);
      });

      it('Check add zero mount', async function() {
        var mount = await contract.getMount();
        assert.equal(mount, 0);
        await contract.addMount(0);
        assert.equal(mount, 0);
      });

      it('Check add one mount', async function() {
        var mount = await contract.getMount();
        assert.equal(mount, 0);
        await contract.addMount(1);
        mount = await contract.getMount();
        assert.equal(mount, 1);
      });

      it('Check max mount', async function() {
        var mount = await contract.getMount();
        var max = 0x7FFFFFFFFFFffffffffffFFFFFFFFFFffffffffffFFFFFFFFFFffffffffffFFF;
        assert.equal(mount, 0);
        await contract.addMount(max);
        mount = await contract.getMount();
        assert.equal(mount, max);
      });
/*
      it('Check overload mount', async function() {
        var mount = await contract.getMount();
        var max = 0x7FFFFFFFFFFffffffffffFFFFFFFFFFffffffffffFFFFFFFFFFffffffffffFFF;
        assert.equal(mount, 0);
        await contract.addMount(1);
        mount = await contract.getMount();
        assert.equal(mount, 1);

				console.log("--> 1");
        contract.addMount(max);
				console.log("--> 2");
        mount = await contract.getMount();
				console.log("--> : " + mount);
        assert.equal(mount, 1);
      });
*/
    });

  });
})();
