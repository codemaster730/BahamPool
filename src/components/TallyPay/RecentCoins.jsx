import { Combobox } from '@headlessui/react';
import classNames from 'classnames';
import React from 'react';

const RecentCoins = ({ tokens }) => {
    return (
        <div className='space-y-2'>
            <p className='text-tallyPay-primaryText'>Recent Coins</p>
            <div className='grid grid-cols-2 gap-5 border-b border-white/10 md:grid-cols-4'>
                {tokens.slice(0, 4).map(token => (
                    <Combobox.Option
                        key={token.id}
                        className='relative my-3 cursor-pointer select-none text-white'
                        value={token}
                        as='div'
                    >
                        {({ selected, active }) => (
                            <>
                                <div
                                    className={classNames(
                                        'flex h-full w-full items-center rounded-lg py-2',
                                        active
                                            ? 'bg-tallyPay-dark'
                                            : 'bg-transparent'
                                    )}
                                >
                                    <img
                                        src={token.icon}
                                        alt=''
                                        className='h-8 w-8 flex-shrink-0 rounded-full'
                                    />
                                    <span
                                        className={classNames(
                                            selected
                                                ? 'font-semibold'
                                                : 'font-normal',
                                            'ml-2 block truncate'
                                        )}
                                    >
                                        {token.title}
                                    </span>
                                </div>
                            </>
                        )}
                    </Combobox.Option>
                ))}
            </div>
        </div>
    );
};

export default RecentCoins;
