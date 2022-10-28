//https://eth-goerli.g.alchemy.com/v2/cWK4yLdBc4p5SWdT1CHdaZQRyCJTQNKe

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.17',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/cWK4yLdBc4p5SWdT1CHdaZQRyCJTQNKe',
      accounts:['aa3bdecc9f591495cc20fceea12ca1f74ba0e731b9484d0110d11932df8e529d'],
    },
  },
};