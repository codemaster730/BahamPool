import React from 'react';
import { Link } from 'react-router-dom';

const TallyPayIndex = () => {
    return (
        <div>
            <p>IBTPayIndex this will be the landing page for IBTPay</p>
            <ul className='text-2xl text-white'>
                <li>
                    <Link to='tally-wills'>IBT Wills</Link>
                </li>
                <li>
                    <Link to='living-trust'>Living Trust</Link>
                </li>
                <li>
                    <Link to='temp-lock'>Temp Lock</Link>
                </li>
                <li>
                    <Link to='my-defi'>My Defi</Link>
                </li>
            </ul>
        </div>
    );
};

export default TallyPayIndex;
