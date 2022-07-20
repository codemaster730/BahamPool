import { useCallback } from 'react';
import useTally from './useTally';
import { useWeb3React } from "@web3-react/core";
import { approve, getFarmContract } from '../contracts/utils';

const useApprove = (lpContract = null, farmContract = null) => {
 
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

  const handleApprove = useCallback(async () => {
    try {
      const tx = await approve(lpContract, farmContract, account);
      return tx;
    } catch (e) {
      return false;
    }
  }, [account, lpContract, farmContract]);

  return { onApprove: handleApprove };
}

export default useApprove;
