var HelloWorld = artifacts.require("./HelloWorld.sol");
var Owned = artifacts.require("./Owned.sol");
var SafeMathLib = artifacts.require("./SafeMathLib.sol");

module.exports = function(deployer) {
  deployer.deploy(SafeMathLib);
  deployer.link(SafeMathLib, [Owned]);
  deployer.deploy(HelloWorld);
  deployer.deploy(Owned);
};
