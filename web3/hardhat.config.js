// Import required dependencies
require("@matterlabs/hardhat-zksync-solc");
require('dotenv').config(); // Load environment variables

// Default network configuration
module.exports = {
  defaultNetwork: 'sepolia',
  
  // zkSolc settings
  zksolc: {
    version: "1.3.9",
    compilerSource: "binary",
    settings: {
      optimizer: {
        enabled: true,
      },
    },
  },

  // Network configurations
  networks: {
    hardhat: {},
    sepolia: {
      url: 'https://rpc.ankr.com/eth_sepolia',
      accounts: [`0x${process.env.PRIVATE_KEY}`], // Use environment variable
    },
    zksync_testnet: {
      url: "https://zksync2-testnet.zksync.dev",
      ethNetwork: "goerli",
      chainId: 280,
      zksync: true,
    },
    zksync_mainnet: {
      url: "https://zksync2-mainnet.zksync.io/",
      ethNetwork: "mainnet",
      chainId: 324,
      zksync: true,
    },
  },

  // Paths for the project
  paths: {
    artifacts: "./artifacts-zk",
    cache: "./cache-zk",
    sources: "./contracts",
    tests: "./test",
  },

  // Solidity configuration
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
