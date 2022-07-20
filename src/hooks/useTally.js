import { useContext } from 'react';
import { Context } from '../contexts/TallyProvider';

const useTally = () => {
  const { tally } = useContext(Context);
  return tally;
}

export default useTally;