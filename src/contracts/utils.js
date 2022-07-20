import { ethers } from 'ethers';

import BigNumber from 'bignumber.js';

BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
});

export const getFarmAddress = (tally) => {
  return tally && tally.farmAddress;
}
export const getERC20Address = (tally) => {
  return tally && tally.erc20Address;
}
export const getWethContract = (tally) => {
  return tally && tally.contracts && tally.contracts.weth;
}

export const getFarmContract = (tally, ) => {
  return tally && tally.contracts && tally.contracts.farm;
}
export const getERC20Contract = (tally) => {
  return tally && tally.contracts && tally.contracts.erc20;
}

export const getFarms = (tally) => {
  return tally
    ? tally.contracts.pools.map(
        ({
          pid,
          name,
          symbol,
          icon,
          tokenAddress,
          tokenSymbol,
          tokenContract,
          farmContract,
          lpAddress,
          lpContract,
          pool,
          poolTitle
        }) => ({
          pid,
        //  id: symbol,
          name,
       //   lpToken: symbol,
          lpTokenAddress: lpAddress,
          lpContract,
          tokenAddress,
          tokenSymbol,
          tokenContract,
          farmContract,
        //  earnToken: tokenSymbol,
        //  earnTokenAddress: payr.contracts.erc20.options.address,
      //    icon,
       //   pool,
       //   poolTitle
        }),
      )
    : []
}

export const getPoolWeight = async (farmContract, pid) => {
  try {
    const { allocPoint } = await farmContract.methods.poolInfo(pid).call();
    const totalAllocPoint = await farmContract.methods
      .totalAllocPoint()
      .call();
    return new BigNumber(allocPoint).div(new BigNumber(totalAllocPoint));
  } catch {
    return new BigNumber(0);
  }
}

export const getEarned = async (farmContract, pid, account) => {
    return farmContract.methods.pendingTALLY(pid, account).call();
}


export const getTotalLPWethValue = async (
  farmContract,
  wethContract,
  lpContract,
  tokenContract,
  pid,
) => {
  // Get balance of the token address
  const tokenAmountWholeLP = await tokenContract.methods
    .balanceOf(lpContract.options.address)
    .call();

    //console.log("tokenAmountWholeLP = ", tokenAmountWholeLP.toString())
   
  const tokenDecimals = await tokenContract.methods.decimals().call();
//  console.log("tokenDecimals", tokenDecimals);
    // Get the share of lpContract that farmContract owns
  const balance = await lpContract.methods
    .balanceOf(farmContract.options.address)
    .call();
   // console.log("balancesss = ", balance.toString());
  // Convert that into the portion of total lpContract = p1
  const totalSupply = await lpContract.methods.totalSupply().call();
  // Get total weth value for the lpContract = w1
  const lpContractWeth = await wethContract.methods
    .balanceOf(lpContract.options.address)
    .call();
  
  // Return p1 * w1 * 2
  const portionLp = new BigNumber(balance).div(new BigNumber(totalSupply));
  const lpWethWorth = new BigNumber(lpContractWeth);
  const totalLpWethValue = portionLp.times(lpWethWorth).times(new BigNumber(2));
  // Calculate
  const tokenAmount = new BigNumber(tokenAmountWholeLP)
    .times(portionLp)
    .div(new BigNumber(10).pow(tokenDecimals));

  const wethAmount = new BigNumber(lpContractWeth)
    .times(portionLp)
    .div(new BigNumber(10).pow(9));
  //  console.log("tokenAmount = ", tokenAmount.toString())
  //  console.log("wethAmount = ", wethAmount.toString())
  //  console.log("totalWethValue = ", totalLpWethValue.div(new BigNumber(10).pow(18)))
 //   console.log("tokenPriceInWeth = ", wethAmount.div(tokenAmount))
 //  console.log("poolWeight=", await getPoolWeight(farmContract, pid));
  return {
    tokenAmount,
    wethAmount,
    totalWethValue: totalLpWethValue.div(new BigNumber(10).pow(9)),
    tokenPriceInWeth: wethAmount.div(tokenAmount),
    poolWeight: await getPoolWeight(farmContract, pid)
   //poolWeight: 100
  }
}

export const approve = async (lpContract, farmContract, account) => {
  return lpContract.methods
    .approve(farmContract.options.address, ethers.constants.MaxUint256)
    .send({ from: account });
}

export const getFarmSupply = async (payr) => {
  return new BigNumber(await payr.contracts.erc20.methods.totalSupply().call());
}

export const stake = async (farmContract, pid, amount, account) => {
  console.log("pid = ", pid);
  return farmContract.methods
    .deposit(
      pid,
      new BigNumber(amount).times(new BigNumber(10).pow(9)).toString(),
    )
    .send({ from: account })
    .on('transactionHash', (tx) => {
      console.log(tx)
      return tx.transactionHash
    });
}

export const unstake = async (farmContract, pid, amount, account) => {
  console.log("withpid = ", pid);
  console.log("amount = ", amount);
  console.log("account = ", account);
  return farmContract.methods
    .withdraw(
      pid, 
      new BigNumber(amount).times(new BigNumber(10).pow(9)).toString(),
    )
    .send({ from: account })
    .on('transactionHash', (tx) => {
      console.log(tx)
      return tx.transactionHash
    });
}
export const leaveStaking = async (farmContract,  amount, account) => {
 
  console.log("amount = ", amount);
  console.log("account = ", account);
  return farmContract.methods
    .leaveStaking(
     
      new BigNumber(amount).times(new BigNumber(10).pow(9)).toString(),
    )
    .send({ from: account })
    .on('transactionHash', (tx) => {
      console.log(tx)
      return tx.transactionHash
    });
}
export const enterStaking = async (farmContract,  amount, account) => {
 
  console.log("amount = ", amount);
  console.log("account = ", account);
  return farmContract.methods
    .enterStaking(
      new BigNumber(amount).times(new BigNumber(10).pow(9)).toString(),
    )
    .send({ from: account })
    .on('transactionHash', (tx) => {
      console.log(tx)
      return tx.transactionHash
    });
}
export const harvestStaking = async (farmContract,  account) => {
  console.log("harvesting.....");
  return farmContract.methods
    .enterStaking('0')
    .send({ from: account })
    .on('transactionHash', (tx) => {
      console.log(tx)
      return tx.transactionHash
    });
}
export const harvest = async (farmContract, pid, account) => {
  console.log("harvesting.....");
  return farmContract.methods
    .deposit(pid, '0')
    .send({ from: account })
    .on('transactionHash', (tx) => {
      console.log(tx)
      return tx.transactionHash
    });
}

export const getStaked = async (farmContract, pid, account) => {
  try {
    const { amount } = await farmContract.methods
      .userInfo(pid, account)
      .call();
    return new BigNumber(amount);
  } catch {
    return new BigNumber(0);
  }
}

export const redeem = async (farmContract, account) => {
  let now = new Date().getTime() / 1000;
  if (now >= 1597172400) {
    return farmContract.methods
      .exit()
      .send({ from: account })
      .on('transactionHash', (tx) => {
        console.log(tx)
        return tx.transactionHash
      });
  } else {
    alert('pool not active');
  }
}

export const getPoolContracts = async (yam) => {
  const pools = Object.keys(yam.contracts)
    .filter((c) => c.indexOf('_pool') !== -1)
    .reduce((acc, cur) => {
      const newAcc = { ...acc }
      newAcc[cur] = yam.contracts[cur]
      return newAcc
    }, {});
  return pools;
}

