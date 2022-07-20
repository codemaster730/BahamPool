import { Disclosure, Transition } from '@headlessui/react';
import { ChevronDownIcon, ExternalLinkIcon } from '@heroicons/react/solid';
import btally from '../../assets/images/tokens/btally.png';
import doge from '../../assets/images/tokens/doge.svg';
import Web3ConnectModal from '../shared/Web3ConnectModal';
import { useState } from  'react';
import { useWeb3React } from "@web3-react/core";
const StakeTokensCard = ({ coverImg, avatar, tokenName, apyValue }) => {
    const [connectModalOpen, setConnectModalOpen] = useState(false);
    const { active} = useWeb3React();
    return (
        <div className='flex flex-col rounded-2xl bg-white p-6'>
            <div className='flex flex-row space-x-5 border-b-2 border-[#708eb7]/10 pb-4'>
                <figure className='relative inline-block'>
                    <img className='h-20 w-20' src={btally} alt='token' />
                    <span className='absolute bottom-2 right-2 block translate-y-1/2 translate-x-1/2 transform rounded-full border-2 border-white'>
                        <img
                            className='h-8 w-8 rounded-full'
                            src={doge}
                            alt='token'
                        />
                    </span>
                </figure>

                <div className=' flex flex-col space-y-2'>
                    <h3 className='text-lg font-semibold text-primary-darkText'>
                        Auto Compound
                    </h3>
                    <h4 className='text-xs font-semibold text-[#444444]'>
                        Stake IBT - Earn IBT
                    </h4>
                    <p className='text-xl font-medium text-primary-brand'>
                        APY 0%
                    </p>
                </div>
            </div>

            <div className='py-4 px-5' style={{display: active ? "none" : ""}}>
                <button 
                    onClick={() => {setConnectModalOpen(true);}}
                    className='flex h-12 w-full items-center justify-center rounded-lg bg-primary-brand px-6 font-semibold text-white'
                >
                    Unlock Wallet
                </button>
                <Web3ConnectModal
                        open={connectModalOpen}
                        setOpen={setConnectModalOpen}
                />
            </div>

            <Disclosure>
                {({ open }) => (
                    <>
                        <Disclosure.Button className='mx-auto flex items-center justify-center px-4 py-2 font-semibold text-primary-brand'>
                            <span>{open ? 'Hide' : 'Details'}</span>
                            <ChevronDownIcon
                                className={`${
                                    open ? 'rotate-180 transform' : ''
                                } h-6 w-6 text-primary-brand`}
                            />
                        </Disclosure.Button>
                        <Transition
                            show={open}
                            enter='transition ease-out duration-300 transform'
                            enterFrom='-translate-y-2 opacity-0'
                            enterTo='translate-y-0 opacity-100'
                            leave='transition ease-in duration-100'
                            leaveFrom='translate-y-0 opacity-100'
                            leaveTo='-translate-y-2 opacity-0'
                        >
                            <Disclosure.Panel className='space-y-4 px-4 pt-3 pb-2 text-xs text-gray-500'>
                                <div className='flex'>
                                    <span className='text-sm text-[#708db7]'>
                                        Total Stake
                                    </span>
                                    <div className='flex-1 border-b border-dotted border-[#708db7]'></div>
                                    <span className='text-sm text-primary-darkText'>
                                        0
                                    </span>
                                </div>

                                <a
                                    href='#!'
                                    className='flex items-center space-x-1'
                                >
                                    <span className='text-base text-primary-brand'>
                                        View Contact
                                    </span>
                                    <ExternalLinkIcon className='ml-2 h-6 w-6 text-primary-brand' />
                                </a>
                            </Disclosure.Panel>
                        </Transition>
                    </>
                )}
            </Disclosure>
        </div>
    );
};

export default StakeTokensCard;
