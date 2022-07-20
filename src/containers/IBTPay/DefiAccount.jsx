import { Disclosure, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import classNames from 'classnames';
import React from 'react';
import { DefiNotFoundComp, DefiSingleAccount } from '../../components';

const DefiAccount = ({ title, accounts = [] }) => {
    return (
        <div className='rounded bg-white/10 p-6 px-9'>
            <Disclosure as='div'>
                {({ open }) => (
                    <>
                        <dt className='text-lg'>
                            <Disclosure.Button className='flex w-full items-start justify-between text-left text-gray-400'>
                                <span className=' font-light capitalize text-white'>
                                    {title}
                                </span>
                                <span className='ml-6 flex h-7 items-center'>
                                    <ChevronDownIcon
                                        className={classNames(
                                            open ? '-rotate-180' : 'rotate-0',
                                            'h-6 w-6 transform'
                                        )}
                                        aria-hidden='true'
                                    />
                                </span>
                            </Disclosure.Button>
                        </dt>
                        <Transition
                            show={open}
                            enter='transition ease-out duration-100'
                            enterFrom='opacity-0'
                            enterTo='opacity-100'
                            leave='transition ease-in duration-75'
                            leaveFrom='opacity-100'
                            leaveTo='opacity-0'
                        >
                            <Disclosure.Panel
                                as='dd'
                                className='mt-2 flex w-full flex-col space-y-8'
                            >
                                {accounts.length > 0 && (
                                    <div className='flex justify-between gap-x-8 text-sm text-tallyPay-primaryText'>
                                        <span>Token Balance</span>
                                        <span>Balance</span>
                                        <span className='w-24'>&nbsp;</span>
                                        <span className='w-24'>&nbsp;</span>
                                    </div>
                                )}

                                {accounts.length > 0 ? (
                                    accounts.map(account => (
                                        <DefiSingleAccount
                                            account={account}
                                            key={account}
                                        />
                                    ))
                                ) : (
                                    <DefiNotFoundComp />
                                )}
                            </Disclosure.Panel>
                        </Transition>
                    </>
                )}
            </Disclosure>
        </div>
    );
};

export default DefiAccount;
