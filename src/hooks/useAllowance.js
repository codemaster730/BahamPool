import { useCallback, useEffect, useState } from 'react';

import BigNumber from 'bignumber.js';
import useTally from './useTally';
import { useWeb3React } from "@web3-react/core";

import { getAllowance } from '../utils/erc20';
import { getFarmContract } from '../contracts/utils';

const useAllowance = (lpContract=null, farmContract=null) => {
  const [allowance, setAllowance] = useState(new BigNumber(0));
  const {  connector,
    library,
    chainId,
    account,
    activate,
    deactivate,
    active,
    error,} = useWeb3React();
  const tally = useTally();
  if(farmContract === null)
    farmContract = getFarmContract(tally);

  const fetchAllowance = useCallback(async () => {
    const allowance = await getAllowance(
      lpContract,
      farmContract,
      account,
    );
    console.log("allowance = ", allowance);
    setAllowance(new BigNumber(allowance));
  }, [account, farmContract, lpContract]);

  useEffect(() => {
    if (account && farmContract && lpContract) {
      fetchAllowance();
    }
    let refreshInterval = setInterval(fetchAllowance, 10000);
    return () => clearInterval(refreshInterval);
  }, [account, farmContract, fetchAllowance, lpContract]);
 
  return allowance;
}

export default useAllowance;
