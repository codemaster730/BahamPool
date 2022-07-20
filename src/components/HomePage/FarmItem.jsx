import React from 'react';
import usdt from '../../assets/images/tokens/usdt.svg';
import tally from '../../assets/images/tokens/btally.png';

import { MdOutlineCalculate, MdOutlineHelpOutline } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Tooltip from 'rc-tooltip';

const FarmItem = ({ tokenImg, tokenName, apy }) => {
    return (
        <div className='flex h-20 flex-row items-center border-b border-primary-dark/10 py-5 px-3 transition-colors duration-300 hover:bg-[#f2f6fc] sm:px-6 md:py-3 md:px-4'>
            <div className='mr-2 flex -space-x-3'>
                <img
                    src={tokenImg || usdt}
                    alt='usdt'
                    className='z-20 h-7 w-7 rounded-full border-2 border-white'
                />
                <img
                    src={tally}
                    alt='tally'
                    className='z-10 h-7 w-7 rounded-full border-2 border-transparent'
                />
            </div>

            <div className='text-xs font-semibold uppercase text-primary-darkText sm:text-sm'>
                <span>{tokenName}</span>-<span>IBT</span>
            </div>

            <div className='ml-auto flex flex-col '>
                <div className='flex flex-row items-center justify-between space-x-2 text-xs font-semibold text-[#708db7]'>
                    <span>APY</span>
                    <MdOutlineCalculate className='h-5 w-5' />
                </div>
                <div className='flex flex-row items-center justify-between space-x-2 text-xs text-[#708db7]'>
                    <span className='text-lg text-primary-brand'>{apy}%</span>
                    <Tooltip
                        placement='topLeft'
                        trigger={['hover']}
                        overlay={
                            <span>
                                APY is based on your one-year income if Harvest
                                and Compound are made once a day. Provided APY
                                calculations depend on current APR rates.
                            </span>
                        }
                        overlayClassName='bg-[#888888] max-w-xs text-xs text-white py-2 px-4 rounded-lg'
                        destroyTooltipOnHide
                        arrowContent
                    >
                        <MdOutlineHelpOutline className='h-5 w-5' />
                    </Tooltip>
                </div>
            </div>

            <div className='ml-10'>
                <Link to='/farms'>
                    <button className='inline-flex h-10 cursor-pointer items-center justify-center rounded-lg bg-[#e4efff] px-4 text-sm text-primary-brand transition duration-300 hover:bg-[#e4efff]/60'>
                        Start Farm
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default FarmItem;
