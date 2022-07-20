import React, { useState } from 'react';

import useTally from '../../hooks/useTally';
import { getFarms } from '../../contracts/utils';

import Context from './context';

const Farms = ({ children }) => {
  const [unharvested] = useState(0);

  const tally = useTally();
  const farms = getFarms(tally);

  return (
    <Context.Provider
      value={{
        farms,
        unharvested,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default Farms;
