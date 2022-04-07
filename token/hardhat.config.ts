// hardhat.config.ts
import { HardhatUserConfig } from "hardhat/types";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
require("hardhat-contract-sizer");
require("@nomiclabs/hardhat-ganache");

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.7",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000,
          },
        },
      },
    ],
  },
  networks: {
    hardhat: {
      // local
      chainId: 1337,
      // accounts: [{
      //   privateKey: '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80',
      //   balance: '9999'
      // }]
      allowUnlimitedContractSize: true,
      forking: {
        url: "https://eth-mainnet.alchemyapi.io/v2/Sgd8L39stCNQnsuXxYAKXVvFU_z5UlXv",
      },
    },
    localhost: {
      url: "http://127.0.0.1:8545",
    },
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/01091511c975487ba99f221730a3ba08",
      accounts: [
        /** private key here */
      ],
    },
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/H6e8DlYxo60zP4CnpGU1_V6xH65J1ECO",
      accounts: [
        `0xba44e6217a37b150eace15bed443e574a34246fd25ba31b11c6b88f9b04b3f75`,
      ],
    },
  },
};

export default config;
