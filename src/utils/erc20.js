import Web3 from 'web3'

import ERC20ABI from '../contracts/lib/abi/erc20.json'

export const getContract = (provider, address) => {
  const web3 = new Web3(provider)
  const contract = new web3.eth.Contract(
    ERC20ABI.abi,
    address,
  )
  return contract
}

export const getAllowance = async (
  lpContract,
  farmContract,
  account
) => {
  try {
    const allowance = await lpContract.methods
      .allowance(account, farmContract.options.address)
      .call()
    return allowance
  } catch (e) {
    return '0'
  }
}

export const getBalance = async (
  provider,
  tokenAddress,
  userAddress
) => {
  const lpContract = getContract(provider, tokenAddress)
  try {
    const balance = await lpContract.methods
      .balanceOf(userAddress)
      .call()
    return balance
  } catch (e) {
    return '0'
  }
}
