import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { QuestionMarkCircleIcon } from '@heroicons/react/outline';
import { ArrowSmDownIcon, XIcon } from '@heroicons/react/solid';
import { CommonBaseToken, CurrencyItem } from '../../components';

import tallyIcon from '../../assets/images/logo1.png';
import bnbIcon from '../../assets/images/tokens/bnb.svg';
import busdIcon from '../../assets/images/tokens/busd.svg';
import usdtIcon from '../../assets/images/tokens/usdt.svg';
import adaIcon from '../../assets/images/tokens/ada.svg';
import airtIcon from '../../assets/images/tokens/airt.svg';
import alpacaIcon from '../../assets/images/tokens/alpaca.svg';

export default function SelectTokenModal({ open, setOpen }) {
    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog
                as='div'
                className='fixed inset-0 z-10 overflow-y-auto'
                onClose={setOpen}
            >
                <div className='flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0'>
                    <Transition.Child
                        as={Fragment}
                        enter='ease-out duration-300'
                        enterFrom='opacity-0'
                        enterTo='opacity-100'
                        leave='ease-in duration-200'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                    >
                        <Dialog.Overlay className='fixed inset-0 bg-black bg-opacity-50 transition-opacity' />
                    </Transition.Child>

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span
                        className='hidden sm:inline-block sm:h-screen sm:align-middle'
                        aria-hidden='true'
                    >
                        &#8203;
                    </span>
                    <Transition.Child
                        as={Fragment}
                        enter='ease-out duration-300'
                        enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
                        enterTo='opacity-100 translate-y-0 sm:scale-100'
                        leave='ease-in duration-200'
                        leaveFrom='opacity-100 translate-y-0 sm:scale-100'
                        leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
                    >
                        <div className='relative inline-block transform overflow-hidden rounded-lg bg-white text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-md sm:align-middle'>
                            <div className='grid auto-rows-auto gap-y-4 bg-white px-5 pt-5 pb-8'>
                                <div className='flex w-full items-center justify-between'>
                                    <h1 className='flex items-center space-x-3 text-lg font-medium text-primary-darkText'>
                                        Select a Token
                                        <QuestionMarkCircleIcon className='ml-2 h-4 w-4' />
                                    </h1>

                                    <XIcon
                                        className='h-5 w-5 cursor-pointer'
                                        onClick={() => setOpen(false)}
                                    />
                                </div>

                                <input
                                    type='text'
                                    placeholder='Search name or Paste Address'
                                    className='w-full rounded-lg border border-primary-brand py-2 px-4 text-lg text-[#708db7] outline-none transition placeholder:font-medium focus:border-2 focus:border-primary-darkText'
                                />

                                <div className='flex flex-col rounded-lg border border-[#e4efff] p-2'>
                                    <h3 className='flex items-center text-sm text-[#777777]'>
                                        Common bases{' '}
                                        <QuestionMarkCircleIcon className='ml-2 h-4 w-4' />
                                    </h3>

                                    <div className='grid grid-cols-3 gap-4 py-6 sm:grid-cols-4'>
                                        <CommonBaseToken
                                            icon={tallyIcon}
                                            name='IBT'
                                        />
                                        <CommonBaseToken
                                            icon={bnbIcon}
                                            name='Bnb'
                                        />
                                        <CommonBaseToken
                                            icon={busdIcon}
                                            name='Busd'
                                        />
                                        <CommonBaseToken
                                            icon={usdtIcon}
                                            name='Usdt'
                                        />
                                    </div>
                                </div>

                                <div className='my-1 flex flex-col'>
                                    <div className='my-4 flex justify-between'>
                                        <span className='text-sm font-semibold leading-6 text-primary-darkText'>
                                            Token Name
                                        </span>

                                        <button className='rounded-lg bg-primary-brand p-2'>
                                            <ArrowSmDownIcon className='h-4 w-4 text-white' />
                                        </button>
                                    </div>

                                    <div className='h-20 w-full overflow-auto px-4 opacity-50'>
                                        <CurrencyItem
                                            icon={bnbIcon}
                                            name='bnb'
                                        />
                                        <CurrencyItem
                                            icon={adaIcon}
                                            name='Ada'
                                        />
                                        <CurrencyItem
                                            icon={airtIcon}
                                            name='Airt'
                                        />
                                        <CurrencyItem
                                            icon={alpacaIcon}
                                            name='Alpaca'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    );
}
