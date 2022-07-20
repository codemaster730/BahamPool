export const getEthChainInfo = () => {
  let chainId = 97;
 // let rpcUrl = 'https://bsc-dataseed.binance.org/';
 let rpcUrl = "https://data-seed-prebsc-1-s1.binance.org:8545/"
  // // if (/\/\/farm.deor.io/.test(href)) {
  //      chainId = 1;
  //      rpcUrl = 'https://mainnet.infura.io/v3/e707b58edfd7437cbb6e9079c259eda7/';
  //      ethscanType = '';
  // // }
  return {
    chainId,
    rpcUrl,
  }
};
