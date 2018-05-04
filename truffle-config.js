const Web3 = require('web3');
const testRPC = require("ethereumjs-testrpc");

const devProvider = testRPC.provider({port: 8565});
const prodProvider = new Web3.providers.HttpProvider("http://localhost:8545");

module.exports = {
  networks: {
    development: {
      provider: devProvider,
      network_id: "*"
    },
    production: {
      provider: prodProvider,
      network_id: "*"
    },
    coverage: {
      host: "localhost",
      port: 8565,
      network_id: "*",
      gas: 0xfffffffffff,
      gasPrice: 0x01
    },
    truffle: {
      host: "localhost",
      port: 8545,
      network_id: "*"
    }
  }
};
