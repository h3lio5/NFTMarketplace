require("@nomiclabs/hardhat-waffle");
const fs = require("fs");

const PROJECT_ID = "6460f44eb9c44799ac0d5b34785a44a7";
const privateKey = fs.readFileSync(".secret").toString();

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai:{
      url: `https://polygon-mumbai.infura.io/v3/${PROJECT_ID}`,
      accounts: [privateKey]
    },
    mainnet:{
      url: `https://polygon-mainnet.infura.io/v3/${PROJECT_ID}`,
      accounts: [privateKey]
    }
  },
  solidity: "0.8.4",
};
