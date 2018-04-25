var Web3 = require('web3');
var provider = new Web3.providers.HttpProvider("http://localhost:8545");

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    nodeth: {
      provider: provider,
      network_id: "*", // any network associated with your node
      from: "0x7330668e92db36ee3eaeada77a4624956ea3b2ce",
      gas: 30000000
    }
  }
};
