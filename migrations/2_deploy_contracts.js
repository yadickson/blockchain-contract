var HelloWorld = artifacts.require("./HelloWorld.sol");
var Owned = artifacts.require("./Owned.sol");

module.exports = function(deployer) {
  deployer.deploy(HelloWorld);
	deployer.deploy(Owned);
};
