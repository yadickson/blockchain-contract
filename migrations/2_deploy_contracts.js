var SafeMathLib = artifacts.require("../libraries/SafeMathLib.sol");
var StringLib = artifacts.require("../libraries/StringLib.sol");
var HelloWorld = artifacts.require("./HelloWorld.sol");
var Owner = artifacts.require("./OwnerImpl.sol");

module.exports = function(deployer) {
	deployer.deploy(StringLib);
	deployer.deploy(SafeMathLib);
	deployer.link(StringLib, [HelloWorld]);
  deployer.link(SafeMathLib, [Owner]);
  deployer.deploy(HelloWorld);
  deployer.deploy(Owner);
};
