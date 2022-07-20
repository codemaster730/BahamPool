import React, { createContext, useEffect, useState } from 'react';
import { useWeb3React } from "@web3-react/core";
import { TALLY } from '../../contracts';

export const Context = createContext({
  tally: undefined,
});

const TallyProvider = ({ children }) => {
  const {  connector,
    library,
    chainId,
    account,
    activate,
    deactivate,
    active,
    error,} = useWeb3React();
  
  const  [ethereum, setEthereum] = useState();
  const [tally, setTally] = useState();

  window.tally = tally;
  window.eth = ethereum;
  console.log("ethereum = ",ethereum);
  useEffect(() => {
      if(library)
        setEthereum(library.provider);
  }, [library]);

  useEffect(() => {
    if (ethereum) {
      const chainId = Number(ethereum.chainId);
      const tallyLib = new TALLY(ethereum, chainId, false, {
        defaultAccount: ethereum.selectedAddress,
        defaultConfirmations: 1,
        autoGasMultiplier: 1.5,
        testing: false,
        defaultGas: '6000000',
        defaultGasPrice: '1000000000000',
        accounts: [],
        ethereumNodeTimeout: 10000,
      });
      setTally(tallyLib);
      window.tallysauce = tallyLib;
    }
  }, [ethereum, library]);

  return <Context.Provider value={{ tally }}>{children}</Context.Provider>
}

export default TallyProvider;
