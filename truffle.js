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
      from: "0xeb8eb912ef81a7005fc1d7dd593abd907244e062"
    }
  }
};
