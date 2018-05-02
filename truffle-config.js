const Web3 = require('web3');
const testRPC = require("ethereumjs-testrpc");

const devProvider = testRPC.provider({port: 8555});
const prodProvider = new Web3.providers.HttpProvider("http://localhost:8545");

module.exports = {
  networks: {
    development: {
      provider: devProvider,
      network_id: "*" // Match any network id
    },
    production: {
      provider: prodProvider,
      network_id: "*", // any network associated with your node
      from: "0xeb8eb912ef81a7005fc1d7dd593abd907244e062"
    },
    coverage: { // Option to use in .solcover.js and kill.js
      host: "localhost",
      network_id: "*",
      port: 8555,
      gas: 0xfffffffffff,
      gasPrice: 0x01
    }
  }
};
