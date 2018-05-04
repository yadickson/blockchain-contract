var SafeMathLib = artifacts.require("./libs/SafeMathLib.sol");
var StringLib = artifacts.require("./libs/StringLib.sol");
var HelloWorld = artifacts.require("./app/HelloWorldImpl.sol");
var Owner = artifacts.require("./app/OwnerImpl.sol");

module.exports = function(deployer) {
	deployer.deploy(StringLib);
	deployer.deploy(SafeMathLib);
	deployer.link(StringLib, [HelloWorld]);
  deployer.link(SafeMathLib, [Owner]);
  deployer.deploy(HelloWorld);
  deployer.deploy(Owner);
};
