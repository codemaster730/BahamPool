import Tooltip from 'rc-tooltip';
import classNames from 'classnames';
import { Disclosure } from '@headlessui/react';
import { useState } from 'react';
import Web3ConnectModal from '../shared/Web3ConnectModal';
import {
    ExternalLinkIcon,
    InformationCircleIcon,
} from '@heroicons/react/outline';
import { MdOutlineHelpOutline, MdOutlineCalculate } from 'react-icons/md';
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/solid';
import { useWeb3React } from "@web3-react/core";
const FarmCard = ({ item }) => {
    const { active, connector, library, chainID, account} = useWeb3React();
    const {
        firstToken,
        secondToken,
        firstTokenIcon,
        secondTokenIcon,
        apy,
        arp,
        liquidity,
        lp,
        earned,
        isHot,
    } = item;
    const [connectModalOpen, setConnectModalOpen] = useState(false);

    return (
        <Disclosure>
            {({ open }) => (
                <div className='bg-white transition-all duration-200 first:rounded-t-2xl last:rounded-b-2xl odd:bg-[#f2f6fc] hover:bg-opacity-90'>
                    <Disclosure.Button className='flex w-full flex-col items-center  px-6 py-4     md:flex-row'>
                        <div className='flex w-full items-center justify-between md:w-fit'>
                            <div
                                className={classNames(
                                    'order-2 mr-8 ml-4 flex items-center justify-center rounded-2xl bg-[#f93b5d] px-3 py-1 text-xs font-semibold md:order-1',
                                    {
                                        'opacity-0': !isHot,
                                    }
                                )}
                            >
                                <span>Hot</span>
                            </div>

                            <div className='order-1 flex items-center space-x-2'>
                                <div className='flex items-center -space-x-1'>
                                    <img
                                        src={firstTokenIcon}
                                        alt='usdt'
                                        className='z-10 h-6 w-6 rounded-full outline outline-2 outline-white'
                                    />
                                    <img
                                        src={secondTokenIcon}
                                        alt='btally'
                                        className='h-6 w-6'
                                    />
                                </div>

                                <div className='text-sm font-semibold uppercase text-black'>
                                    <span>{firstToken}</span>
                                    <span>-</span>
                                    <span>{secondToken}</span>
                                </div>
                            </div>
                        </div>

                        <div className='mx-auto my-4 flex items-center md:my-0'>
                            <div className='mx-6 flex flex-col text-primary-brand md:ml-10'>
                                <span className='text-xs'>APY</span>
                                <div className='flex flex-row items-center space-x-2 font-semibold'>
                                    <span>{apy}%</span>
                                    <Tooltip
                                        placement='topLeft'
                                        trigger={['hover']}
                                        overlay={
                                            <span>
                                                APY is based on your one-year
                                                income if Harvest and Compound
                                                are made once a day. Provided
                                                APY calculations depend on
                                                current APR rates.
                                            </span>
                                        }
                                        overlayClassName='bg-[#888888] max-w-xs text-xs text-white py-2 px-4 rounded-lg'
                                        destroyTooltipOnHide
                                    >
                                        <MdOutlineHelpOutline className='hidden h-4 w-4 text-black md:block' />
                                    </Tooltip>
                                </div>
                            </div>

                            <div className='mx-6 flex flex-col text-primary-brand md:ml-10'>
                                <span className='text-xs'>APR</span>
                                <div className='flex flex-row items-center space-x-2 font-semibold'>
                                    <span>{arp}%</span>

                                    <MdOutlineCalculate className='hidden h-4 w-4 text-black md:block' />
                                </div>
                            </div>

                            <div className='mx-6 flex flex-col text-primary-brand md:ml-10'>
                                <span className='text-xs'>Liquidity</span>
                                <div className='flex flex-row items-center space-x-2 font-semibold text-black'>
                                    <span>$ {liquidity}</span>
                                    <Tooltip
                                        placement='topLeft'
                                        trigger={['hover']}
                                        overlay={
                                            <span>
                                                The total value of the funds in
                                                this farm’s liquidity pool
                                            </span>
                                        }
                                        overlayClassName='bg-[#888888] max-w-xs text-xs text-white py-2 px-4 rounded-lg'
                                        destroyTooltipOnHide
                                    >
                                        <MdOutlineHelpOutline className='hidden h-4 w-4 text-black md:block' />
                                    </Tooltip>
                                </div>
                            </div>
                        </div>

                        <div className='flex items-center space-x-10'>
                            <div className='flex items-center text-primary-brand md:flex-col'>
                                <span className='text-sm'>Earned</span>
                                <span className='ml-2 md:ml-0'>-</span>
                            </div>

                            <div className='flex items-center text-xs font-semibold text-primary-brand'>
                                <span>Details</span>
                                <ChevronDownIcon
                                    className={classNames('h-4 w-4', {
                                        'rotate-180 transform': open,
                                    })}
                                />
                            </div>

                            <span>
                                <Tooltip
                                    placement='topLeft'
                                    overlay={
                                        <div className='flex flex-col space-y-3'>
                                            <div className='flex flex-col'>
                                                <span className='text-xs font-light text-primary-brand'>
                                                    Multiplier
                                                </span>
                                                <span className='text-base text-white'>
                                                    7.1X
                                                </span>
                                            </div>

                                            <a
                                                href='#!'
                                                className='flex items-center space-x-2 text-base text-primary-brand'
                                            >
                                                <span>View Contract</span>
                                                <ExternalLinkIcon className='h-4 w-4' />
                                            </a>
                                        </div>
                                    }
                                    overlayClassName='bg-[#888888] w-fit text-xs text-white py-2 px-4 rounded-lg'
                                    destroyTooltipOnHide
                                >
                                    <InformationCircleIcon className='h-5 w-5 text-black' />
                                </Tooltip>
                            </span>
                        </div>
                    </Disclosure.Button>

                    <Disclosure.Panel className='flex flex-col items-center rounded-b-2xl bg-[#f2f6fc] py-5 px-8 md:flex-row'>
                        <div className='flex w-full grow items-center justify-between border-b-2 border-gray-400/40 pb-3 md:w-fit md:justify-center md:border-0 md:pb-0'>
                            <a
                                href='https://exchange.tally.org/#/add/0x965F527D9159dCe6288a2219DB51fc6Eef120dD1/0x55d398326f99059ff775485246999027b3197955'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='order-2 flex h-12 items-center justify-center rounded-lg border-2 border-primary-brand bg-white px-6 text-sm font-semibold text-primary-brand md:order-1'
                            >
                                Get LP
                            </a>
                            <div className='order-1 ml-4 flex flex-col text-xs font-semibold text-primary-brand md:order-2'>
                                <span>Available LP</span>
                                <span className='text-sm text-black'>
                                    {lp} LP
                                </span>
                                <span>$0.0000</span>
                            </div>

                            <ChevronRightIcon className='hidden h-10 w-10 text-gray-400 md:order-3 md:block' />
                        </div>

                        <div className='mx-auto ml-auto flex w-full max-w-sm items-center space-x-2 border-b-2 border-gray-400/40 py-4 px-0 md:border-0 md:py-0 md:px-10' style={{display: active ? "none" : ""}}>
                            <button
                                onClick={() => {setConnectModalOpen(true);}}
                                className='ml-auto flex h-12 w-fit items-center justify-center rounded-lg bg-primary-brand px-6 font-semibold text-white md:ml-0 md:w-full'>
                                Unlock Wallet
                            </button>
                            
                            <ChevronRightIcon className='hidden h-12 w-12 text-gray-400 md:block' />
                        </div>
                        <Web3ConnectModal
                                open={connectModalOpen}
                                setOpen={setConnectModalOpen}
                            />           
                        <div className='mx-10 flex w-full max-w-full items-center justify-between space-x-4 py-4 md:w-fit md:max-w-[250px] md:py-0'>
                            <button
                                disabled
                                className='order-2 flex h-12 items-center justify-center rounded-lg bg-primary-brand px-6 font-semibold text-white disabled:cursor-not-allowed disabled:opacity-80 md:order-1'
                            >
                                Harvest
                            </button>

                            <div className='order-1 flex flex-col text-xs font-semibold text-black'>
                                <span className='text-primary-brand'>
                                    Earned
                                </span>
                                <span className='text-sm'>{earned} IBT</span>
                                <span>$0.0000</span>
                            </div>
                        </div>
                    </Disclosure.Panel>
                </div>
            )}
        </Disclosure>
    );
};

export default FarmCard;
