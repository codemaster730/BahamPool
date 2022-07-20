import { Disclosure, Transition } from '@headlessui/react';
import { ChevronDownIcon, ExternalLinkIcon } from '@heroicons/react/solid';
import btally from '../../assets/images/logo1.png';

import tallysmall from '../../assets/images/logo2.png';
import bnb from '../../assets/images/tokens/bnb.svg';
import btcb from '../../assets/images/tokens/btcb.svg';
import eth from '../../assets/images/tokens/eth.svg';
import xrp from '../../assets/images/tokens/xrp.svg';
import doge from '../../assets/images/tokens/doge.svg';
import ada from '../../assets/images/tokens/ada.svg';

const ClaimCard = ({ coverImg, avatar, tokenName, apyValue }) => {
    return (
        <div className='flex min-w-[320px] flex-col rounded-2xl border border-yellow-500 bg-gradient-to-b from-stone-600 to-slate-600 p-6 xl:absolute'>
            <div className='flex flex-row space-x-5 pb-4'>
                <figure className='relative inline-block'>
                    <img className='h-20 w-20' src={btally} alt='token' />
                    <span className='absolute bottom-2 right-2 block translate-y-1/2 translate-x-1/2 transform rounded-full border-2 border-white'>
                        <img
                            className='h-8 w-8 rounded-full'
                            src={btally}
                            alt='token'
                        />
                    </span>
                </figure>

                <div className=' flex flex-col items-end space-y-2'>
                    <h3 className='text-lg font-semibold text-white'>
                        Your $IBT Balance
                    </h3>
                    <h4 className='text-xl font-semibold text-primary-brand'>
                        2,340,000
                    </h4>
                    <p className='font-semibold text-white'>$359.94</p>
                </div>
            </div>
            <div className='flex w-full flex-row items-center justify-between'>
                <div className='flex flex-col space-y-2'>
                    <h3 className='inline-block space-x-1 font-semibold'>
                        <span className='text-white'>$IBT BACK</span>
                        <span className='text-primary-brand'>Rewards:</span>
                    </h3>

                    <div className='ml-4 flex items-center'>
                        <img
                            src={tallysmall}
                            alt='tally token'
                            className='mr-2 h-4 w-4'
                        />
                        <span className='font-semibold text-primary-brand'>
                            4,342
                        </span>
                    </div>
                    <div className='ml-4 flex items-center'>
                        <img
                            src={bnb}
                            alt='bnb token'
                            className='mr-2 h-4 w-4'
                        />
                        <span className='text-white'>1 IBT = 0.64 USD</span>
                    </div>
                </div>

                <button className='flex h-12 items-center justify-center rounded-lg bg-primary-brand px-4 font-semibold uppercase text-white outline outline-2 outline-yellow-500 transition-all hover:outline hover:outline-2 hover:outline-yellow-700'>
                    Claim
                </button>
            </div>

            <div className='border-t-2 border-[#708eb7]/10 py-4 px-5'>
                <button className='flex h-12 w-full items-center justify-center rounded-lg bg-primary-brand px-6 font-semibold text-white'>
                    Unlock Wallet
                </button>
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
                            <Disclosure.Panel>
                                <div className='space-y-2 px-4 pt-3 pb-2 text-xs text-gray-500'>
                                    <div className='flex justify-between text-sm text-white'>
                                        <span>Earn:</span>
                                        <span>$IBT BACK Rewards</span>
                                    </div>
                                    <div className='flex justify-between text-sm text-white'>
                                        <span>Platform:</span>
                                        <span>IBT SWAP</span>
                                    </div>
                                    <div className='flex justify-between text-sm text-white'>
                                        <span>Contract:</span>
                                        <a
                                            href='#!'
                                            className='flex items-center space-x-1'
                                        >
                                            <span className='text-primary-brand'>
                                                View Contract
                                            </span>
                                            <ExternalLinkIcon className='ml-2 h-4 w-4 text-primary-brand' />
                                        </a>
                                    </div>
                                </div>

                                <div className='flex items-center justify-end space-x-1'>
                                    <img
                                        src={btcb}
                                        alt='token'
                                        className='h-8 w-8 rounded-full'
                                    />
                                    <img
                                        src={eth}
                                        alt='token'
                                        className='h-8 w-8 rounded-full'
                                    />
                                    <img
                                        src={xrp}
                                        alt='token'
                                        className='h-8 w-8 rounded-full'
                                    />
                                    <img
                                        src={ada}
                                        alt='token'
                                        className='h-8 w-8 rounded-full'
                                    />
                                    <img
                                        src={doge}
                                        alt='token'
                                        className='h-8 w-8 rounded-full'
                                    />
                                </div>
                            </Disclosure.Panel>
                        </Transition>
                    </>
                )}
            </Disclosure>
        </div>
    );
};

export default ClaimCard;
