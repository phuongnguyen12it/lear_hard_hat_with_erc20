require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.23",
  networks: {
    bsctest: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545", // validator node
      accounts: [process.env.PRIV_KEY]
    },
    snowtrace: {
      gasPrice: 225000000000,
      network: "snowtrace",
      chainId: 43114, //Only specify a chainId if we are not forking
      url: "https://api.avax.network/ext/bc/C/rpc",
      accounts: [process.env.PRIV_KEY]
    },
    snowtracetestnet: {
      gasPrice: 225000000000,
      network: "snowtrace",
      chainId: 43113, //Only specify a chainId if we are not forking
      url: "https://api.avax-test.network/ext/bc/C/rpc",
      accounts: [process.env.PRIV_KEY]
    }
  },
  etherscan: {
    apiKey: process.env.API_KEY
  }
};
