var HelloWorld = artifacts.require("./HelloWorld.sol");
var SafeMathLib = artifacts.require("./SafeMathLib.sol");
var OwnerImpl = artifacts.require("./OwnerImpl.sol");

module.exports = function(deployer) {
  deployer.deploy(HelloWorld);
  deployer.deploy(SafeMathLib);
  deployer.link(SafeMathLib, [OwnerImpl]);
  deployer.deploy(OwnerImpl);
};
